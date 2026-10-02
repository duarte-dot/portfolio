/* ========== MENU SHOW & HIDDEN ========== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

function setMenu(open) {
  navMenu.classList.toggle("show-menu", open);
  if (navToggle) navToggle.setAttribute("aria-expanded", String(open));
}

/* ===== Menu Show ===== */
/* validates if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => setMenu(true));
}

/* ===== Menu Hidden ===== */
/* validates if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => setMenu(false));
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((n) => n.addEventListener("click", () => setMenu(false)));

/* ========== PORTFOLIO TABS ========== */
const portfolioTabs = [...document.querySelectorAll(".portfolio__tab")];

function selectProject(tab, fromKeyboard) {
  // keyboard switching is repeated fast, so it skips the crossfade
  tab.closest(".portfolio__container").classList.toggle("is-instant", !!fromKeyboard);
  portfolioTabs.forEach((t) => {
    const active = t === tab;
    t.setAttribute("aria-selected", active);
    t.tabIndex = active ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
  });
  if (fromKeyboard) tab.focus();
  tab.scrollIntoView({ block: "nearest", inline: "nearest" });
}

portfolioTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectProject(tab));
  tab.addEventListener("keydown", (e) => {
    const last = portfolioTabs.length - 1;
    const next = {
      ArrowRight: i + 1, ArrowDown: i + 1,
      ArrowLeft: i - 1, ArrowUp: i - 1,
      Home: 0, End: last,
    }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectProject(portfolioTabs[(next + last + 1) % (last + 1)], true);
  });
});

