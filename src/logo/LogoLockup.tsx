import { LogoMark, type LogoVariant } from "./LogoMark"

function wordmarkColor(variant: LogoVariant) {
  if (variant === "white") return "#ffffff"
  if (variant === "mono") return "var(--warc-ink)"
  return "var(--warc-ink)"
}

export function LogoLockupHorizontal({
  size = 64,
  variant = "green",
  className,
}: {
  size?: number
  variant?: LogoVariant
  className?: string
}) {
  return (
    <div
      className={`flex items-center ${className ?? ""}`}
      style={{ fontSize: size, gap: "0.65em" }}
    >
      <LogoMark size={size} variant={variant} />
      <span
        style={{ color: wordmarkColor(variant), fontSize: "0.62em" }}
        className="font-bold tracking-tight"
      >
        WARC
      </span>
    </div>
  )
}

export function LogoLockupStacked({
  size = 96,
  variant = "green",
  className,
}: {
  size?: number
  variant?: LogoVariant
  className?: string
}) {
  return (
    <div
      className={`flex flex-col items-center ${className ?? ""}`}
      style={{ fontSize: size, gap: "0.28em" }}
    >
      <LogoMark size={size} variant={variant} />
      <span
        style={{ color: wordmarkColor(variant), fontSize: "0.34em" }}
        className="font-bold tracking-tight"
      >
        WARC
      </span>
    </div>
  )
}
