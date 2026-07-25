import { Badge } from "@/components/ui/badge"
import { SlideShell } from "./SlideShell"
import { MessageCircle, CalendarCheck, BellRing, LayoutTemplate, ChevronRight } from "lucide-react"

const PRODUCTS = [
  { icon: MessageCircle, name: "WARC AI receptionist" },
  { icon: CalendarCheck, name: "Online booking system" },
  { icon: BellRing, name: "No-show killer reminders" },
  { icon: LayoutTemplate, name: "New clinic landing page" },
]

export function BundleSlide1Cover() {
  return (
    <SlideShell step={1}>
      <Badge className="mx-auto mb-7 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2 text-[16px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase">
        Limited-time bundle · ends August 31
      </Badge>

      <div className="flex items-center justify-center gap-5">
        <p className="text-[54px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]/30 line-through decoration-4">
          €1,447
        </p>
        <ChevronRight className="size-9 text-[var(--warc-ink)]/25" strokeWidth={3} />
        <p className="text-[86px] leading-none font-extrabold tracking-tighter text-[var(--warc-green)]">
          €0
        </p>
      </div>
      <p className="mt-3 text-center text-[19px] font-semibold text-[var(--warc-ink)]/50">
        Total value of 4 tools, over 3 months
      </p>

      <h1 className="mt-10 text-center text-[46px] leading-[1.12] font-extrabold tracking-tight text-[var(--warc-ink)]">
        The exact system behind{" "}
        <span className="text-[var(--warc-green)]">€6,000+ generated</span> in
        3 months for one clinic.
      </h1>

      <div className="mt-10 flex flex-col gap-3.5">
        {PRODUCTS.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-5 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-7 py-5 shadow-sm"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[var(--warc-mint)]/60">
              <p.icon className="size-6 text-[var(--warc-green-dark)]" />
            </div>
            <p className="text-[23px] font-bold text-[var(--warc-ink)]">{p.name}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex items-center gap-2 text-[20px] font-bold text-[var(--warc-green)]">
        Swipe to see what each one does
        <ChevronRight className="size-5" />
      </div>
    </SlideShell>
  )
}
