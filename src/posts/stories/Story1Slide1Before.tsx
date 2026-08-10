import { Badge } from "@/components/ui/badge"
import { SlideShell } from "../bundle/SlideShell"
import { ChevronRight } from "lucide-react"

export function Story1Slide1Before() {
  return (
    <SlideShell step={1} total={3}>
      <Badge className="mx-auto mb-10 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[17px] font-bold tracking-wide text-[var(--warc-ink)]/70 uppercase shadow-sm">
        Real conversation · D2 Clínica Dental
      </Badge>

      <p className="text-center text-[26px] font-semibold tracking-wide text-[var(--warc-ink)]/55 uppercase">
        06:58 AM — one hour before the clinic opens
      </p>

      <div className="mx-auto mt-10 max-w-[760px] rounded-[32px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-10 py-12 shadow-xl">
        <p className="mb-4 text-[15px] font-bold tracking-wide text-[var(--warc-ink)]/40 uppercase">
          Patient
        </p>
        <p className="text-[38px] leading-snug text-[var(--warc-ink)]/90">
          "My molar's been hurting for two days, I'm dying. Can you get me an
          appointment today?"
        </p>
      </div>

      <p className="mx-auto mt-14 max-w-[700px] text-center text-[32px] leading-snug font-bold text-[var(--warc-ink)]">
        This is the moment most clinics lose a patient. No one's at the desk
        yet.
      </p>

      <div className="mx-auto mt-14 flex items-center gap-2 text-[23px] font-bold text-[var(--warc-green)]">
        Swipe to see what happened next
        <ChevronRight className="size-5" />
      </div>
    </SlideShell>
  )
}
