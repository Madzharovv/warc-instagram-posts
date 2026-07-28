import { CalendarCheck } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide3Booking() {
  return (
    <SlideShell step={3}>
      <ProductHeader
        icon={CalendarCheck}
        step="2 of 4 · The dashboard that replaces the paper diary"
        name="Online Booking System"
        price="€150"
        priceCaption="€150 value over 3 months. Then included in your €199/mo, ongoing"
      />

      <StatRow
        stats={[
          { value: "24/7", label: "self-serve booking" },
          { value: "1", label: "dashboard, every booking" },
          { value: "0", label: "double-bookings" },
        ]}
      />

      <BenefitList
        items={[
          "Patients pick their own slot any time, no back-and-forth phone calls",
          "One dashboard shows every upcoming, unconfirmed, past and cancelled booking, so staff always know the full schedule at a glance",
          "Every confirmed slot feeds straight into your reminder system, automatically",
        ]}
      />

      <ProofCallout>
        No more "are we free at 3?". One dashboard, one schedule, zero
        guessing. This is what turns a 13-second WARC reply into a seat in
        your chair, included at <strong>€0</strong>.
      </ProofCallout>
    </SlideShell>
  )
}
