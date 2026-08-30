// Minimal, dependency-free static file server for the production build.
// Serves dist/ with SPA fallback to index.html, so client-side routes like
// /concepts/oneness resolve correctly on direct load or refresh.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = process.env.PORT ? Number(process.env.PORT) : 4173;
const HOST = process.env.HOST || "0.0.0.0";

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function resolveExistingFile(pathname) {
  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(DIST_DIR, safePath);
  if (!filePath.startsWith(DIST_DIR)) return null;
  try {
    const stats = await stat(filePath);
    return stats.isFile() ? filePath : null;
  } catch {
    return null;
  }
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
    const pathname = decodeURIComponent(url.pathname);

    let filePath = await resolveExistingFile(pathname === "/" ? "/index.html" : pathname);
    if (!filePath) {
      filePath = join(DIST_DIR, "index.html"); // SPA fallback for client-side routes
    }

    const data = await readFile(filePath);
    const type = MIME_TYPES[extname(filePath)] ?? "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": filePath.endsWith("index.html")
        ? "no-cache"
        : "public, max-age=31536000, immutable",
    });
    res.end(data);
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Comparative Dawah app serving dist/ at http://${HOST}:${PORT}`);
});