/* ========== CHANGE BACKGROUND HEADER ========== */
function scrollHeader() {
  const nav = document.getElementById("header");
  if (window.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ========== SHOW SCROLL UP ========== */
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");
  if (window.scrollY >= 560) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* ========== DARK THEME ========== */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle(darkTheme, isDark);
  themeButton.classList.toggle(iconTheme, isDark);
  themeButton.classList.toggle("uil-moon", !isDark);
  themeButton.setAttribute("aria-pressed", String(isDark));
}

/* saved choice wins, otherwise follow the operating system preference */
const savedTheme = localStorage.getItem("selected-theme");
const prefersDark =
  typeof window.matchMedia === "function" && window.matchMedia("(prefers-color-scheme: dark)").matches;

applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeButton.addEventListener("click", () => {
  const next = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem("selected-theme", next);
});

/* ========== SPOTIFY NOW PLAYING ========== */
const spotifyWidget = document.getElementById("spotify");

if (spotifyWidget) {
  const spotifyLink = document.getElementById("spotify-link");
  const spotifyCover = document.getElementById("spotify-cover");
  const spotifyLabel = document.getElementById("spotify-label");
  const spotifyTitle = document.getElementById("spotify-title");
  const spotifyArtist = document.getElementById("spotify-artist");
  const spotifyMeta = document.getElementById("spotify-meta");
  const spotifyProgress = document.getElementById("spotify-progress");
  const spotifyProgressBar = document.getElementById("spotify-progress-bar");

  const SPOTIFY_ENDPOINT = "/api/spotify";
  const SPOTIFY_POLL_MS = 30000;

  let spotifyPollTimer = null;
  let spotifyTickTimer = null;
  let spotifyTrack = null;
  /* when the payload arrived, used to advance the bar between polls */
  let spotifySyncedAt = 0;

  /* Reuses the site translation pass instead of duplicating the strings here,
     so the label keeps following the language switch after it changes. */
  function setSpotifyLabel(key) {
    if (spotifyLabel.getAttribute("translation") === key) return;

    spotifyLabel.setAttribute("translation", key);

    if (typeof traduzirSite === "function") {
      traduzirSite(typeof language === "string" ? language : "en");
    }
  }

  function stopSpotifyTicker() {
    if (spotifyTickTimer) {
      clearInterval(spotifyTickTimer);
      spotifyTickTimer = null;
    }
  }

  function stopSpotifyPolling() {
    if (spotifyPollTimer) {
      clearInterval(spotifyPollTimer);
      spotifyPollTimer = null;
    }
  }

  /* Extrapolates from the last known position so the bar and the timer keep
     moving without hammering the API once per second. */
  function elapsedSpotifyMs() {
    return Math.min(spotifyTrack.progressMs + (Date.now() - spotifySyncedAt), spotifyTrack.durationMs);
  }

  function formatSpotifyTime(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  /* Derived from <html lang>, which traduzirSite() keeps in sync. Reading the
     attribute rather than the language variable means this works no matter which
     script ran first. */
  function spotifyLocale() {
    return (document.documentElement.lang || "en").toLowerCase().startsWith("pt") ? "pt-BR" : "en";
  }

  /* Intl does the pt/en wording, so there is no dictionary to keep in sync */
  function formatSpotifyAgo(isoDate) {
    const stamp = Date.parse(isoDate);
    if (!Number.isFinite(stamp)) return "";
    if (typeof Intl === "undefined" || typeof Intl.RelativeTimeFormat !== "function") return "";

    const relative = new Intl.RelativeTimeFormat(spotifyLocale(), { numeric: "auto" });
    const minutes = Math.round((stamp - Date.now()) / 60000);

    if (Math.abs(minutes) < 60) return relative.format(Math.min(minutes, 0), "minute");

    const hours = Math.round(minutes / 60);
    if (Math.abs(hours) < 24) return relative.format(hours, "hour");

    return relative.format(Math.round(hours / 24), "day");
  }

  /* Kept separate from the label so a language change can refresh this text
     without touching the [translation] attribute, which would retrigger the
     translation pass and loop through the lang observer below. */
  function paintSpotifyMeta() {
    if (!spotifyTrack) return;

    if (spotifyTrack.isPlaying && spotifyTrack.durationMs && spotifyTrack.progressMs !== null) {
      spotifyMeta.textContent = `${formatSpotifyTime(elapsedSpotifyMs())} / ${formatSpotifyTime(
        spotifyTrack.durationMs
      )}`;
    } else if (spotifyTrack.playedAt) {
      spotifyMeta.textContent = formatSpotifyAgo(spotifyTrack.playedAt);
    } else {
      spotifyMeta.textContent = "";
    }
  }

  function spotifyTick() {
    if (!spotifyTrack || !spotifyTrack.isPlaying || !spotifyTrack.durationMs) return;

    spotifyProgressBar.style.width = `${(elapsedSpotifyMs() / spotifyTrack.durationMs) * 100}%`;
    paintSpotifyMeta();
  }

  function renderSpotify(data) {
    spotifyTrack = data;
    spotifySyncedAt = Date.now();

    spotifyTitle.textContent = data.title;
    spotifyArtist.textContent = data.artist || "";

    spotifyLink.href = data.songUrl || "https://open.spotify.com/";
    spotifyLink.title = data.artist ? `${data.title} \u2014 ${data.artist}` : data.title;

    /* the cover is decorative: the link already exposes title and artist as text */
    if (data.albumImageUrl) {
      spotifyCover.src = data.albumImageUrl;
      spotifyCover.hidden = false;
    } else {
      spotifyCover.removeAttribute("src");
      spotifyCover.hidden = true;
    }

    spotifyWidget.classList.toggle("spotify--playing", Boolean(data.isPlaying));
    setSpotifyLabel(data.isPlaying ? "spotify-now-playing" : "spotify-last-played");

    const showProgress = Boolean(data.isPlaying && data.durationMs && data.progressMs !== null);
    spotifyProgress.hidden = !showProgress;

    stopSpotifyTicker();
    paintSpotifyMeta();

    if (showProgress) {
      spotifyTick();
      spotifyTickTimer = setInterval(spotifyTick, 1000);
    } else {
      spotifyProgressBar.style.width = "0";
    }

    spotifyWidget.hidden = false;
  }

  async function loadSpotify() {
    try {
      const response = await fetch(SPOTIFY_ENDPOINT, { headers: { Accept: "application/json" } });

      if (!response.ok) throw new Error(`endpoint returned ${response.status}`);

      const data = await response.json();
      if (!data || !data.title) throw new Error("endpoint returned no track");

      renderSpotify(data);
    } catch (error) {
      /* The widget is a nice-to-have. If the credentials are missing or Spotify
         is down, stay hidden rather than showing a broken card. */
      console.warn("[spotify]", error.message);
      spotifyWidget.hidden = true;
      stopSpotifyTicker();
    }
  }

  function startSpotifyPolling() {
    stopSpotifyPolling();
    spotifyPollTimer = setInterval(loadSpotify, SPOTIFY_POLL_MS);
  }

  /* traduzirSite() rewrites <html lang> on every language switch, so observing
     that one attribute covers the language change without caring about which
     script registered its click handler first. */
  if (typeof MutationObserver === "function") {
    new MutationObserver(paintSpotifyMeta).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  }

  /* No point polling a tab nobody is looking at */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopSpotifyPolling();
      stopSpotifyTicker();
    } else {
      loadSpotify();
      startSpotifyPolling();
    }
  });

  loadSpotify();
  startSpotifyPolling();
}
