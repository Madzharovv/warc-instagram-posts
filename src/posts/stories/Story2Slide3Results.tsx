import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SlideShell } from "../bundle/SlideShell"

const CASE_STUDY_STATS = [
  { value: "32", label: "patients recovered" },
  { value: "€6k+", label: "generated in 3 months" },
  { value: "13", label: "weeks of data" },
]

export function Story2Slide3Results() {
  return (
    <SlideShell step={3} total={3}>
      <p className="text-center text-[26px] font-semibold tracking-wide text-[var(--warc-ink)]/55 uppercase">
        Real case study · D2 Clínica Dental
      </p>

      <p className="mx-auto mt-8 max-w-[780px] text-center text-[50px] leading-[1.2] font-extrabold tracking-tight text-[var(--warc-ink)]">
        32 patients had this exact conversation, and none of them were lost.
      </p>

      <p className="mx-auto mt-7 max-w-[680px] text-center text-[26px] leading-snug text-[var(--warc-ink)]/60">
        Every one messaged after hours. Every one got a reply in seconds.
        Every one ended up in the chair.
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
