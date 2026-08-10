import { Badge } from "@/components/ui/badge"
import { BrandFooter } from "./Brand"

const STATS: { value: string; label: string }[] = [
  { value: "32", label: "patients booked who'd have been lost" },
  { value: "135", label: "patients messaged in" },
  { value: "61%", label: "booking-link conversion" },
  { value: "60%", label: "messages sent after hours" },
  { value: "13s", label: "avg. time to first reply" },
  { value: "1,678", label: "messages handled" },
]

export function Post6StatsGrid() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col justify-center px-14">
        <p className="mb-14 text-center text-[32px] font-bold tracking-tight text-[var(--warc-ink)]">
          13 weeks. Here's how many patients this clinic almost lost.
        </p>

        <div className="grid grid-cols-2 gap-7">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-9 py-12 shadow-sm"
            >
              <div className="text-[76px] leading-none font-extrabold tracking-tighter text-[var(--warc-green)]">
                {s.value}
              </div>
              <p className="mt-3 text-[25px] leading-snug text-[var(--warc-ink)]/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <Badge className="mx-auto mt-12 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[18px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
          32 PATIENTS WHO'D HAVE GONE ELSEWHERE, ALL BOOKED
        </Badge>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
