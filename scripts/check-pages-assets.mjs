import assert from "node:assert/strict"
import fs from "node:fs"
import { spawn } from "node:child_process"

const base = "http://127.0.0.1:4179/warc-instagram-posts/"
const server = spawn("node", ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4179", "--strictPort", "--base", "/warc-instagram-posts/"], { stdio: "ignore" })
const checked = []
try {
  let ready = false
  for (let attempt = 0; attempt < 60; attempt++) {
    try { ready = (await fetch(base, { signal: AbortSignal.timeout(1500) })).ok } catch {}
    if (ready) break
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
  assert.ok(ready, "production preview did not start")
  const data = JSON.parse(fs.readFileSync("src/data/new-clinic-carousels.json", "utf8"))
  const paths = ["", "posts", "outreach", "archive", "new-clinic-carousels/warc-new-clinic-carousels.zip", "outreach/warc-outreach-templates.json", "outreach/warc-prospect-research.json", "outreach/warc-prospect-research.csv", ...data.carousels.flatMap((carousel) => [ ...carousel.slides.map((slide) => slide.path), `new-clinic-carousels/captions/${carousel.slug}.txt`, `new-clinic-carousels/alt-text/${carousel.slug}.txt`])]
  for (const path of paths) {
    const response = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(3000) })
    assert.equal(response.status, 200, path)
    if (path.endsWith(".png")) assert.match(response.headers.get("content-type"), /image\/png/)
    if (path.endsWith(".json")) await response.json()
    if (path.endsWith(".zip")) assert.equal((await response.arrayBuffer()).byteLength, 4127698)
    checked.push(path || "index")
  }
  console.log(`PASS ${checked.length} production-base HTTP routes/assets (48 PNGs, 16 caption/alt-text files, ZIP, JSON/CSV and app routes).`)
} finally { server.kill("SIGTERM") }
