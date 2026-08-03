import { CalendarCheck } from "lucide-react"
import { SlideShell } from "./SlideShell"
import { ProductHeader, StatRow, BenefitList, ProofCallout } from "./parts"

export function BundleSlide3Booking() {
  return (
    <SlideShell step={3}>
      <ProductHeader
        icon={CalendarCheck}
        step="2 of 4 · The result: every open slot gets filled"
        name="Online Booking System"
        price="€150"
        priceCaption="€150 value over 3 months. Free, then included in your €199/mo"
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
          "Patients book themselves in seconds, no back-and-forth calls, no one left waiting",
          "One dashboard shows the full schedule, so no slot gets missed or double-booked",
          "Every booking feeds straight into your reminders, automatically, more shows for less admin",
        ]}
      />

      <ProofCallout>
        No more "are we free at 3?". One dashboard, zero guessing, this is
        what turns a 13-second WARC reply into a seat in your chair. Worth{" "}
        <strong>€150</strong>. Included at <strong>€0</strong>.
      </ProofCallout>
    </SlideShell>
  )
}
