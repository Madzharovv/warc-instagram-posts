import * as React from "react"

/**
 * The WARC mark: a speech bubble whose tail is a lightning bolt.
 * "message" + "instant reply" in one shape. Reads clearly from a 512px
 * app icon down to a 16px favicon.
 *
 * variant:
 *  - "green"  primary: green squircle, white bubble (app icons, favicons, light or photo backgrounds)
 *  - "white"  reversed: white squircle, green bubble (for use on the dark-green brand panel)
 *  - "mono"   icon only, no background, single ink color (stamps, watermarks, single-color print)
 */
export type LogoVariant = "green" | "white" | "mono"

const BUBBLE_PATH =
  "M20 40C20 29.5066 28.5066 21 39 21H61C71.4934 21 80 29.5066 80 40C80 50.4934 71.4934 59 61 59H45.5" +
  " L36 71.6C34.9 73.2 32.4 72.6 32.1 70.7L30.6 59.4" +
  " C24.4 56.9 20 50.6 20 43.3V40Z"

// The tail is drawn as a lightning bolt, overlapping the bubble body so the
// join reads as a single continuous shape rather than two stacked pieces.
const BOLT_PATH = "M44 52L34 68H41L38 84L54 64H46L52 52H44Z"

export function LogoMark({
  size = 64,
  variant = "green",
  className,
}: {
  size?: number
  variant?: LogoVariant
  className?: string
}) {
  const gradId = React.useId()

  const bubbleFill =
    variant === "white" ? "var(--warc-green)" : variant === "mono" ? "var(--warc-ink)" : "#ffffff"

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {variant !== "mono" && (
        <>
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              {variant === "white" ? (
                <>
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#ffffff" />
                </>
              ) : (
                <>
                  <stop offset="0" stopColor="var(--warc-green)" />
                  <stop offset="1" stopColor="var(--warc-green-dark)" />
                </>
              )}
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="24" fill={`url(#${gradId})`} />
        </>
      )}
      <path d={BUBBLE_PATH} fill={bubbleFill} />
      <path d={BOLT_PATH} fill={bubbleFill} />
    </svg>
  )
}

export function logoMarkSvgString(variant: LogoVariant = "green"): string {
  const bg =
    variant === "green"
      ? `<rect width="100" height="100" rx="24" fill="#0a5f33"/>`
      : variant === "white"
        ? `<rect width="100" height="100" rx="24" fill="#ffffff"/>`
        : ""
  const bubbleFill = variant === "white" ? "#0a5f33" : variant === "mono" ? "#17170f" : "#ffffff"
  return `<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  ${bg}
  <path d="${BUBBLE_PATH}" fill="${bubbleFill}"/>
  <path d="${BOLT_PATH}" fill="${bubbleFill}"/>
</svg>`
}
