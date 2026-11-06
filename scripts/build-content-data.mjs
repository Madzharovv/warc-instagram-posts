import fs from "node:fs"
import path from "node:path"
import assert from "node:assert/strict"

const root = process.cwd()
const assetRoot = path.join(root, "public/new-clinic-carousels")
const manifest = JSON.parse(fs.readFileSync(path.join(assetRoot, "manifest.json"), "utf8"))
const captionsSource = fs.readFileSync(path.join(assetRoot, "captions.md"), "utf8")
const altSource = fs.readFileSync(path.join(assetRoot, "alt-text.md"), "utf8")
const slugify = (value) => value.toLowerCase().replace(/^[0-9]+ · /, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
const title = (value) => value.replace(/^[0-9]+ · /, "")
const captionBlocks = [...captionsSource.matchAll(/```\n([\s\S]*?)\n```/g)].map((match) => match[1])
const altSections = altSource.split(/^## /m).slice(1).map((section) => {
  const [heading, ...lines] = section.trim().split("\n")
  return { heading: title(heading), slides: Object.fromEntries([...lines.join("\n").matchAll(/- `([^`]+)`: (.*)/g)].map((match) => [match[1], match[2]])) }
})
assert.equal(manifest.carousels.length, 8)
assert.equal(captionBlocks.length, 8)
assert.equal(altSections.length, 8)
const carousels = manifest.carousels.map((carousel, index) => {
  assert.equal(carousel.slides.length, 6)
  assert.equal(altSections[index].heading, title(carousel.title))
  return {
    id: carousel.id,
    slug: slugify(carousel.title),
    number: index + 1,
    title: title(carousel.title),
    folder: carousel.folder,
    caption: captionBlocks[index],
    slides: carousel.slides.map((slide) => ({
      file: slide.file,
      kind: slide.kind,
      headline: slide.headline,
      alt: altSections[index].slides[slide.file],
      path: `new-clinic-carousels/slides/${carousel.folder}/${slide.file}`,
    })),
  }
})
const library = JSON.parse(fs.readFileSync(path.join(root, "docs/source-snapshots/warc-outreach-library.v1.1.0.json"), "utf8"))
const crypto = await import("node:crypto")
assert.equal(crypto.createHash("sha256").update(fs.readFileSync(path.join(root, "docs/source-snapshots/warc-outreach-library.v1.1.0.json"))).digest("hex"), "60234846e0d46a1ab92c159f30ae08fd9f09c0406deb421ee72296e1ec6ff677", "The supplied final source snapshot must remain unchanged")
assert.equal(library.meta.schema_version, "1.1.0")
const sourceTemplates = library.templates
const makeEntry = ({ source, title, channels, body, group, requiresGate }) => ({
  id: source.id,
  title,
  channels,
  language: source.language ?? "en",
  group,
  body,
  requiresGate: requiresGate ?? source.requires_gate,
  actionType: source.action_type,
})
const bookingAlignedBody = (copy) => copy.replaceAll("free 5-minute walkthrough (demo flow, nothing to install to see it)", "free 30-minute walkthrough on a sample enquiry (nothing to install to see it)").replaceAll("free 5-minute walkthrough", "free 30-minute walkthrough on a sample enquiry").replaceAll("llamada de 5 minutos", "llamada de 30 minutos").replaceAll("move to email or call for the 5-minute walkthrough", "move to email or call for the 30-minute walkthrough").replaceAll("5-minute WARC walkthrough", "30-minute WARC walkthrough")
const templates = [
  ...sourceTemplates.instagram_openings_en.map((source, index) => makeEntry({
    source,
    title: ["New-clinic opener", "Hand-off question", "WhatsApp-use question — start here"][index],
    channels: ["instagram_dm"],
    body: bookingAlignedBody(source.body),
    group: "Instagram opening",
  })),
  makeEntry({
    source: sourceTemplates.instagram_or_email_es_inbound_only[0],
    title: "Spanish inbound / opt-in reply",
    channels: ["instagram_dm", "email"],
    body: bookingAlignedBody(sourceTemplates.instagram_or_email_es_inbound_only[0].body),
    group: "Inbound reply",
  }),
  makeEntry({
    source: sourceTemplates.email_bodies_en[0],
    title: "UK corporate walkthrough email",
    channels: ["email"],
    body: bookingAlignedBody(sourceTemplates.email_bodies_en[0].body_paragraphs.join("\n\n")),
    group: "Email opening",
  }),
  ...sourceTemplates.follow_ups.filter((source) => source.action_type === "message").map((source) => makeEntry({
    source,
    title: source.id === "fu_day4_5" ? "Gentle follow-up · days 4–5" : "Close the loop · days 12–14",
    channels: ["instagram_dm", "email"],
    body: bookingAlignedBody(source.body),
    group: "Follow-up",
  })),
  makeEntry({
    source: sourceTemplates.follow_ups.find((source) => source.id === "fu_on_engage"),
    title: "Walkthrough reply after engagement",
    channels: ["instagram_dm", "email"],
    body: bookingAlignedBody(sourceTemplates.follow_ups.find((source) => source.id === "fu_on_engage").optional_ack_message.body),
    group: "Engaged reply",
    requiresGate: "recipient_engaged_in_thread_plus_original_gate",
  }),
]
const subjects = sourceTemplates.email_subjects_en.map(({ id, text }) => ({ id, text: bookingAlignedBody(text) }))
const dateEvidence = (prospect) => ({
  publicationDate: prospect.opening_evidence.publication_date ?? prospect.opening_evidence.date,
  eventDate: prospect.prospect_category === "current" || prospect.prospect_category === "historical" ? (prospect.opening_evidence.event_date ?? (prospect.opened_precision === "day" ? prospect.opened : null)) : null,
  plannedOpenDate: prospect.opening_evidence.planned_open_date ?? null,
  summary: prospect.opening_evidence.summary,
  url: prospect.opening_evidence.url,
})
const sanitiseProspect = (prospect) => ({
  id: prospect.id,
  clinicName: prospect.clinic_name,
  location: prospect.location,
  market: prospect.market,
  category: prospect.prospect_category,
  lifecycle: prospect.lifecycle,
  opened: prospect.opened,
  listLabel: prospect.list_label,
  lifecycleLabel: prospect.lifecycle_age_label,
  siteUrl: prospect.site_url,
  whatsappUseVerified: prospect.whatsapp_use_verified,
  whatsappObservation: prospect.whatsapp_observation ?? "WhatsApp use unverified; do not assume.",
  bookingObservation: prospect.booking_observation?.replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[public contact omitted]").replace(/01903 323669/g, "[public contact omitted]") ?? null,
  fitClass: prospect.fit_class,
  operatorStatus: prospect.operator.status,
  channelEligibility: prospect.channel_eligibility,
  evidence: dateEvidence(prospect),
})
const prospects = library.prospects.map(sanitiseProspect)
const excluded = library.prospects_excluded.map(({ id, clinic_name, location, reason }) => ({ id, clinicName: clinic_name, location, reason }))
assert.equal(prospects.filter((p) => p.category === "current").length, 2)
assert.equal(prospects.filter((p) => ["launch_watch", "upcoming"].includes(p.category)).length, 3)
assert.equal(prospects.filter((p) => p.category === "historical").length, 6)
assert.equal(templates.length, 8)
assert.ok(templates.every((template) => !template.body.includes("5-minute") && !template.body.includes("5 minutos")))
assert.ok(prospects.every((p) => !("public_business_contact" in p)))
fs.mkdirSync(path.join(root, "src/data"), { recursive: true })
fs.mkdirSync(path.join(root, "public/outreach"), { recursive: true })
fs.mkdirSync(path.join(root, "public/new-clinic-carousels/captions"), { recursive: true })
fs.mkdirSync(path.join(root, "public/new-clinic-carousels/alt-text"), { recursive: true })
for (const carousel of carousels) {
  fs.writeFileSync(path.join(root, `public/new-clinic-carousels/captions/${carousel.slug}.txt`), `${carousel.caption}\n`)
  fs.writeFileSync(path.join(root, `public/new-clinic-carousels/alt-text/${carousel.slug}.txt`), carousel.slides.map((slide, index) => `${index + 1}. ${slide.file}\n${slide.alt}`).join("\n\n") + "\n")
}
fs.writeFileSync(path.join(root, "src/data/new-clinic-carousels.json"), `${JSON.stringify({ product: manifest.product, revision: manifest.revision, carouselCount: 8, slideCount: 48, width: 1080, height: 1350, carousels }, null, 2)}\n`)
for (const template of templates) {
  if (template.channels.includes("email") && !template.body.toLowerCase().includes("reply stop") && !template.body.toLowerCase().includes("responde baja") && template.id !== "es_inbound_reply") {
    template.body += "\n\nTo opt out of further email from me, reply stop."
  }
}
const templateExport = {
  schemaVersion: library.meta.schema_version,
  sourceSha256: "60234846e0d46a1ab92c159f30ae08fd9f09c0406deb421ee72296e1ec6ff677",
  asOf: library.meta.as_of,
  status: "ready_to_personalise_not_legally_approved",
  senderStrategy: "Personal founder first; WARC is the product/proof hub; Akros Lab is corporate background.",
  booking: { minutes: 30, provider: "Google Meet", requiresConfirmation: true, url: "https://cal.com/akroslab-uatcyn/whatsapp24-7receptionistmeeting" },
  subjects,
  templates,
  note: "Public message bodies only. No internal_notes or workflow_instruction are included. Channel eligibility remains locked by default in the UI. Follow-ups require the original channel gate to remain valid and no opt-out.",
}
fs.writeFileSync(path.join(root, "src/data/consent-rules.json"), `${JSON.stringify({ schemaVersion: library.meta.schema_version, consentGateCommon: library.consent_gate_common, templateGateIds: Object.fromEntries(templates.map((template) => [template.id, template.requiresGate])) }, null, 2)}\n`)
fs.writeFileSync(path.join(root, "src/data/outreach-templates.json"), `${JSON.stringify(templateExport, null, 2)}\n`)
const researchExport = { schemaVersion: library.meta.schema_version, sourceSha256: templateExport.sourceSha256, asOf: library.meta.as_of, counts: { confirmedCurrent: 2, unconfirmedOrPlanned: 3, historical: 6, excluded: 2 }, prospects, excluded, note: "Research only; not a send-ready list. Public direct phone/email contact details intentionally omitted. Hamilton is a relocation; MYDENTIST GROUP LIMITED is parent/non-trading context, not a verified practice operator. Verify WhatsApp use, operator, lawful basis and channel eligibility before any outreach." }
fs.writeFileSync(path.join(root, "public/outreach/warc-prospect-research.json"), `${JSON.stringify(researchExport, null, 2)}\n`)
fs.writeFileSync(path.join(root, "public/outreach/warc-outreach-templates.json"), `${JSON.stringify(templateExport, null, 2)}\n`)
const escapeCsv = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`
const rows = [["clinic", "market", "category", "lifecycle", "opening_or_planned_value", "evidence_publication_date", "evidence_event_date", "whatsapp_patient_use", "operator_status", "email_gate", "instagram_gate", "evidence_url", "clinic_site"], ...prospects.map((p) => [p.clinicName, p.market, p.category, p.lifecycle, p.opened, p.evidence.publicationDate, p.evidence.eventDate, p.whatsappUseVerified ? "verified" : "unverified", p.operatorStatus, p.channelEligibility.email, p.channelEligibility.instagram_dm, p.evidence.url, p.siteUrl])]
fs.writeFileSync(path.join(root, "public/outreach/warc-prospect-research.csv"), `${rows.map((row) => row.map(escapeCsv).join(",")).join("\n")}\n`)
console.log(`Generated ${carousels.length} carousels / ${carousels.flatMap((c) => c.slides).length} slides; ${templates.length} public templates; ${prospects.length} dated research entries.`)
