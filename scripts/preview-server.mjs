import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const port = Number(process.env.PORT ?? 3000);
const root = process.cwd();
const publicDir = join(root, "public");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

function resolvePublicPath(url = "/") {
  const path = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const requested = path === "/" ? "/preview.html" : path;
  const safePath = normalize(requested).replace(/^([.][.][\/\\])+/, "");
  return join(publicDir, safePath);
}

const server = createServer((request, response) => {
  const filePath = resolvePublicPath(request.url);

  if (!filePath.startsWith(publicDir) || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] ?? "application/octet-stream" });
  createReadStream(filePath).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Khaan static preview ready: http://localhost:${port}`);
});
