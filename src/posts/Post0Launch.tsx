import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { LogoLockupStacked } from "@/logo/LogoLockup"
import { BrandFooter } from "./Brand"
import { TrendingUp, Zap, MessageCircle, ArrowRight } from "lucide-react"

const EXPECT = [
  { icon: TrendingUp, label: "€6,000+ generated in 3 months, one real clinic" },
  { icon: Zap, label: "Every WhatsApp answered in ~13 seconds, even at 3am" },
  { icon: MessageCircle, label: "Curious what this could look like for your clinic? Ask us." },
]

export function Post0Launch() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-16 text-center">
        <Badge className="mb-10 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2 text-[17px] tracking-wide text-[var(--warc-ink)]/75 shadow-sm">
          👋 NEW HERE
        </Badge>

        <LogoLockupStacked size={110} variant="green" />

        <p className="mt-10 max-w-[760px] text-[52px] leading-[1.25] font-extrabold tracking-tight text-[var(--warc-ink)]">
          We're the 24/7 receptionist your clinic's WhatsApp has been missing.
        </p>

        <p className="mt-7 max-w-[640px] text-[26px] leading-snug text-[var(--warc-ink)]/60">
          WARC answers every WhatsApp message in seconds, 24/7, in 100+
          languages, without replacing your team.
        </p>

        <Separator className="my-12 max-w-[600px] bg-[var(--warc-card-border)]" />

        <div className="flex flex-col gap-6">
          {EXPECT.map((item) => (
            <div key={item.label} className="flex items-center gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--warc-mint)]">
                <item.icon className="size-6 text-[var(--warc-green-dark)]" />
              </div>
              <p className="max-w-[560px] text-left text-[26px] font-medium text-[var(--warc-ink)]/85">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-2 rounded-full bg-[var(--warc-green)] px-8 py-3.5 text-[19px] font-semibold text-white">
          Contact us today
          <ArrowRight className="size-5" />
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
