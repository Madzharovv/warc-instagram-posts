import { useEffect, useState } from "react"
import { ArrowDownToLine, ArrowUpRight, Check, Download, FileText, Images, PackageCheck, ShieldCheck } from "lucide-react"
import { PageShell } from "@/components/PageShell"
import { BioCard } from "@/BioCard"
import { assetUrl } from "@/lib/assets"
import content from "@/data/new-clinic-carousels.json"

type Carousel = (typeof content.carousels)[number]

function DownloadLink({ href, filename, children, secondary = false }: { href: string; filename: string; children: React.ReactNode; secondary?: boolean }) {
  return <a href={assetUrl(href)} download={filename} className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 py-2 text-[13px] font-semibold transition ${secondary ? "border border-[#0a5f33]/20 bg-white text-[#073d21] hover:bg-[#dceed4]" : "bg-[#0a5f33] text-white hover:bg-[#073d21]"}`}><ArrowDownToLine className="size-4" />{children}</a>
}

function CarouselCard({ carousel, selected, onSelect }: { carousel: Carousel; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} aria-pressed={selected} aria-label={`Preview carousel ${carousel.number}: ${carousel.title}`} className={`group relative overflow-hidden rounded-xl border bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${selected ? "border-[#0a5f33] ring-2 ring-[#0a5f33]" : "border-[#17170f]/10"}`}>
      <div className="relative aspect-[4/5] overflow-hidden bg-[#dceed4]"><img src={assetUrl(carousel.slides[0].path)} alt="" width="1080" height="1350" className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" /><span className="absolute top-2 left-2 rounded-full bg-[#073d21]/90 px-2 py-1 text-[10px] font-bold text-white">{String(carousel.number).padStart(2, "0")}</span>{selected && <span className="absolute top-2 right-2 rounded-full bg-[#e4b859] p-1.5 text-[#073d21]" aria-label="Selected"><Check className="size-3.5" /></span>}</div>
      <span className="block min-h-[68px] p-3"><span className="block text-[12px] leading-[1.35] font-semibold text-[#17170f]">{carousel.title}</span><span className="mt-1 block text-[11px] text-[#17170f]/55">6 slides · 1080 × 1350</span></span>
    </button>
  )
}

export function PostsPage() {
  const [copied, setCopied] = useState(false)
  const [selectedId, setSelectedId] = useState(() => {
    const hash = window.location.hash.replace(/^#(carousel-)?/, "")
    return content.carousels.some((carousel) => carousel.slug === hash) ? hash : content.carousels[0].slug
  })
  const selected = content.carousels.find((carousel) => carousel.slug === selectedId) ?? content.carousels[0]
  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(selected.caption)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.prompt("Copy this caption", selected.caption)
    }
  }
  const selectCarousel = (slug: string) => {
    setSelectedId(slug)
    setCopied(false)
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#carousel-${slug}`)
  }
  useEffect(() => {
    document.title = `WARC — ${selected.title}`
    const handleHash = () => {
      const slug = window.location.hash.replace(/^#carousel-/, "")
      if (content.carousels.some((carousel) => carousel.slug === slug)) setSelectedId(slug)
    }
    window.addEventListener("hashchange", handleHash)
    return () => window.removeEventListener("hashchange", handleHash)
  }, [selected.title])
  return (
    <PageShell eyebrow="WARC · New Clinic Launch Series" title={<>Make the next enquiry<br className="hidden sm:block" /> a clear next step.</>} description="Eight finished carousels for new dental clinics. Practical, value-first content about WhatsApp reception, online booking, text reminders and a landing page that brings the patient path together.">
      <section aria-label="Content collection" className="-mt-16 mb-10 flex flex-col justify-between gap-5 rounded-2xl border border-[#bae6bc] bg-[#fdfbf3] p-5 shadow-[0_14px_40px_rgba(7,61,33,0.12)] sm:flex-row sm:items-center sm:p-6">
        <div className="flex items-center gap-4"><div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#dceed4] text-[#0a5f33]"><Images className="size-6" /></div><div><p className="font-semibold">New Clinic Launch Series</p><p className="mt-1 text-[13px] text-[#17170f]/60">8 carousels · 48 ready-to-post PNG slides</p></div></div>
        <DownloadLink href="new-clinic-carousels/warc-new-clinic-carousels.zip" filename="warc-new-clinic-carousels.zip">Download all 48 PNGs</DownloadLink>
      </section>

      <section id="carousel-picker" aria-labelledby="picker-title" className="scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[11px] font-bold tracking-[0.15em] text-[#0a5f33] uppercase">Choose your next post</p><h2 id="picker-title" className="mt-2 text-2xl font-semibold tracking-[-0.025em]">The content collection</h2></div><p className="text-[13px] text-[#17170f]/55">Select a cover to preview all six slides.</p></div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">{content.carousels.map((carousel) => <CarouselCard key={carousel.id} carousel={carousel} selected={selectedId === carousel.slug} onSelect={() => selectCarousel(carousel.slug)} />)}</div>
      </section>

      <section id={`carousel-${selected.slug}`} aria-labelledby="selected-title" className="mt-14 scroll-mt-24 rounded-2xl border border-[#17170f]/10 bg-[#fdfbf3] p-4 sm:p-7">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-[#0a5f33] uppercase"><span>Carousel {selected.number} of 8</span><span aria-hidden="true">/</span><span>Post-ready</span></div><h2 id="selected-title" className="mt-2 max-w-[690px] text-[28px] leading-tight font-semibold tracking-[-0.03em] sm:text-3xl">{selected.title}</h2><p className="mt-2 text-[13px] text-[#17170f]/55">Upload in the numbered order shown. Each image exports at its native 1080 × 1350px.</p></div><a href="#posting-checklist" className="inline-flex min-h-10 items-center rounded-lg border border-[#0a5f33]/20 bg-white px-4 py-2 text-[13px] font-semibold text-[#073d21]">Posting & download options ↓</a></div>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
          {selected.slides.map((slide, index) => <figure key={slide.file} className="min-w-0"><a href={assetUrl(slide.path)} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden rounded-lg border border-[#17170f]/10 bg-[#dceed4]" aria-label={`Open slide ${index + 1}: ${slide.headline}`}><img src={assetUrl(slide.path)} alt={slide.alt} width="1080" height="1350" className="aspect-[4/5] h-auto w-full object-cover" /><span className="absolute right-2 bottom-2 rounded bg-[#073d21]/85 p-1.5 text-white opacity-0 transition group-hover:opacity-100"><ArrowUpRight className="size-4" /></span></a><figcaption className="mt-2 flex items-center justify-between gap-2 px-0.5"><span className="text-[11px] leading-4 font-semibold text-[#17170f]/70">Slide {index + 1}<span className="hidden font-normal text-[#17170f]/45 sm:inline"> · {slide.kind}</span></span><a href={assetUrl(slide.path)} download={`warc-${selected.folder}-${slide.file}`} aria-label={`Download slide ${index + 1} of ${selected.title}`} className="rounded p-1.5 text-[#0a5f33] hover:bg-[#dceed4]"><Download className="size-4" /></a></figcaption></figure>)}
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_260px]">
          <div className="space-y-4"><div className="rounded-xl border border-[#17170f]/10 bg-white p-4"><div className="mb-3 flex items-center justify-between gap-3"><p className="text-[11px] font-bold tracking-wide text-[#17170f]/50 uppercase">Caption · carousel {selected.number}</p><button type="button" onClick={copyCaption} className="inline-flex items-center gap-2 rounded-lg border border-[#0a5f33]/20 px-3 py-2 text-[12px] font-semibold text-[#073d21]">{copied ? <Check className="size-4" /> : <FileText className="size-4" />}{copied ? "Copied" : "Copy caption"}</button></div><p className="text-[13px] leading-6 whitespace-pre-wrap text-[#17170f]/75">{selected.caption}</p></div><details className="rounded-xl border border-[#17170f]/10 bg-white p-4"><summary className="cursor-pointer text-[13px] font-semibold text-[#073d21]">Accessible alt text · all six slides</summary><div className="mt-4 space-y-3">{selected.slides.map((slide, index) => <p key={slide.file} className="text-[13px] leading-5 text-[#17170f]/70"><strong className="text-[#17170f]">{index + 1}.</strong> {slide.alt}</p>)}</div><a className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0a5f33] underline underline-offset-4" href={assetUrl(`new-clinic-carousels/alt-text/${selected.slug}.txt`)} download={`warc-${selected.slug}-alt-text.txt`}><FileText className="size-4" />Download alt text</a></details></div>
          <aside id="posting-checklist" className="h-fit scroll-mt-24 rounded-xl bg-[#dceed4] p-5"><PackageCheck className="size-5 text-[#0a5f33]" /><h3 className="mt-3 text-[15px] font-semibold">Posting checklist</h3><ol className="mt-4 space-y-3 text-[13px] leading-5 text-[#17170f]/75"><li><strong>1.</strong> Download each slide or the complete pack above.</li><li><strong>2.</strong> Upload slides 1–6 in order to one Instagram post.</li><li><strong>3.</strong> Copy the single carousel caption, not one per slide.</li><li><strong>4.</strong> Add the slide alt text in Instagram’s accessibility settings.</li></ol><DownloadLink href={`new-clinic-carousels/captions/${selected.slug}.txt`} filename={`warc-${selected.slug}-caption.txt`} secondary>Download caption</DownloadLink><p className="mt-4 text-[11px] leading-4 text-[#17170f]/55">The full ZIP includes all 48 slides, captions, alt text and the artwork manifest.</p></aside>
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2"><div className="rounded-xl border border-[#17170f]/10 bg-white p-6"><ShieldCheck className="size-5 text-[#0a5f33]" /><h2 className="mt-3 font-semibold">Clear scope. No invented proof.</h2><p className="mt-2 text-[13px] leading-6 text-[#17170f]/65">WARC is the WhatsApp receptionist. Booking, text reminders and the clinic landing page sit beside it. The diagrams are labelled illustrative; no conversations, patient outcomes, prices or revenue claims are presented as real.</p></div><div className="rounded-xl bg-[#073d21] p-6 text-white"><p className="text-[11px] font-bold tracking-[0.15em] text-[#bae6bc] uppercase">Next step</p><h2 className="mt-3 font-semibold">See the flow on a real call.</h2><p className="mt-2 text-[13px] leading-6 text-white/65">30-minute Google Meet · nothing to install to see the sample flow · bookings require confirmation.</p><a href="https://cal.com/akroslab-uatcyn/whatsapp24-7receptionistmeeting" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-[#bae6bc] hover:underline">Book a WARC walkthrough <ArrowUpRight className="size-4" /></a></div></section>
      <section className="mt-12"><h2 className="text-center text-2xl font-semibold tracking-tight">Set the proof hub up properly.</h2><p className="mx-auto mt-2 max-w-[560px] text-center text-[13px] leading-5 text-[#17170f]/55">Organic posts live on WARC’s account. Relationship-led outreach starts with the founder’s personal account.</p><BioCard /></section>
    </PageShell>
  )
}
