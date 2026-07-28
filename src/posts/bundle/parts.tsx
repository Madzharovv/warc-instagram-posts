import type { ComponentType } from "react"
import { Check, ChevronRight } from "lucide-react"

// Shared building blocks for the per-product carousel slides: a header with
// icon + name + a scratched-price tag (matching the cover slide's
// €1,327 → €0 treatment), a row of 3 quick numeric callouts, and a
// checkmark benefit list. Keeps slides 2-5 visually identical.

export function ProductHeader({
  icon: Icon,
  step,
  name,
  price,
  priceCaption,
}: {
  icon: ComponentType<{ className?: string }>
  step: string
  name: string
  price: string
  priceCaption: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex size-20 items-center justify-center rounded-3xl bg-[var(--warc-mint)]/60 shadow-sm">
        <Icon className="size-10 text-[var(--warc-green-dark)]" />
      </div>
      <p className="mt-6 text-[18px] font-bold tracking-wide text-[var(--warc-green)] uppercase">
        {step}
      </p>
      <h1 className="mt-2 max-w-[720px] text-[42px] leading-[1.1] font-extrabold tracking-tight text-[var(--warc-ink)]">
        {name}
      </h1>

      <div className="mt-5 flex items-center justify-center gap-3">
        <p className="text-[30px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]/30 line-through decoration-3">
          {price}
        </p>
        <ChevronRight className="size-6 text-[var(--warc-ink)]/25" strokeWidth={3} />
        <p className="text-[44px] leading-none font-extrabold tracking-tighter text-[var(--warc-green)]">
          €0
        </p>
      </div>
      <p className="mt-2 max-w-[560px] text-[16px] font-semibold text-[var(--warc-ink)]/50">
        {priceCaption}
      </p>
    </div>
  )
}

export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <div className="mt-10 flex w-full justify-center gap-14">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <div className="text-[48px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
            {s.value}
          </div>
          <p className="mt-2 max-w-[140px] text-[16px] leading-snug text-[var(--warc-ink)]/55">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  )
}

export function BenefitList({ items }: { items: string[] }) {
  return (
    <div className="mt-10 flex flex-col gap-5">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-4">
          <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--warc-green)]">
            <Check className="size-4 text-white" strokeWidth={3} />
          </div>
          <p className="text-[23px] leading-snug text-[var(--warc-ink)]/85">{item}</p>
        </div>
      ))}
    </div>
  )
}

export function ProofCallout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-br from-[var(--warc-green)] to-[var(--warc-green-dark)] px-8 py-6 shadow-lg">
      <p className="text-center text-[20px] leading-snug text-white/95">{children}</p>
    </div>
  )
}
