import { SlideShell } from "./SlideShell"
import { MessageCircle, CalendarCheck, BellRing, LayoutTemplate, ArrowRight } from "lucide-react"

const ITEMS = [
  {
    icon: MessageCircle,
    name: "WARC 24/7 WhatsApp receptionist",
    detail: "€199/mo × 3 months",
    value: "€597",
  },
  {
    icon: CalendarCheck,
    name: "Online booking system",
    detail: "€50/mo × 3 months",
    value: "€150",
  },
  {
    icon: BellRing,
    name: "Automatic text reminders",
    detail: "€60/mo × 3, synced to your booking system",
    value: "€180",
  },
  {
    icon: LayoutTemplate,
    name: "Brand-new clinic landing page",
    detail: "one-time build",
    value: "€400",
  },
]

export function BundleSlide6Recap() {
  return (
    <SlideShell step={6}>
      <h1 className="text-center text-[40px] leading-[1.1] font-extrabold tracking-tight text-[var(--warc-ink)]">
        Add it up.
      </h1>

      <div className="mt-6 overflow-hidden rounded-[24px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] shadow-xl">
        {ITEMS.map((item, i) => (
          <div
            key={item.name}
            className={`flex items-center gap-4 px-6 py-4 ${
              i > 0 ? "border-t border-[var(--warc-card-border)]" : ""
            }`}
          >
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--warc-mint)]/60">
              <item.icon className="size-5 text-[var(--warc-green-dark)]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[18px] leading-tight font-bold text-[var(--warc-ink)]">
                {item.name}
              </p>
              <p className="mt-0.5 text-[13px] leading-snug text-[var(--warc-ink)]/50">
                {item.detail}
              </p>
            </div>
            <p className="shrink-0 text-[19px] font-bold text-[var(--warc-ink)]/35 line-through decoration-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-2">
        <p className="text-[19px] font-semibold text-[var(--warc-ink)]/55">
          Total value over 3 months
        </p>
        <p className="text-[24px] font-extrabold text-[var(--warc-ink)]/40 line-through decoration-2">
          €1,327
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-[20px] bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] px-7 py-5 shadow-lg">
        <p className="text-[22px] font-bold text-white">Your price today</p>
        <p className="text-[46px] leading-none font-extrabold text-white">€0</p>
      </div>

      <p className="mx-auto mt-5 max-w-[800px] text-center text-[16px] leading-snug text-[var(--warc-ink)]/55">
        After 3 months, only WARC is billed at €199/mo. Booking and text
        reminders stay free as long as you're a WARC clinic, and the landing
        page is yours to keep either way, no strings attached.
      </p>

      <p className="mx-auto mt-5 max-w-[760px] text-center text-[20px] leading-snug font-bold text-[var(--warc-ink)]">
        Saying yes costs you nothing today. Saying no costs you every patient
        who messages after hours and never hears back.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3 rounded-[20px] bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] px-7 py-5 shadow-lg">
        <p className="text-center text-[22px] font-extrabold text-white">
          DM us "START" before €0 turns back into €1,327
        </p>
        <ArrowRight className="size-6 shrink-0 text-white" strokeWidth={3} />
      </div>

      <p className="mx-auto mt-4 text-center text-[15px] font-semibold text-[var(--warc-ink)]/45">
        Offer ends August 31 · miss it, and this exact price is gone for good
      </p>
    </SlideShell>
  )
}
