# WARC content & outreach workspace

Green/cream WARC-branded React + TypeScript + Vite application for preparing organic Instagram content and reviewing dental-clinic outreach drafts. The application sends no messages and stores no personalisation or eligibility records between reloads.

## Pages
- `/posts`: 8 finished carousels × 6 original 1080×1350 PNG slides, full-pack ZIP, individual slide downloads, copyable captions, caption downloads and alt text.
- `/outreach`: 8 public DM/email message drafts, 3 email subjects, local-only personalisation, channel/region eligibility checks, sender workflow and dated clinic research.
- `/archive`: retirement policy for expired promotions, unsupported results and old person-specific outreach. Legacy source components are not imported by the active app.
- `/logo`: existing logo exports.

The demo CTA points to the existing [30-minute Cal.com event](https://cal.com/akroslab-uatcyn/whatsapp24-7receptionistmeeting); requests require confirmation. No PII is added to the URL.

## Develop and verify
```sh
bun install --frozen-lockfile
bun run dev
bun run content:generate
bun test
bun run build
bun run lint
bun run test:assets
```
`bun run test:preview` is an optional browser workflow test requiring `bunx playwright install chromium`. Its initial run in the integration environment hung before its first browser assertion; browser/mobile interaction QA was not completed by this change. Do not treat the test script as evidence of passing visual QA.

## Content provenance
The final supplied outreach schema 1.1.0 snapshot is preserved byte-for-byte at `docs/source-snapshots/warc-outreach-library.v1.1.0.json` (SHA-256 `60234846e0d46a1ab92c159f30ae08fd9f09c0406deb421ee72296e1ec6ff677`). It contains only public business research and internal campaign guidance, not credentials or private contacts. It is **not** included in the built app. The generator creates browser-safe exports without direct business email/phone fields or recipient-facing internal notes. The generated message copy updates earlier 5-minute wording to the actual 30-minute event; the source snapshot remains unchanged.

Research as of **6 November 2026 (Europe/London)**:
- 2 confirmed recent openings/new sites: Littlehampton and Hamilton (Hamilton is a relocation).
- 3 unconfirmed/planned launches: Elgin (announced 2 November date passed without confirmation), Buttercross and Bognor.
- 6 historical entries; 2 exclusions.

No practice is declared eligible to contact by virtue of its listing. Hamilton's parent/non-trading company is not the verified practice operator. WhatsApp usage and demand fit remain unverified in this research.

## Safety & deployment
Founder personal account first, WARC as product/proof hub, Akros Lab as corporate background. Ready to personalise is not legally approved. UK email and DM gates differ; Spain is inbound/prior opt-in only here. All copying starts blocked. JSON exports are planning assets, not a bypass or send-ready contact list. No send integration, bulk contact automation, guarantee, new price or unverified D2 result is added.

Production assets use `import.meta.env.BASE_URL` for GitHub Pages at `/warc-instagram-posts/`. The existing Pages workflow deploys **main**, so a PR branch does not publish the site. Do not merge until the owner reviews the UI preview. No Lovable project is touched by this repository.
