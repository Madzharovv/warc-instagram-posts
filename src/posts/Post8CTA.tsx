import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LogoLockupHorizontal } from "@/logo/LogoLockup"
import { ArrowRight } from "lucide-react"

const MINI_STATS = [
  { value: "32", label: "patients booked who'd have been lost" },
  { value: "13s", label: "avg. reply time" },
  { value: "€6k+", label: "generated in 3 months" },
]

export function Post8CTA() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="mb-16">
          <LogoLockupHorizontal size={56} variant="white" />
        </div>

        <p className="max-w-[780px] text-[74px] leading-[1.15] font-extrabold tracking-tight text-white">
          Get the patients your clinic is currently missing.
        </p>
        <p className="mt-9 max-w-[640px] text-[32px] leading-snug text-white/70">
          WARC catches every WhatsApp enquiry, 24/7, in 100+ languages, and turns
          it into a booked patient before someone else does.
        </p>

        <div className="mt-16 flex flex-col items-center gap-6">
          <Badge className="border border-white/20 bg-white/10 px-5 py-3 text-[19px] text-white/90 backdrop-blur">
            €199.99 / mo · 1 clinic
          </Badge>
          <div className="flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-[19px] font-semibold text-[var(--warc-green)]">
            Book a demo
            <ArrowRight className="size-5" />
          </div>
        </div>

        <Separator className="my-16 max-w-[700px] bg-white/15" />

        <div className="flex w-full max-w-[820px] justify-between">
          {MINI_STATS.map((s) => (
            <div key={s.label}>
              <div className="text-[44px] leading-none font-extrabold tracking-tight text-white">
                {s.value}
              </div>
              <p className="mt-2 max-w-[160px] text-[18px] leading-snug text-white/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative pb-16 text-center">
        <p className="text-[20px] font-semibold text-white/80">warc.akroslab.com</p>
      </div>
    </div>
  )
}
