import * as React from "react"
import { toPng } from "html-to-image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function downloadDataUrl(dataUrl: string, filename: string) {
  const link = document.createElement("a")
  link.href = dataUrl
  link.download = filename
  link.click()
}

export function downloadSvgString(svg: string, filename: string) {
  const blob = new Blob([svg], { type: "image/svg+xml" })
  const url = URL.createObjectURL(blob)
  downloadDataUrl(url, filename)
  URL.revokeObjectURL(url)
}

export function IconExportFrame({
  filename,
  nativeWidth,
  nativeHeight = nativeWidth,
  displayWidth,
  exportSizes,
  children,
}: {
  filename: string
  nativeWidth: number
  nativeHeight?: number
  displayWidth: number
  /** Export width in px; height keeps the same aspect ratio as native. */
  exportSizes: number[]
  children: React.ReactNode
}) {
  const captureRef = React.useRef<HTMLDivElement>(null)
  const [busy, setBusy] = React.useState<number | null>(null)
  const previewScale = displayWidth / nativeWidth
  const displayHeight = displayWidth * (nativeHeight / nativeWidth)
  const aspect = nativeHeight / nativeWidth

  const handleDownload = async (widthPx: number) => {
    const node = captureRef.current
    if (!node) return
    setBusy(widthPx)
    const heightPx = Math.round(widthPx * aspect)
    // The node is displayed at `previewScale`; for export we need it scaled to
    // exactly match the requested output size, or html-to-image rasterizes it
    // at its native (unscaled) size and just crops/pads to the canvas.
    const exportScale = widthPx / nativeWidth
    const originalTransform = node.style.transform
    try {
      node.style.transform = `scale(${exportScale})`
      const dataUrl = await toPng(node, {
        width: widthPx,
        height: heightPx,
        pixelRatio: 1,
        cacheBust: true,
      })
      downloadDataUrl(dataUrl, `${filename}-${widthPx}.png`)
    } finally {
      node.style.transform = originalTransform
      setBusy(null)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div style={{ width: displayWidth, height: displayHeight }} className="overflow-hidden">
        <div
          ref={captureRef}
          style={{
            width: nativeWidth,
            height: nativeHeight,
            transform: `scale(${previewScale})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {exportSizes.map((px) => (
          <Button
            key={px}
            size="sm"
            variant="outline"
            className="gap-1.5"
            disabled={busy === px}
            onClick={() => handleDownload(px)}
          >
            <Download className="size-3.5" />
            {busy === px ? "…" : `${px}px`}
          </Button>
        ))}
      </div>
    </div>
  )
}
