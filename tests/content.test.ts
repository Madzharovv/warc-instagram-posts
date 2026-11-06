import { describe, test, expect } from "bun:test"
import fs from "node:fs"
import crypto from "node:crypto"
import content from "../src/data/new-clinic-carousels.json"
import templates from "../src/data/outreach-templates.json"
import research from "../public/outreach/warc-prospect-research.json"
import { getEligibilityPlan, getTemplateItems, evaluateEligibility } from "../src/lib/outreach-eligibility"

const filled = (id: string, channel: "email" | "instagram_dm" = "instagram_dm", region: "uk" | "spain" = "uk") => {
  const check = getEligibilityPlan({ templateId: id, channel, region })
  const values = Object.fromEntries(getTemplateItems(id, check).map((item) => [item.id, item.id === "ig_basis" ? "consent" : "yes"]))
  return { check, values }
}
describe("content integrity", () => {
  test("source snapshot retains exact final hash and schema", () => {
    const bytes = fs.readFileSync("docs/source-snapshots/warc-outreach-library.v1.1.0.json")
    expect(crypto.createHash("sha256").update(bytes).digest("hex")).toBe("60234846e0d46a1ab92c159f30ae08fd9f09c0406deb421ee72296e1ec6ff677")
    expect(JSON.parse(bytes.toString()).meta.schema_version).toBe("1.1.0")
  })
  test("all 48 artwork files are real 1080 × 1350 PNGs with alt text and captions", () => {
    expect(content.carousels).toHaveLength(8)
    for (const carousel of content.carousels) {
      expect(carousel.slides).toHaveLength(6)
      expect(carousel.caption.length).toBeGreaterThan(80)
      for (const slide of carousel.slides) {
        const bytes = fs.readFileSync(`public/${slide.path}`)
        expect(bytes.subarray(0, 8).toString("hex")).toBe("89504e470d0a1a0a")
        expect(bytes.readUInt32BE(16)).toBe(1080)
        expect(bytes.readUInt32BE(20)).toBe(1350)
        expect(slide.alt.length).toBeGreaterThan(15)
      }
      expect(fs.existsSync(`public/new-clinic-carousels/captions/${carousel.slug}.txt`)).toBe(true)
      expect(fs.existsSync(`public/new-clinic-carousels/alt-text/${carousel.slug}.txt`)).toBe(true)
    }
  })
  test("research preserves confirmed, announced and historical distinctions", () => {
    expect(research.prospects.filter((p) => p.category === "current")).toHaveLength(2)
    expect(research.prospects.filter((p) => ["upcoming", "launch_watch"].includes(p.category))).toHaveLength(3)
    expect(research.prospects.filter((p) => p.category === "historical")).toHaveLength(6)
    const elgin = research.prospects.find((p) => p.id === "prospect_8to8_elgin")!
    expect(elgin.category).toBe("launch_watch")
    expect(elgin.evidence.eventDate).toBeNull()
    expect(elgin.evidence.plannedOpenDate).toBe("2026-11-02")
    expect(research.prospects.find((p) => p.id === "prospect_mydentist_hamilton_castle_street")!.operatorStatus).toBe("parent_group_named_clinic_operator_incomplete")
  })
  test("public bodies contain no internal notes, workflow instructions or old booking length", () => {
    expect(templates.templates).toHaveLength(8)
    expect(templates.subjects).toHaveLength(3)
    const json = JSON.stringify(templates.templates)
    expect(json).not.toContain("internal_notes")
    expect(json).not.toContain("workflow_instruction")
    expect(json).not.toContain("5-minute")
    expect(json).not.toContain("5 minutos")
    expect(json).not.toMatch(/€6|32 patients|guaranteed bookings/)
    expect(JSON.stringify(research)).not.toMatch(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)
    expect(JSON.stringify(research)).not.toContain("01903 323669")
  })
})
describe("eligibility safeguards", () => {
  for (const template of templates.templates) test(`${template.id} is blocked by default`, () => {
    const region = template.id === "es_inbound_reply" ? "spain" : "uk"
    const channel = template.channels[0] as "email" | "instagram_dm"
    const check = getEligibilityPlan({ templateId: template.id, region, channel })
    expect(evaluateEligibility({ templateId: template.id, values: {}, check }).length).toBeGreaterThan(0)
  })
  test("UK DM needs valid basis, not generic checked value", () => {
    const { check, values } = filled("ig_en_c")
    expect(evaluateEligibility({ templateId: "ig_en_c", values, check })).toEqual([])
    expect(evaluateEligibility({ templateId: "ig_en_c", values: { ...values, ig_basis: "yes" }, check }).length).toBeGreaterThan(0)
  })
  test("UK email requires operator and mailbox checks separately", () => {
    const { check, values } = filled("email_uk_walkthrough", "email")
    expect(evaluateEligibility({ templateId: "email_uk_walkthrough", values, check })).toEqual([])
    expect(evaluateEligibility({ templateId: "email_uk_walkthrough", values: { ...values, operator: "no" }, check }).length).toBeGreaterThan(0)
    expect(evaluateEligibility({ templateId: "email_uk_walkthrough", values: { ...values, subscriber: "no" }, check }).length).toBeGreaterThan(0)
  })
  test("Spanish cold templates stay blocked even with every check", () => {
    const { check, values } = filled("ig_en_c", "instagram_dm", "spain")
    expect(evaluateEligibility({ templateId: "ig_en_c", values, check }).length).toBeGreaterThan(0)
  })
  test("Spanish inbound requires permission and correct region", () => {
    const { check, values } = filled("es_inbound_reply", "email", "spain")
    expect(evaluateEligibility({ templateId: "es_inbound_reply", values, check })).toEqual([])
    expect(evaluateEligibility({ templateId: "es_inbound_reply", values: { ...values, spain_permission: "no" }, check }).length).toBeGreaterThan(0)
    const ukCheck = getEligibilityPlan({ templateId: "es_inbound_reply", region: "uk", channel: "email" })
    expect(evaluateEligibility({ templateId: "es_inbound_reply", values, check: ukCheck }).length).toBeGreaterThan(0)
  })
  test("follow-ups and engaged reply require extra records", () => {
    for (const id of ["fu_day4_5", "fu_day12_14", "fu_on_engage"]) {
      const { check, values } = filled(id)
      expect(evaluateEligibility({ templateId: id, values, check })).toEqual([])
      expect(evaluateEligibility({ templateId: id, values: { ...values, continuation: "no", no_optout: "no", engaged: "no" }, check }).length).toBeGreaterThan(0)
    }
  })
})
