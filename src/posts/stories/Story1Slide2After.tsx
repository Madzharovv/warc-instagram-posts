import { Badge } from "@/components/ui/badge"
import { SlideShell } from "../bundle/SlideShell"
import { Clock } from "lucide-react"

export function Story1Slide2After() {
  return (
    <SlideShell step={2} total={3}>
      <Badge className="mx-auto mb-8 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2.5 text-[16px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase shadow-sm">
        With WARC on
      </Badge>

      <div className="overflow-hidden rounded-[32px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] shadow-xl">
        <div className="flex items-center gap-3 bg-[var(--warc-green)] px-8 py-4">
          <div className="flex size-10 items-center justify-center rounded-full bg-white/15 text-[16px] font-bold text-white">
            D2
          </div>
          <div>
            <p className="text-[19px] font-semibold text-white">D2 Clínica Dental</p>
            <p className="text-[15px] text-white/70">online · powered by WARC</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 p-10">
          <div className="flex flex-col items-start">
            <p className="mb-2 text-[15px] font-bold tracking-wide text-[var(--warc-ink)]/40 uppercase">
              Patient
            </p>
            <div className="max-w-[86%] rounded-3xl rounded-bl-md bg-[var(--warc-ink)]/[0.06] px-8 py-6">
              <p className="text-[26px] leading-snug text-[var(--warc-ink)]/90">
                "My molar's been hurting for two days, I'm dying. Can you get me an
                appointment today?"
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="mb-2 flex items-center gap-1.5 text-[15px] font-bold tracking-wide text-[var(--warc-green)] uppercase">
              <Clock className="size-4" />
              WARC · replied in 16 seconds
            </p>
            <div className="flex max-w-[86%] flex-col gap-3">
              <div className="rounded-3xl rounded-br-md bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] px-8 py-6">
                <p className="text-[26px] leading-snug text-white">
                  "I understand you're in pain. You can pick a time here. Once
                  booked, send me the date and time so our team can confirm."
                </p>
              </div>
              <div className="rounded-3xl rounded-br-md bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] p-3">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <div className="flex items-center gap-2 border-b border-black/5 px-6 py-3.5">
                    <span className="text-[20px]">🦷</span>
                    <span className="text-[16px] font-semibold text-[var(--warc-ink)]/45">
                      akroslabclinic.com
                    </span>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-[20px] font-bold text-[var(--warc-ink)]">
                      Book your free consultation
                    </p>
                    <p className="mt-1.5 text-[16px] leading-snug text-[var(--warc-ink)]/55">
                      akroslabclinic.com/book
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[720px] text-center text-[26px] leading-snug font-semibold text-[var(--warc-ink)]/70">
        No one had to wake up for this. WARC caught it the second it landed.
      </p>
    </SlideShell>
  )
}
