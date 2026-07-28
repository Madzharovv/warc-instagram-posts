import type { ReactNode } from "react"
import { BrandFooter } from "../Brand"

// Shared chrome for every bundle-carousel slide: background, progress pill,
// footer. Keeps the 6 slides visually identical except for their content.
export function SlideShell({
  step,
  total = 6,
  children,
}: {
  step: number
  total?: number
  children: ReactNode
}) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="absolute top-10 right-10 z-10 w-max rounded-full border border-[var(--warc-card-border)] bg-[var(--warc-card)]/90 px-4 py-1.5 text-[15px] font-bold whitespace-nowrap tracking-wide text-[var(--warc-ink)]/45 shadow-sm">
        {step} / {total}
      </div>
      <div className="relative flex flex-1 flex-col justify-center px-16">{children}</div>
      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
