import { BellRing } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide4Reminders() {
  return (
    <SlideShell step={4}>
      <ProductHeader
        icon={BellRing}
        step="3 of 4 · Protects the bookings you just won"
        name="No-Show Killer Reminders"
        value="€300 value (€100/mo × 3) → included free"
      />

      <StatRow
        stats={[
          { value: "100%", label: "of bookings covered" },
          { value: "Auto", label: "synced to booking system" },
          { value: "0", label: "manual work for staff" },
        ]}
      />

      <BenefitList
        items={[
          "Automatic reminder sent before every single booked appointment",
          "Fully synced to your booking system, nothing to set up by hand",
          "Fewer empty chairs, fewer wasted slots on the schedule",
        ]}
      />

      <ProofCallout>
        WARC and the booking system fill your calendar. This is what makes
        sure the patient actually shows up to the chair.
      </ProofCallout>
    </SlideShell>
  )
}
