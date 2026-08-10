import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"
import { Quote, MessageCircle } from "lucide-react"

export function Post9Engagement() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col items-center justify-center px-16 text-center">
        <Badge className="mb-10 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2 text-[17px] tracking-wide text-[var(--warc-ink)]/75 shadow-sm">
          TRUE STORY 💬
        </Badge>

        <p className="max-w-[820px] text-[50px] leading-[1.25] font-extrabold tracking-tight text-[var(--warc-ink)]">
          A patient once told our WhatsApp receptionist:
        </p>

        <div className="mt-8 max-w-[720px] rounded-[28px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-10 py-9 shadow-sm">
          <Quote className="mx-auto mb-5 size-10 fill-[var(--warc-green)] text-[var(--warc-green)]" />
          <p className="text-[34px] leading-[1.4] font-semibold text-[var(--warc-ink)]">
            "Your assistant is pretty funny, it skillfully dodges my personal
            questions. We still had a laugh about it, so no problem at all."
          </p>
        </div>

        <Separator className="my-12 max-w-[600px] bg-[var(--warc-card-border)]" />

        <div className="flex items-center gap-3">
          <MessageCircle className="size-9 text-[var(--warc-green)]" />
          <p className="max-w-[640px] text-[36px] leading-[1.3] font-bold tracking-tight text-[var(--warc-ink)]">
            What's the funniest thing a patient has ever said to your front
            desk?
          </p>
        </div>

        <p className="mt-6 text-[24px] font-medium text-[var(--warc-ink)]/55">
          👇 Tell us below, and tag a clinic owner who needs a laugh today.
        </p>

        <Badge className="mt-10 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[16px] tracking-wide text-[var(--warc-ink)]/60 shadow-sm">
          FROM A CLINIC THAT'S RECOVERED 32 PATIENTS WITH WARC
        </Badge>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
