import { Badge } from "@/components/ui/badge"
import { SlideShell } from "./SlideShell"
import { MessageCircle, CalendarCheck, BellRing, LayoutTemplate } from "lucide-react"

const ITEMS = [
  {
    icon: MessageCircle,
    name: "WARC — AI WhatsApp receptionist",
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
    name: "No-show killer reminders",
    detail: "€100/mo × 3, synced to your booking system",
    value: "€300",
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
      <h1 className="text-center text-[44px] leading-[1.1] font-extrabold tracking-tight text-[var(--warc-ink)]">
        Add it up.
      </h1>

      <div className="mt-8 overflow-hidden rounded-[26px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] shadow-xl">
        {ITEMS.map((item, i) => (
          <div
            key={item.name}
            className={`flex items-center gap-5 px-7 py-5 ${
              i > 0 ? "border-t border-[var(--warc-card-border)]" : ""
            }`}
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--warc-mint)]/60">
              <item.icon className="size-6 text-[var(--warc-green-dark)]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[20px] leading-tight font-bold text-[var(--warc-ink)]">
                {item.name}
              </p>
              <p className="mt-1 text-[15px] leading-snug text-[var(--warc-ink)]/50">
                {item.detail}
              </p>
            </div>
            <p className="shrink-0 text-[22px] font-bold text-[var(--warc-ink)]/35 line-through decoration-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between px-2">
        <p className="text-[22px] font-semibold text-[var(--warc-ink)]/55">
          Total value over 3 months
        </p>
        <p className="text-[28px] font-extrabold text-[var(--warc-ink)]/40 line-through decoration-2">
          €1,447
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-[22px] bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] px-8 py-6 shadow-lg">
        <p className="text-[26px] font-bold text-white">Your price today</p>
        <p className="text-[54px] leading-none font-extrabold text-white">€0</p>
      </div>

      <p className="mx-auto mt-6 max-w-[780px] text-center text-[18px] leading-snug text-[var(--warc-ink)]/55">
        After 3 months, you only pay for WARC, €199/mo. The booking system,
        reminders, and landing page are yours to keep, free, for as long as
        you're a WARC clinic.
      </p>

      <Badge className="mx-auto mt-6 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[17px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
        OFFER ENDS AUGUST 31 · DM US TO LOCK IT IN
      </Badge>
    </SlideShell>
  )
}
