import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"
import { Quote } from "lucide-react"

export function Post3Quote() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-20 text-center">
        <Badge className="mb-14 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2 text-[17px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
          REAL PATIENT MESSAGE
        </Badge>

        <Quote className="mb-10 size-20 fill-[var(--warc-green)] text-[var(--warc-green)]" />
        <p className="text-[58px] leading-[1.35] font-semibold tracking-tight text-[var(--warc-ink)]">
          "Your assistant is pretty funny, it skillfully dodges my personal
          questions. We still had a laugh about it, so no problem at all."
        </p>

        <div className="mt-16 flex items-center gap-4">
          <Avatar className="size-16 border border-[var(--warc-card-border)]">
            <AvatarFallback className="bg-[var(--warc-mint)] text-[20px] font-semibold text-[var(--warc-green-dark)]">
              P
            </AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-[22px] font-semibold text-[var(--warc-ink)]">Real patient</p>
            <p className="text-[19px] text-[var(--warc-ink)]/50">D2 Clínica Dental · WhatsApp</p>
          </div>
        </div>

        <p className="mt-8 max-w-[540px] text-[20px] text-[var(--warc-ink)]/45">
          Translated from Bulgarian. Sent after a routine pricing question about
          clear aligners for a patient's daughter.
        </p>

        <Separator className="my-14 max-w-[600px] bg-[var(--warc-card-border)]" />

        <div className="flex items-center gap-16">
          <div>
            <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
              32
            </div>
            <p className="mt-2 text-[19px] text-[var(--warc-ink)]/55">patients recovered</p>
          </div>
          <div>
            <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
              100+
            </div>
            <p className="mt-2 text-[19px] text-[var(--warc-ink)]/55">languages, zero setup</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
