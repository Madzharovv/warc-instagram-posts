import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SlideShell } from "../bundle/SlideShell"
import { CheckCircle2 } from "lucide-react"

const CASE_STUDY_STATS = [
  { value: "32", label: "patients recovered" },
  { value: "13s", label: "avg. reply time" },
  { value: "€6k+", label: "generated in 3 months" },
]

export function Story1Slide3Results() {
  return (
    <SlideShell step={3} total={3}>
      <div className="mx-auto flex max-w-[720px] items-center gap-5 rounded-2xl border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/40 px-8 py-6 shadow-sm">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--warc-green)]">
          <CheckCircle2 className="size-8 text-white" />
        </div>
        <p className="text-[26px] leading-snug text-[var(--warc-ink)]">
          <span className="font-bold text-[var(--warc-ink)]">Clinic staff</span>{" "}
          confirmed "14:30?" an hour later, before the doors even opened.
        </p>
      </div>

      <p className="mx-auto mt-12 max-w-[780px] text-center text-[46px] leading-[1.2] font-extrabold tracking-tight text-[var(--warc-ink)]">
        One patient who didn't message a competitor instead.
      </p>

      <p className="mx-auto mt-6 max-w-[680px] text-center text-[26px] leading-snug text-[var(--warc-ink)]/60">
        This exact pattern happened 32 times in 13 weeks at this clinic.
      </p>

      <Separator className="mx-auto my-12 max-w-[600px] bg-[var(--warc-card-border)]" />

      <div className="mx-auto flex w-full max-w-[780px] justify-between">
        {CASE_STUDY_STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
              {s.value}
            </div>
            <p className="mt-2 max-w-[180px] text-[18px] leading-snug text-[var(--warc-ink)]/55">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <Badge className="mx-auto mt-14 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[18px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
        CONTACT US TO SEE THIS ON YOUR OWN NUMBER
      </Badge>
    </SlideShell>
  )
}
