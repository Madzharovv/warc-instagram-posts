import { Badge } from "@/components/ui/badge"
import { BrandFooter } from "./Brand"
import { Moon, Zap } from "lucide-react"

export function Post2AfterHours() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col justify-center px-16">
        <p className="mb-16 text-center text-[29px] font-semibold tracking-wide text-[var(--warc-ink)]/55 uppercase">
          13 weeks. One clinic's real inbox.
        </p>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-6 rounded-[32px] border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-10 py-14 text-center shadow-sm">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--warc-ink)]/8">
              <Moon className="size-10 text-[var(--warc-ink)]/60" />
            </div>
            <div className="text-[110px] leading-none font-extrabold tracking-tighter text-[var(--warc-ink)]">
              60%
            </div>
            <p className="max-w-[520px] text-[31px] leading-snug text-[var(--warc-ink)]/65">
              of patient messages arrive outside official clinic hours
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 rounded-[32px] border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/40 px-10 py-14 text-center shadow-sm">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-[var(--warc-green)]">
              <Zap className="size-10 text-white" fill="white" />
            </div>
            <div className="text-[110px] leading-none font-extrabold tracking-tighter text-[var(--warc-ink)]">
              100%
            </div>
            <p className="max-w-[520px] text-[31px] leading-snug text-[var(--warc-ink)]/80">
              of those messages still get answered, in 13 seconds
            </p>
          </div>
        </div>

        <Badge className="mx-auto mt-14 border border-[var(--warc-card-border)] bg-[var(--warc-card)] px-5 py-2.5 text-[18px] tracking-wide text-[var(--warc-ink)]/70 shadow-sm">
          NO ONE ON STAFF HAD TO BE AWAKE FOR IT
        </Badge>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
