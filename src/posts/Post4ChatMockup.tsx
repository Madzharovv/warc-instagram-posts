import { Badge } from "@/components/ui/badge"
import { BrandFooter } from "./Brand"
import { Clock, CheckCircle2 } from "lucide-react"

export function Post4ChatMockup() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col justify-center px-14">
        <p className="mb-7 text-center text-[28px] font-semibold text-[var(--warc-ink)]/60">
          06:58 AM, an hour before staff wake up
        </p>

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
                <p className="text-[27px] leading-snug text-[var(--warc-ink)]/90">
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
                  <p className="text-[27px] leading-snug text-white">
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

        <div className="mx-auto mt-6 flex max-w-[620px] items-center gap-5 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-8 py-5 shadow-sm">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[var(--warc-mint)]">
            <CheckCircle2 className="size-7 text-[var(--warc-green-dark)]" />
          </div>
          <p className="text-[22px] leading-snug text-[var(--warc-ink)]/75">
            <span className="font-bold text-[var(--warc-ink)]">Clinic staff</span> confirmed
            "14:30?" an hour later, before the doors even opened.
          </p>
        </div>

        <Badge className="mx-auto mt-6 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[18px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
          BOOKED BEFORE THE CLINIC EVEN OPENED
        </Badge>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
