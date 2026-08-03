import { MessageCircle } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide2Warc() {
  return (
    <SlideShell step={2}>
      <ProductHeader
        icon={MessageCircle}
        step="1 of 4 · The result: no patient goes unanswered again"
        name="WARC 24/7 WhatsApp Receptionist"
        price="€597"
        priceCaption="€597 value over 3 months. Free, then €199/mo for everything"
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
          "Every patient gets an answer in 13 seconds, so they book with you, not the clinic down the road",
          "Covers nights, weekends and holidays automatically, bookings keep coming in while you sleep",
          "Hands off to your team the second a patient needs a human, nothing falls through the cracks",
        ]}
      />

      <ProofCallout>
        One clinic made <strong>€6,000+</strong> in 3 months on this exact
        system, including <strong>32 bookings</strong> that would've been
        missed. It's the engine of the bundle, and it's free.
      </ProofCallout>
    </SlideShell>
  )
}
