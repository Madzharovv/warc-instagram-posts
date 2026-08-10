import { Badge } from "@/components/ui/badge"
import { SlideShell } from "../bundle/SlideShell"
import { X } from "lucide-react"

const STEPS = [
  "Patient messages at 9:47pm",
  "Front desk is closed",
  "Message sits unread until 9am",
  "Patient's already booked elsewhere",
]

export function Story2Slide1Before() {
  return (
    <SlideShell step={1} total={3}>
      <Badge className="mx-auto mb-12 border border-[var(--warc-ink)]/15 bg-[var(--warc-ink)]/5 px-5 py-2.5 text-[17px] font-bold tracking-wide text-[var(--warc-ink)]/60 uppercase shadow-sm">
        Without WARC
      </Badge>

      <div className="mx-auto flex max-w-[680px] flex-col gap-9">
        {STEPS.map((text) => (
          <div key={text} className="flex items-center gap-6">
            <div className="flex size-16 shrink-0 items-center justify-center rounded-full bg-[var(--warc-ink)]/10">
              <X className="size-8 text-[var(--warc-ink)]/40" strokeWidth={3} />
            </div>
            <p className="text-[36px] leading-snug text-[var(--warc-ink)]/45">{text}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-16 max-w-[700px] text-center text-[32px] leading-snug font-bold text-[var(--warc-ink)]">
        This happens every time a message lands after the front desk closes.
      </p>
    </SlideShell>
  )
}
