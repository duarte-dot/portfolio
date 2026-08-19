/* ==========================================================================
 * GET /api/spotify
 *
 * Returns the track currently playing on my Spotify account, falling back to
 * the most recently played track when nothing is on.
 *
 * This runs server side on purpose: the client id, client secret and refresh
 * token stay in Vercel environment variables and never reach the browser. A
 * purely front-end version would have to ship the secret to every visitor.
 *
 * Required environment variables (see .env.example):
 *   SPOTIFY_CLIENT_ID
 *   SPOTIFY_CLIENT_SECRET
 *   SPOTIFY_REFRESH_TOKEN
 * ========================================================================== */

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing?additional_types=track,episode";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played?limit=1";

/* Module scope survives between warm invocations, so a single access token is
   reused until it is close to expiring instead of refreshing on every hit. */
let cachedToken = { value: null, expiresAt: 0 };

async function getAccessToken(clientId, clientSecret, refreshToken) {
  const now = Date.now();

  /* 60s of slack so a token never expires mid request */
  if (cachedToken.value && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.value;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`token refresh failed (${response.status}): ${detail}`);
  }

  const data = await response.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };

  return cachedToken.value;
}

/* Spotify returns images largest first (640 / 300 / 64). The widget renders a
   48px thumbnail, so the mid size is plenty and much lighter than the 640. */
function pickImage(images) {
  if (!Array.isArray(images) || images.length === 0) return null;

  const sorted = [...images].sort(
    (a, b) => Math.abs((a.width || 0) - 300) - Math.abs((b.width || 0) - 300)
  );

  return sorted[0].url || null;
}

/* Normalizes both tracks and podcast episodes into one flat shape. */
function normalize(item, extra = {}) {
  if (!item) return null;

  const isEpisode = item.type === "episode";

  const artist = isEpisode
    ? item.show && item.show.name
    : (item.artists || []).map((a) => a.name).join(", ");

  const album = isEpisode ? item.show && item.show.name : item.album && item.album.name;
  const images = isEpisode
    ? item.images || (item.show && item.show.images)
    : item.album && item.album.images;

  return {
    isPlaying: false,
    title: item.name || null,
    artist: artist || null,
    album: album || null,
    albumImageUrl: pickImage(images),
    songUrl: (item.external_urls && item.external_urls.spotify) || null,
    durationMs: item.duration_ms || null,
    progressMs: null,
    playedAt: null,
    ...extra,
  };
}

async function getNowPlaying(accessToken) {
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  /* 204 = nothing playing. 202 shows up occasionally for the same situation. */
  if (response.status === 204 || response.status === 202) return null;

  if (!response.ok) {
    throw new Error(`currently-playing failed (${response.status})`);
  }

  /* A 200 with an empty body has been observed in the wild, so guard the parse */
  const body = await response.text();
  if (!body) return null;

  const data = JSON.parse(body);

  /* Private sessions and local files come back without a usable item */
  if (!data.item) return null;

  return normalize(data.item, {
    isPlaying: Boolean(data.is_playing),
    progressMs: typeof data.progress_ms === "number" ? data.progress_ms : null,
  });
}

async function getRecentlyPlayed(accessToken) {
  const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error(`recently-played failed (${response.status})`);
  }

  const data = await response.json();
  const entry = (data.items || [])[0];
  if (!entry) return null;

  return normalize(entry.track, {
    isPlaying: false,
    playedAt: entry.played_at || null,
  });
}

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "method_not_allowed" });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    /* The widget treats any error as "stay hidden", so an unconfigured
       deployment simply renders the site without the card. */
    response.setHeader("Cache-Control", "no-store");
    return response.status(503).json({ error: "not_configured" });
  }

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken);
    const track = (await getNowPlaying(accessToken)) || (await getRecentlyPlayed(accessToken));

    if (!track || !track.title) {
      response.setHeader("Cache-Control", "no-store");
      return response.status(404).json({ error: "no_track" });
    }

    /* Cached briefly on the CDN so a burst of visitors cannot exhaust the
       Spotify rate limit, while still feeling live. */
    response.setHeader(
      "Cache-Control",
      "public, max-age=0, s-maxage=15, stale-while-revalidate=30"
    );

    return response.status(200).json(track);
  } catch (error) {
    console.error("[api/spotify]", error);
    response.setHeader("Cache-Control", "no-store");
    return response.status(502).json({ error: "spotify_unavailable" });
  }
};
