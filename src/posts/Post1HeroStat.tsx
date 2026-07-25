import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"

const MINI_STATS = [
  { value: "135", label: "patients messaged in" },
  { value: "60%", label: "sent after hours" },
  { value: "32", label: "bookings rescued" },
]

export function Post1HeroStat() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-16 text-center">
        <Badge className="mb-14 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2 text-[17px] tracking-wide text-[var(--warc-ink)]/75 shadow-sm">
          REAL CASE STUDY · D2 CLÍNICA DENTAL
        </Badge>

        <div className="flex items-end gap-5">
          <span className="text-[360px] leading-none font-extrabold tracking-tighter text-[var(--warc-ink)]">
            13
          </span>
          <span className="mb-11 text-[68px] font-bold tracking-tight text-[var(--warc-green)]">
            sec
          </span>
        </div>

        <p className="mt-12 max-w-[760px] text-[40px] leading-[1.3] font-medium text-[var(--warc-ink)]/75">
          Average time WARC takes to answer a patient's WhatsApp, day or night.
        </p>

        <Separator className="my-14 max-w-[600px] bg-[var(--warc-card-border)]" />

        <div className="flex w-full max-w-[820px] justify-between">
          {MINI_STATS.map((s) => (
            <div key={s.label}>
              <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
                {s.value}
              </div>
              <p className="mt-2 max-w-[180px] text-[19px] leading-snug text-[var(--warc-ink)]/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
