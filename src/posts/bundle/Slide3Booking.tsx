import { CalendarCheck } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide3Booking() {
  return (
    <SlideShell step={3}>
      <ProductHeader
        icon={CalendarCheck}
        step="2 of 4 · Turns replies into bookings"
        name="Online Booking System"
        value="€150 value (€50/mo × 3) → included free"
      />

      <StatRow
        stats={[
          { value: "24/7", label: "self-serve booking" },
          { value: "1", label: "synced calendar" },
          { value: "0", label: "double-bookings" },
        ]}
      />

      <BenefitList
        items={[
          "Patients pick their own slot, no back-and-forth phone calls",
          "Booking link sent automatically the moment WARC replies",
          "Every confirmed slot feeds straight into your reminder system",
        ]}
      />

      <ProofCallout>
        This is the link WARC sends inside every chat. It's what turns a
        13-second reply into an appointment actually on your calendar.
      </ProofCallout>
    </SlideShell>
  )
}
