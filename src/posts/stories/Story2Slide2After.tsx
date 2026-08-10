import { Badge } from "@/components/ui/badge"
import { SlideShell } from "../bundle/SlideShell"
import { Check } from "lucide-react"

const STEPS = [
  "Patient messages at 9:47pm",
  "Reply in 13 seconds",
  "Booking link sent, slot confirmed",
  "Patient's in the chair this week",
]

export function Story2Slide2After() {
  return (
    <SlideShell step={2} total={3}>
      <Badge className="mx-auto mb-12 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2.5 text-[17px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase shadow-sm">
        With WARC
      </Badge>

      <div className="mx-auto flex max-w-[680px] flex-col gap-9">
        {STEPS.map((text) => (
          <div key={text} className="flex items-center gap-6">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[var(--warc-green)]">
              <Check className="size-8 text-white" strokeWidth={3} />
            </div>
            <p className="text-[36px] leading-snug font-medium text-[var(--warc-ink)]">{text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-16 max-w-[700px] text-center text-[32px] leading-snug font-bold text-[var(--warc-green-dark)]">
        Same message. Same time of night. One patient who didn't get away.
      </p>
    </SlideShell>
  )
}
