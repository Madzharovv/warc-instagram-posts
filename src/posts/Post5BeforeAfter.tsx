import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"
import { X, Check } from "lucide-react"

function Row({ ok, text }: { ok: boolean; text: string }) {
  return (
    <div className="flex items-center gap-5">
      <div
        className={`flex size-12 shrink-0 items-center justify-center rounded-full ${
          ok ? "bg-[var(--warc-green)]" : "bg-[var(--warc-ink)]/10"
        }`}
      >
        {ok ? (
          <Check className="size-6 text-white" strokeWidth={3} />
        ) : (
          <X className="size-6 text-[var(--warc-ink)]/40" strokeWidth={3} />
        )}
      </div>
      <p
        className={`text-[30px] leading-snug ${
          ok ? "text-[var(--warc-ink)]" : "text-[var(--warc-ink)]/40"
        }`}
      >
        {text}
      </p>
    </div>
  )
}

export function Post5BeforeAfter() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col justify-center gap-14 px-16">
        <div>
          <p className="mb-9 text-[32px] font-bold tracking-tight text-[var(--warc-ink)]/40 uppercase">
            Without WARC
          </p>
          <div className="flex flex-col gap-8">
            <Row ok={false} text="Patient messages at 9:47pm" />
            <Row ok={false} text="Front desk is closed" />
            <Row ok={false} text="Message sits unread until 9am" />
            <Row ok={false} text="Patient's already booked elsewhere" />
          </div>
        </div>

        <Separator className="bg-[var(--warc-card-border)]" />

        <div>
          <p className="mb-9 text-[32px] font-bold tracking-tight text-[var(--warc-green)] uppercase">
            With WARC
          </p>
          <div className="flex flex-col gap-8">
            <Row ok={true} text="Patient messages at 9:47pm" />
            <Row ok={true} text="Reply in 13 seconds" />
            <Row ok={true} text="Booking link sent, slot confirmed" />
            <Row ok={true} text="Patient's in the chair this week" />
          </div>
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
