import * as React from "react"
import { toPng } from "html-to-image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

// Instagram's standard portrait post canvas.
export const NATIVE_WIDTH = 1080
export const NATIVE_HEIGHT = 1350

export function PostFrame({
  id,
  filename,
  displayWidth = 300,
  children,
}: {
  id: string
  filename: string
  displayWidth?: number
  children: React.ReactNode
}) {
  const captureRef = React.useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = React.useState(false)
  const scale = displayWidth / NATIVE_WIDTH
  const displayHeight = displayWidth * (NATIVE_HEIGHT / NATIVE_WIDTH)

  const handleDownload = async () => {
    if (!captureRef.current) return
    setDownloading(true)
    try {
      const dataUrl = await toPng(captureRef.current, {
        width: NATIVE_WIDTH,
        height: NATIVE_HEIGHT,
        pixelRatio: 2,
        cacheBust: true,
      })
      const link = document.createElement("a")
      link.download = `${filename}.png`
      link.href = dataUrl
      link.click()
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-3" id={id}>
      <div
        style={{ width: displayWidth, height: displayHeight }}
        className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/10"
      >
        <div
          style={{
            width: NATIVE_WIDTH,
            height: NATIVE_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <div ref={captureRef} style={{ width: NATIVE_WIDTH, height: NATIVE_HEIGHT }}>
            {children}
          </div>
        </div>
      </div>
      <Button
        size="sm"
        variant="outline"
        onClick={handleDownload}
        disabled={downloading}
        className="gap-1.5"
      >
        <Download className="size-3.5" />
        {downloading ? "Exporting…" : "Download PNG"}
      </Button>
    </div>
  )
}
