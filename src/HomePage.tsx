import { Link } from "react-router-dom"
import { LogoMark } from "@/logo/LogoMark"
import { ArrowRight, Image, Sparkles, Send } from "lucide-react"

const PAGES = [
  {
    to: "/logo",
    icon: Sparkles,
    title: "Logo",
    description:
      "The brand mark: color variants, real-size legibility check, and SVG/PNG exports at every size from favicon to app icon.",
  },
  {
    to: "/posts",
    icon: Image,
    title: "Instagram Posts",
    description:
      "10 ready-to-post graphics built from the real D2 Clínica Dental case study, plus the profile bio, each exportable as a full-resolution PNG.",
  },
  {
    to: "/outreach",
    icon: Send,
    title: "Outreach",
    description:
      "Cold email and Instagram DM templates for reaching out to clinics, with a personalized trigger, real proof, and a strong CTA.",
  },
]

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[var(--warc-cream-1)] via-[var(--warc-bg)] to-[var(--warc-cream-2)] px-8 py-20">
      <LogoMark size={72} variant="green" />
      <h1 className="mt-6 text-[34px] font-bold tracking-tight text-[var(--warc-ink)]">
        WARC brand assets
      </h1>
      <p className="mx-auto mt-3 max-w-[480px] text-center text-[15px] leading-relaxed text-[var(--warc-ink)]/60">
        Pick a page to review, edit, and export from.
      </p>

      <div className="mt-12 grid w-full max-w-[940px] grid-cols-1 gap-5 sm:grid-cols-3">
        {PAGES.map((p) => (
          <Link
            key={p.to}
            to={p.to}
            className="group flex flex-col items-start gap-4 rounded-2xl border border-[var(--warc-card-border)] bg-[var(--warc-card)] p-7 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--warc-green)]">
              <p.icon className="size-5 text-white" />
            </div>
            <div>
              <p className="text-[17px] font-semibold text-[var(--warc-ink)]">{p.title}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-[var(--warc-ink)]/55">
                {p.description}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--warc-green)]">
              Open
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
