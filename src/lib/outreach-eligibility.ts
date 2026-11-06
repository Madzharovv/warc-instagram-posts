import rules from "../data/consent-rules.json"

export type Channel = "instagram_dm" | "email"
export type Region = "uk" | "spain"
export type CheckItem = { id: string; label: string; help?: string }
export type EligibilityPlan = { title: string; summary: string; items: CheckItem[]; rule: (values: Record<string, string>) => string[] }

const gate = rules.consentGateCommon
const value = (values: Record<string, string>, id: string) => values[id] ?? "no"
const missingLabels = (items: CheckItem[], values: Record<string, string>) => items.filter((item) => value(values, item.id) !== "yes").map((item) => item.label)
const common: CheckItem[] = [
  { id: "legal", label: "Review complete", help: "Counsel sign-off or documented founder legal acceptance is recorded; these drafts are not legal approval." },
  { id: "identity", label: "Sender identity is clear", help: "Every message identifies the sender and Akros Lab (WARC)." },
  { id: "optout", label: "Opt-out path included", help: "Email has reply stop/baja; follow-ups retain appropriate stop language." },
  { id: "dnc", label: "Do-not-contact screened", help: "There is no prior opt-out, block or suppression for this recipient on the selected channel." },
]
const continuationItems: CheckItem[] = [
  { id: "continuation", label: "Original eligibility still valid", help: "Re-check the operator, consent or corporate-subscriber basis used for the opening." },
  { id: "no_optout", label: "No opt-out since the opening", help: "Silence is not consent; stop immediately when a recipient opts out." },
]
const engagementItem: CheckItem = { id: "engaged", label: "Clear recipient engagement recorded", help: "Use only after a real reply/engagement. Share verified carousels only after that engagement." }

export const getEligibilityPlan = ({ channel, region, templateId }: { channel: Channel; region: Region; templateId: string }): EligibilityPlan => {
  if (templateId === "es_inbound_reply" && region !== "spain") return { title: "Spanish inbound reply · select Spain", summary: "Use this reply only for a documented inbound request or valid prior opt-in.", items: common, rule: () => ["Select Spain and record documented inbound request or valid prior opt-in"] }
  if (region === "spain") {
    const allowed = templateId === "es_inbound_reply"
    const items = [...common, { id: "spain_permission", label: "Documented inbound request or valid prior opt-in", help: "Record the actual request/opt-in. A public listing or warm introduction alone is not consent." }]
    return {
      title: allowed ? "Spain · documented inbound or prior opt-in" : "Spain · this cold template is blocked",
      summary: allowed ? gate.spain.allowed_paths.join(" · ") : "Use only the Spanish inbound/opt-in reply. Corporate/SL status and a warm introduction alone do not unlock cold electronic marketing.",
      items,
      rule: (values) => !allowed ? ["This template is not available for cold outreach in Spain."] : missingLabels(items, values),
    }
  }
  if (channel === "email") {
    const items = [...common, { id: "operator", label: "Practice operating entity verified", help: "The company operating this practice is confirmed, not merely a brand or non-trading parent." }, { id: "subscriber", label: "Mailbox / corporate subscriber independently verified", help: "Clinic Ltd status alone does not verify this mailbox as a corporate subscriber." }]
    return { title: "UK · corporate email eligibility", summary: gate.uk.corporate_email.note, items, rule: (values) => missingLabels(items, values) }
  }
  const items: CheckItem[] = [...common, { id: "ig_basis", label: "Instagram permission basis recorded", help: gate.uk.instagram_dm.note }]
  return {
    title: "UK · Instagram DM eligibility",
    summary: gate.uk.instagram_dm.allowed_when.join(" · "),
    items,
    rule: (values) => [...missingLabels(common, values), ...(["consent", "corporate"].includes(value(values, "ig_basis")) ? [] : ["Explicit consent or independently confirmed corporate subscriber"])],
  }
}

export const getTemplateItems = (templateId: string, plan: EligibilityPlan): CheckItem[] => {
  if (["fu_day4_5", "fu_day12_14"].includes(templateId)) return [...plan.items, ...continuationItems]
  if (templateId === "fu_on_engage") return [...plan.items, engagementItem]
  return plan.items
}

export const evaluateEligibility = ({ templateId, values, check }: { templateId: string; values: Record<string, string>; check: EligibilityPlan }): string[] => [
  ...check.rule(values),
  ...missingLabels(getTemplateItems(templateId, check).filter((item) => !check.items.some((baseItem) => baseItem.id === item.id)), values),
]
