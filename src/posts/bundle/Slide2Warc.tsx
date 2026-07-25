import { MessageCircle } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide2Warc() {
  return (
    <SlideShell step={2}>
      <ProductHeader
        icon={MessageCircle}
        step="1 of 4 · The core"
        name="WARC — AI WhatsApp Receptionist"
        value="€597 value (€199/mo × 3) → included free"
      />

      <StatRow
        stats={[
          { value: "13s", label: "avg. reply time" },
          { value: "24/7", label: "always on" },
          { value: "100+", label: "languages" },
        ]}
      />

      <BenefitList
        items={[
          "Answers every WhatsApp message in about 13 seconds, day or night",
          "Never sleeps: covers nights, weekends, and holidays automatically",
          "Hands off to your team the moment a patient needs a human",
        ]}
      />

      <ProofCallout>
        One clinic generated <strong>€6,000+</strong> in 3 months running on
        this exact system, including <strong>32 bookings</strong> that
        would've otherwise been missed.
      </ProofCallout>
    </SlideShell>
  )
}
