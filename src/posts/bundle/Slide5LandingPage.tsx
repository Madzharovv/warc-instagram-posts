import { LayoutTemplate } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide5LandingPage() {
  return (
    <SlideShell step={5}>
      <ProductHeader
        icon={LayoutTemplate}
        step="4 of 4 · The result: every ad click becomes a conversation"
        name="Brand-New Clinic Landing Page"
        price="€400"
        priceCaption="€400 value, one-time build. Free, yours to keep forever"
      />

      <StatRow
        stats={[
          { value: "1", label: "custom-built page" },
          { value: "€0", label: "ongoing cost" },
          { value: "∞", label: "yours to keep" },
        ]}
      />

      <BenefitList
        items={[
          "Built specifically for your clinic, ready to run ads and Google traffic to today",
          "Every visitor is one tap from a WhatsApp chat with WARC, not a dead end",
          "Yours forever, no recurring fee, even after this offer ends",
        ]}
      />

      <ProofCallout>
        Clinics normally pay <strong>€400</strong> for this alone. It's the
        first thing a new patient sees, built to convert, not just to look
        nice. Yours, free, no strings attached.
      </ProofCallout>
    </SlideShell>
  )
}
