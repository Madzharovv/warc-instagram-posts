import { Badge } from "@/components/ui/badge"
import { SlideShell } from "./SlideShell"
import { MessageCircle, CalendarCheck, BellRing, LayoutTemplate, ChevronRight } from "lucide-react"

const PRODUCTS = [
  { icon: MessageCircle, name: "WARC 24/7 WhatsApp receptionist", value: "€597" },
  { icon: CalendarCheck, name: "Online booking system", value: "€150" },
  { icon: BellRing, name: "Automatic text reminders", value: "€180" },
  { icon: LayoutTemplate, name: "New clinic landing page", value: "€400" },
]

export function BundleSlide1Cover() {
  return (
    <SlideShell step={1}>
      <Badge className="mx-auto mb-9 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2.5 text-[17px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase">
        Limited-time bundle · ends August 31
      </Badge>

      <div className="flex items-center justify-center gap-6">
        <p className="text-[60px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]/30 line-through decoration-4">
          €1,327
        </p>
        <ChevronRight className="size-10 text-[var(--warc-ink)]/25" strokeWidth={3} />
        <p className="text-[96px] leading-none font-extrabold tracking-tighter text-[var(--warc-green)]">
          €0
        </p>
      </div>
      <p className="mt-4 text-center text-[21px] font-semibold text-[var(--warc-ink)]/50">
        Total value of 4 tools, over 3 months
      </p>

      <h1 className="mt-12 text-center text-[48px] leading-[1.15] font-extrabold tracking-tight text-[var(--warc-ink)]">
        Free for 3 months. Then just{" "}
        <span className="text-[var(--warc-green)]">€199/mo</span> for
        everything.
      </h1>

      <p className="mx-auto mt-5 max-w-[680px] text-center text-[18px] leading-snug text-[var(--warc-ink)]/50">
        Built on the exact system that already generated{" "}
        <strong className="text-[var(--warc-ink)]/70">€6,000+</strong> for one
        clinic in 3 months. Now it comes with 3 more tools, free.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {PRODUCTS.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-4 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-8 py-6 shadow-sm"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[var(--warc-mint)]/60">
              <p.icon className="size-7 text-[var(--warc-green-dark)]" />
            </div>
            <p className="shrink-0 text-[25px] font-bold text-[var(--warc-ink)]">{p.name}</p>
            <div className="mx-1 h-0 min-w-[24px] flex-1 border-b-2 border-dotted border-[var(--warc-ink)]/20" />
            <div className="flex shrink-0 items-baseline gap-2.5">
              <p className="text-[19px] font-bold text-[var(--warc-ink)]/35 line-through decoration-2">
                {p.value}
              </p>
              <p className="text-[22px] font-extrabold text-[var(--warc-green)]">FREE</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-7 max-w-[700px] text-center text-[19px] leading-snug text-[var(--warc-ink)]/55">
        Already happy with your current booking system or reminders? No
        problem, keep what's working. Swap in only what you need.
      </p>

      <div className="mx-auto mt-8 flex items-center gap-2 text-[22px] font-bold text-[var(--warc-green)]">
        Swipe to see what each one does
        <ChevronRight className="size-5" />
      </div>
    </SlideShell>
  )
}
