import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BrandFooter } from "./Brand"
import { MessageCircle, Moon, Users, Globe2 } from "lucide-react"

const HELPS_WITH = [
  {
    icon: MessageCircle,
    text: "Answers every WhatsApp message in about 13 seconds, so enquiries turn into booked patients",
  },
  {
    icon: Moon,
    text: "Covers nights, weekends and holidays automatically, no after-hours patient goes unanswered",
  },
  {
    icon: Users,
    text: "Hands off to your team the moment a patient needs a human, nothing falls through the cracks",
  },
  {
    icon: Globe2,
    text: "Replies in 100+ languages, so no patient is lost to a language barrier",
  },
]

const RESULTS = [
  { value: "32", label: "patients booked who'd have been lost" },
  { value: "€6k+", label: "generated in 3 months" },
  { value: "13s", label: "avg. reply time" },
]

export function Post12WhatItHelpsWith() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)]">
      <div className="relative flex flex-1 flex-col justify-center px-16">
        <Badge className="mx-auto mb-7 border border-[var(--warc-green)]/25 bg-[var(--warc-mint)]/50 px-5 py-2 text-[16px] font-bold tracking-wide text-[var(--warc-green-dark)] uppercase">
          What WARC does
        </Badge>

        <h1 className="text-center text-[46px] leading-[1.15] font-extrabold tracking-tight text-[var(--warc-ink)]">
          One tool. Every patient recovered, every time.
        </h1>

        <div className="mt-12 flex flex-col gap-6">
          {HELPS_WITH.map((h) => (
            <div key={h.text} className="flex items-center gap-5">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--warc-mint)]/60">
                <h.icon className="size-7 text-[var(--warc-green-dark)]" />
              </div>
              <p className="text-[24px] leading-snug font-medium text-[var(--warc-ink)]/85">
                {h.text}
              </p>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-[var(--warc-card-border)]" />

        <div className="flex justify-between px-2">
          {RESULTS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-[48px] leading-none font-extrabold tracking-tight text-[var(--warc-ink)]">
                {s.value}
              </div>
              <p className="mt-2 max-w-[160px] text-[17px] leading-snug text-[var(--warc-ink)]/55">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <BrandFooter />
      </div>
    </div>
  )
}
