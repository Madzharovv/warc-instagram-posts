import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"
import { Star } from "lucide-react"

export function Post7Testimonial() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-16 text-center">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-12 fill-[var(--warc-gold)] text-[var(--warc-gold)]" />
          ))}
        </div>

        <p className="mt-12 max-w-[820px] text-[52px] leading-[1.3] font-semibold tracking-tight text-[var(--warc-ink)]">
          "Every WhatsApp gets answered within seconds, and answered correctly,
          every time."
        </p>

        <div className="mt-14 flex items-center gap-4">
          <Avatar className="size-[72px] border border-[var(--warc-card-border)]">
            <AvatarFallback className="bg-[var(--warc-mint)] text-[24px] font-bold text-[var(--warc-green-dark)]">
              DF
            </AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-[24px] font-semibold text-[var(--warc-ink)]">Dr. Dian Fidanov</p>
            <p className="text-[20px] text-[var(--warc-ink)]/50">D2 Clínica Dental · Mallorca</p>
          </div>
        </div>

        <Separator className="my-14 max-w-[440px] bg-[var(--warc-card-border)]" />

        <p className="max-w-[560px] text-[21px] leading-relaxed text-[var(--warc-ink)]/45">
          Verified across 13 weeks of real patient conversations.
        </p>

        <div className="mt-12 flex items-center gap-16">
          <div>
            <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
              13s
            </div>
            <p className="mt-2 text-[19px] text-[var(--warc-ink)]/55">avg. reply time</p>
          </div>
          <div>
            <div className="text-[52px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
              €6k+
            </div>
            <p className="mt-2 text-[19px] text-[var(--warc-ink)]/55">generated in 3 months</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
