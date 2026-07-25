import { LogoLockupHorizontal } from "@/logo/LogoLockup"

export function BrandMark({ light = false }: { light?: boolean }) {
  return <LogoLockupHorizontal size={36} variant={light ? "white" : "green"} />
}

export function BrandFooter({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between border-t px-14 py-8 ${
        light ? "border-white/15" : "border-[var(--warc-card-border)]"
      }`}
    >
      <BrandMark light={light} />
      <div className="text-right">
        <p
          className={`text-[18px] font-semibold ${light ? "text-white/90" : "text-[var(--warc-ink)]/85"}`}
        >
          warc.akroslab.com
        </p>
        <p className={`text-[15px] ${light ? "text-white/50" : "text-[var(--warc-ink)]/45"}`}>
          24/7 WhatsApp receptionist for clinics
        </p>
      </div>
    </div>
  )
}
