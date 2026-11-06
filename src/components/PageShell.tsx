import type { ReactNode } from "react"
import { LogoMark } from "@/logo/LogoMark"

export function PageShell({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description?: ReactNode; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f0e6] text-[#17170f]">
      <a href="#main-content" className="absolute top-2 left-4 z-50 -translate-y-24 rounded-md bg-[#073d21] px-4 py-3 text-white focus:translate-y-0">Skip to content</a>
      <header className="relative overflow-hidden bg-[#073d21] px-5 py-12 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute -top-40 -right-32 size-[500px] rounded-full border border-[#bae6bc]/10" />
        <div className="pointer-events-none absolute -top-32 -right-28 size-[390px] rounded-full border border-[#bae6bc]/10" />
        <div className="mx-auto max-w-[1180px]">
          <div className="flex items-center gap-3">
            <LogoMark size={34} variant="white" />
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#bae6bc] uppercase">{eyebrow}</p>
          </div>
          <h1 className="mt-8 max-w-[820px] text-[38px] leading-[1.06] font-semibold tracking-[-0.04em] sm:text-[54px]">{title}</h1>
          {description && <p className="mt-5 max-w-[710px] text-[15px] leading-7 text-white/70 sm:text-[17px]">{description}</p>}
        </div>
      </header>
      <main id="main-content" className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 sm:py-14">{children}</main>
      <footer className="border-t border-[#17170f]/10 px-5 py-7 text-center text-[12px] leading-5 text-[#17170f]/55">
        Akros Lab · WARC content workspace · Draft assets stay in this app until Valentin downloads and posts them.
      </footer>
    </div>
  )
}
