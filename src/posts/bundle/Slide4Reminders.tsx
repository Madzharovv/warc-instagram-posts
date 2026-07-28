import { BellRing } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide4Reminders() {
  return (
    <SlideShell step={4}>
      <ProductHeader
        icon={BellRing}
        step="3 of 4 · Stops patients from forgetting their appointment"
        name="Automatic Text Reminders"
        price="€180"
        priceCaption="€180 value over 3 months. Then it's included in your €199/mo."
      />

      <StatRow
        stats={[
          { value: "100%", label: "of bookings reminded" },
          { value: "SMS", label: "synced to your calendar" },
          { value: "0", label: "staff hours spent chasing" },
        ]}
      />

      <BenefitList
        items={[
          "Sends a text before every appointment, with the date, time and a reschedule link",
          "Works with the booking system, calendar and patient records you already use",
          "Fewer no-shows means fewer empty chairs and more revenue",
        ]}
      />

      <ProofCallout>
        A missed appointment is money you already earned, walking out the
        door. This tool stops it, and it's free for 3 months.
      </ProofCallout>
    </SlideShell>
  )
}
