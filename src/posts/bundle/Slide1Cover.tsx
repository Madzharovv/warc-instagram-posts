import { Badge } from "@/components/ui/badge"
import { SlideShell } from "./SlideShell"
import { ChevronRight } from "lucide-react"

export function BundleSlide1Cover() {
  return (
    <SlideShell step={1}>
      <Badge className="mx-auto mb-10 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2.5 text-[17px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase">
        Limited-time bundle · ends August 31
      </Badge>

      <p className="text-center text-[21px] font-extrabold tracking-wide text-[var(--warc-green)] uppercase">
        Proven to generate €6,000+ in 3 months
      </p>

      <div className="mt-7 flex items-center justify-center gap-6">
        <p className="text-[62px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]/30 line-through decoration-4">
          €1,327
        </p>
        <ChevronRight className="size-11 text-[var(--warc-ink)]/25" strokeWidth={3} />
        <p className="text-[104px] leading-none font-extrabold tracking-tighter text-[var(--warc-green)]">
          €0
        </p>
      </div>
      <p className="mt-5 text-center text-[26px] font-bold text-[var(--warc-ink)]">
        4 tools. Free for 3 months.
      </p>

      <p className="mx-auto mt-16 max-w-[760px] text-center text-[29px] leading-snug font-bold text-[var(--warc-ink)]">
        Keep what already works. Try the rest. If it's not for you, walk
        away and lose nothing.
      </p>

      <div className="mx-auto mt-16 flex items-center gap-2 text-[22px] font-bold text-[var(--warc-green)]">
        Swipe to see exactly what's included
        <ChevronRight className="size-5" />
      </div>
    </SlideShell>
  )
}
