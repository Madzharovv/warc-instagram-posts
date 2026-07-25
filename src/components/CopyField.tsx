import * as React from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

export function CopyField({
  label,
  value,
  limit,
}: {
  label: string
  value: string
  limit?: number
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div className="rounded-xl border border-black/10 bg-[#faf8f2] p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-[11.5px] font-semibold tracking-wide text-black/45 uppercase">
          {label}
          {limit && (
            <span className="ml-1.5 font-normal normal-case text-black/30">
              ({value.replace(/\n/g, "").length}/{limit} chars)
            </span>
          )}
        </p>
        <Button
          size="sm"
          variant="outline"
          className="h-7 shrink-0 gap-1 px-2.5 text-[11.5px]"
          onClick={handleCopy}
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <p className="text-[14.5px] leading-relaxed whitespace-pre-line text-black/80">{value}</p>
    </div>
  )
}
