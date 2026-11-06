# Integration QA — 6 November 2026 (Europe/London)

## Passed
- `bun install --frozen-lockfile`
- `bun run content:generate`: source SHA-256/schema validation; 8 carousels, 48 slides, 8 public templates, 11 research entries.
- `bun test`: 17 tests, 266 assertions; artwork dimensions/alt text/captions, immutable source, category correctness, no direct contacts in public research export, default-blocked templates, separate UK operator/subscriber checks, Spain cold block, follow-up/engagement requirements.
- `bun run build`: TypeScript + Vite production build.
- `bun run lint`: exit 0, exactly the same 5 pre-existing Fast Refresh warnings in shared UI/logo files as baseline.
- `bun run test:assets`: 72 production-base HTTP routes/assets passed; all 48 original PNGs have image/png; ZIP response matches 4,127,698 bytes; JSON is parseable; caption and alt-text files resolve under `/warc-instagram-posts/`.
- `git diff --check`.

## Not completed
The isolated Playwright browser run hung before its first assertion and was interrupted. No successful browser interaction, screenshot or 360px visual result is claimed. The script now has bounded timeouts; parent/owner preview QA remains required before merging. HTTP route checks are not a substitute for visual or clipboard interaction QA.

## Scope
No merge, deployment, Instagram posting, email/DM sending, local user-machine checkout change or Lovable mutation. Existing `main`-only Pages deploy workflow is unchanged.

## Provenance and corrections
Exact final source snapshot SHA-256: `60234846e0d46a1ab92c159f30ae08fd9f09c0406deb421ee72296e1ec6ff677`, schema `1.1.0`. Generated public copy is aligned to the actual 30-minute Cal event. Research categories retain 2 confirmed recent openings/new sites, 1 launch-watch + 2 upcoming unconfirmed/planned, 6 historical, 2 excluded. Elgin's planned date is not a confirmed event date. Hamilton is a relocation, with practice operator incomplete; a parent/non-trading group does not unlock email eligibility.
