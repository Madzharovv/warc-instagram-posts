import { LayoutTemplate } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide5LandingPage() {
  return (
    <SlideShell step={5}>
      <ProductHeader
        icon={LayoutTemplate}
        step="4 of 4 · Where every click lands"
        name="Brand-New Clinic Landing Page"
        value="€400 value, one-time build → included free"
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
          "Built specifically for your clinic, ready for your bio, ads, and Google",
          "Designed to send every visitor straight into a WhatsApp chat with WARC",
          "Yours forever, no recurring fee, even after this offer ends",
        ]}
      />

      <ProofCallout>
        Clinics normally pay €400 for this alone. It's the first thing a new
        patient sees, so it's built to convert, not just to look nice.
      </ProofCallout>
    </SlideShell>
  )
}
