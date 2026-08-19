/* ==========================================================================
 * One-off helper that mints the SPOTIFY_REFRESH_TOKEN used by /api/spotify.
 *
 * Run it once, from the project root:
 *   node scripts/spotify-refresh-token.js
 *
 * Before running, add this exact URL to "Redirect URIs" in your app on
 * https://developer.spotify.com/dashboard :
 *
 *   http://127.0.0.1:8888/callback
 *
 * Spotify rejects "localhost" as a redirect URI, the literal loopback IP is
 * required. See the redirect URI rules in the Spotify docs.
 *
 * No dependencies: Node 18+ built-ins only.
 * ========================================================================== */

const http = require("node:http");
const crypto = require("node:crypto");
const readline = require("node:readline");

const PORT = 8888;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;

/* Read-only scopes: enough for the widget, nothing more. */
const SCOPES = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state"];

function ask(question, { mask = false } = {}) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });

  return new Promise((resolve) => {
    if (mask) {
      /* Keep the client secret off the screen while it is typed. */
      const onKeypress = (char) => {
        if (char === "\r" || char === "\n") return;
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0);
        process.stdout.write(`${question}${"*".repeat(rl.line.length)}`);
      };
      process.stdin.on("data", onKeypress);
      rl.once("close", () => process.stdin.off("data", onKeypress));
    }

    rl.question(question, (answer) => {
      rl.close();
      if (mask) process.stdout.write("\n");
      resolve(answer.trim());
    });
  });
}

function respond(response, status, message) {
  response.writeHead(status, { "Content-Type": "text/html; charset=utf-8" });
  response.end(
    `<!doctype html><meta charset="utf-8"><title>Spotify</title>` +
      `<body style="font-family:system-ui;padding:3rem;line-height:1.5">` +
      `<h1>${message}</h1><p>You can close this tab and go back to the terminal.</p></body>`
  );
}

/* Waits for Spotify to redirect back, and hands over the authorization code. */
function waitForCallback(expectedState) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((request, response) => {
      const url = new URL(request.url, REDIRECT_URI);

      if (url.pathname !== "/callback") {
        respond(response, 404, "Not found");
        return;
      }

      const error = url.searchParams.get("error");
      const code = url.searchParams.get("code");
      const state = url.searchParams.get("state");

      const finish = (err, value) => {
        server.close();
        if (err) reject(err);
        else resolve(value);
      };

      if (error) {
        respond(response, 400, "Authorization denied");
        finish(new Error(`Spotify returned "${error}"`));
        return;
      }

      /* Guards against a callback that did not originate from this run. */
      if (state !== expectedState) {
        respond(response, 400, "State mismatch");
        finish(new Error("state mismatch, aborting"));
        return;
      }

      if (!code) {
        respond(response, 400, "Missing authorization code");
        finish(new Error("no authorization code in the callback"));
        return;
      }

      respond(response, 200, "Authorized \u2713");
      finish(null, code);
    });

    server.on("error", reject);

    /* Bind to the loopback IP only, never to every interface. */
    server.listen(PORT, "127.0.0.1");
  });
}

async function exchangeCode(clientId, clientSecret, code) {
  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`token exchange failed (${response.status}): ${JSON.stringify(data)}`);
  }

  return data;
}

async function main() {
  const clientId = process.env.SPOTIFY_CLIENT_ID || (await ask("Client ID: "));
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET || (await ask("Client secret: ", { mask: true }));

  if (!clientId || !clientSecret) {
    throw new Error("client id and client secret are both required");
  }

  const state = crypto.randomBytes(16).toString("hex");

  const authorizeUrl = new URL("https://accounts.spotify.com/authorize");
  authorizeUrl.search = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: SCOPES.join(" "),
    redirect_uri: REDIRECT_URI,
    state,
  }).toString();

  console.log(`\nMake sure ${REDIRECT_URI} is listed as a Redirect URI in your Spotify app.`);
  console.log("\nOpen this URL in your browser and approve the request:\n");
  console.log(authorizeUrl.toString());
  console.log(`\nWaiting for the redirect on ${REDIRECT_URI} ...`);

  const code = await waitForCallback(state);
  const tokens = await exchangeCode(clientId, clientSecret, code);

  if (!tokens.refresh_token) {
    throw new Error("Spotify did not return a refresh token");
  }

  console.log("\nDone. Add these to your Vercel environment variables:\n");
  console.log(`SPOTIFY_CLIENT_ID=${clientId}`);
  console.log("SPOTIFY_CLIENT_SECRET=<the client secret you just entered>");
  console.log(`SPOTIFY_REFRESH_TOKEN=${tokens.refresh_token}`);
  console.log("\nThe refresh token does not expire. Keep it secret, treat it like a password.\n");
}

main().catch((error) => {
  console.error(`\n${error.message}\n`);
  process.exit(1);
});
