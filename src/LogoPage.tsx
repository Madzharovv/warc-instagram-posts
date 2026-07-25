import { LogoMark, logoMarkSvgString, type LogoVariant } from "@/logo/LogoMark"
import { LogoLockupHorizontal, LogoLockupStacked } from "@/logo/LogoLockup"
import { IconExportFrame, downloadSvgString } from "@/logo/IconExportFrame"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const REAL_SIZES = [16, 24, 32, 48, 64, 96, 128]

function SvgDownloadButton({ variant, filename }: { variant: LogoVariant; filename: string }) {
  return (
    <Button
      size="sm"
      variant="outline"
      className="gap-1.5"
      onClick={() => downloadSvgString(logoMarkSvgString(variant), filename)}
    >
      <Download className="size-3.5" />
      SVG
    </Button>
  )
}

export function LogoPage() {
  return (
    <div className="min-h-screen bg-[var(--warc-bg)]">
      <header className="border-b border-[var(--warc-card-border)] bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)] px-8 py-16 text-center">
        <p className="mb-2 text-[13px] font-semibold tracking-wide text-[var(--warc-green)] uppercase">
          WARC · Brand mark
        </p>
        <div className="flex justify-center py-6">
          <LogoLockupStacked size={110} variant="green" />
        </div>
        <p className="mx-auto max-w-[600px] text-[15px] leading-relaxed text-[var(--warc-ink)]/60">
          A speech bubble whose tail is a lightning bolt: message and instant
          reply in one shape. Every asset below is generated from the same SVG
          source, so it stays crisp from a 16px favicon to a printed sign.
        </p>
      </header>

      <main className="mx-auto max-w-[1200px] px-8 py-16">
        {/* Real-size legibility check */}
        <section className="mb-20">
          <h2 className="mb-2 text-[22px] font-bold tracking-tight text-[var(--warc-ink)]">
            Legibility, at actual size
          </h2>
          <p className="mb-8 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--warc-ink)]/60">
            No scaling tricks. These render at the exact pixel sizes you'd see
            in a browser tab, an app icon, or a favicon.
          </p>
          <div className="flex flex-wrap items-end gap-8 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-8 shadow-sm">
            {REAL_SIZES.map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <LogoMark size={s} variant="green" />
                <span className="text-[11px] text-[var(--warc-ink)]/45">{s}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* Variants */}
        <section className="mb-20">
          <h2 className="mb-2 text-[22px] font-bold tracking-tight text-[var(--warc-ink)]">
            Color variants
          </h2>
          <p className="mb-8 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--warc-ink)]/60">
            Three ways to drop the mark onto any surface without ever putting
            it on a background it fights with.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-8 shadow-sm">
              <LogoMark size={88} variant="green" />
              <div className="text-center">
                <p className="text-[15px] font-semibold text-[var(--warc-ink)]">Primary</p>
                <p className="mt-1 text-[13px] text-[var(--warc-ink)]/50">
                  App icons, favicons, light or photo backgrounds
                </p>
              </div>
              <SvgDownloadButton variant="green" filename="warc-mark-green.svg" />
            </div>

            <div className="flex flex-col items-center gap-5 rounded-2xl bg-[var(--warc-green)] p-8 shadow-sm">
              <LogoMark size={88} variant="white" />
              <div className="text-center">
                <p className="text-[15px] font-semibold text-white">Reversed</p>
                <p className="mt-1 text-[13px] text-white/60">
                  For the dark-green brand panel, or any deep-color surface
                </p>
              </div>
              <SvgDownloadButton variant="white" filename="warc-mark-white.svg" />
            </div>

            <div className="flex flex-col items-center gap-5 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-8 shadow-sm">
              <LogoMark size={88} variant="mono" />
              <div className="text-center">
                <p className="text-[15px] font-semibold text-[var(--warc-ink)]">Mono</p>
                <p className="mt-1 text-[13px] text-[var(--warc-ink)]/50">
                  Single-color use: stamps, watermarks, engraving, fax
                </p>
              </div>
              <SvgDownloadButton variant="mono" filename="warc-mark-mono.svg" />
            </div>
          </div>
        </section>

        {/* Icon exports */}
        <section className="mb-20">
          <h2 className="mb-2 text-[22px] font-bold tracking-tight text-[var(--warc-ink)]">
            Icon exports
          </h2>
          <p className="mb-8 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--warc-ink)]/60">
            PNG, rasterized directly from the vector master. Pick the size you
            need: 16/32 for favicons, 180 for Apple touch icon, 512/1024 for
            app stores and social profile pictures.
          </p>
          <div className="flex justify-center rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-10 shadow-sm">
            <IconExportFrame
              filename="warc-icon"
              nativeWidth={512}
              displayWidth={200}
              exportSizes={[16, 32, 64, 180, 512, 1024]}
            >
              <LogoMark size={512} variant="green" />
            </IconExportFrame>
          </div>
        </section>

        {/* Lockups */}
        <section>
          <h2 className="mb-2 text-[22px] font-bold tracking-tight text-[var(--warc-ink)]">
            Lockups
          </h2>
          <p className="mb-8 max-w-[640px] text-[14.5px] leading-relaxed text-[var(--warc-ink)]/60">
            Mark + wordmark, for headers, decks, and title cards.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-10 shadow-sm">
              <p className="self-start text-[13px] font-semibold text-[var(--warc-ink)]/50 uppercase">
                Horizontal
              </p>
              <IconExportFrame
                filename="warc-lockup-horizontal"
                nativeWidth={1600}
                nativeHeight={420}
                displayWidth={360}
                exportSizes={[800, 1600, 3200]}
              >
                <div className="flex h-full w-full items-center justify-center bg-[var(--warc-card)]">
                  <LogoLockupHorizontal size={150} variant="green" />
                </div>
              </IconExportFrame>
            </div>

            <div className="flex flex-col items-center gap-6 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-10 shadow-sm">
              <p className="self-start text-[13px] font-semibold text-[var(--warc-ink)]/50 uppercase">
                Stacked
              </p>
              <IconExportFrame
                filename="warc-lockup-stacked"
                nativeWidth={900}
                nativeHeight={1100}
                displayWidth={220}
                exportSizes={[600, 900, 1800]}
              >
                <div className="flex h-full w-full items-center justify-center bg-[var(--warc-card)]">
                  <LogoLockupStacked size={220} variant="green" />
                </div>
              </IconExportFrame>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--warc-card-border)] px-8 py-8 text-center text-[12.5px] text-[var(--warc-ink)]/40">
        Vector source in <code>src/logo/LogoMark.tsx</code>. Edit the two path
        strings to adjust the shape; every export on this page regenerates from
        them.
      </footer>
    </div>
  )
}
