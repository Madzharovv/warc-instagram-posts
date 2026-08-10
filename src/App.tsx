import { useEffect } from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import { PostFrame } from "@/components/PostFrame"
import { Post0Launch } from "@/posts/Post0Launch"
import { Post1HeroStat } from "@/posts/Post1HeroStat"
import { Post2AfterHours } from "@/posts/Post2AfterHours"
import { Post3Quote } from "@/posts/Post3Quote"
import { Post4ChatMockup } from "@/posts/Post4ChatMockup"
import { Post5BeforeAfter } from "@/posts/Post5BeforeAfter"
import { Post6StatsGrid } from "@/posts/Post6StatsGrid"
import { Post7Testimonial } from "@/posts/Post7Testimonial"
import { Post8CTA } from "@/posts/Post8CTA"
import { Post9Engagement } from "@/posts/Post9Engagement"
import { Post11Revenue } from "@/posts/Post11Revenue"
import { Post12WhatItHelpsWith } from "@/posts/Post12WhatItHelpsWith"
import { BundleSlide1Cover } from "@/posts/bundle/Slide1Cover"
import { BundleSlide2Warc } from "@/posts/bundle/Slide2Warc"
import { BundleSlide3Booking } from "@/posts/bundle/Slide3Booking"
import { BundleSlide4Reminders } from "@/posts/bundle/Slide4Reminders"
import { BundleSlide5LandingPage } from "@/posts/bundle/Slide5LandingPage"
import { BundleSlide6Recap } from "@/posts/bundle/Slide6Recap"
import { Story1Slide1Before } from "@/posts/stories/Story1Slide1Before"
import { Story1Slide2After } from "@/posts/stories/Story1Slide2After"
import { Story1Slide3Results } from "@/posts/stories/Story1Slide3Results"
import { Story2Slide1Before } from "@/posts/stories/Story2Slide1Before"
import { Story2Slide2After } from "@/posts/stories/Story2Slide2After"
import { Story2Slide3Results } from "@/posts/stories/Story2Slide3Results"
import { LogoPage } from "@/LogoPage"
import { HomePage } from "@/HomePage"
import { OutreachPage } from "@/OutreachPage"
import { BioCard } from "@/BioCard"
import { CopyField } from "@/components/CopyField"
import { POST_CAPTIONS } from "@/postCaptions"

const POSTS: { id: string; filename: string; title: string; render: () => React.ReactNode }[] = [
  { id: "p0", filename: "warc-00-launch", title: "0 · Account launch (post this first)", render: () => <Post0Launch /> },
  { id: "p1", filename: "warc-01-hero-stat", title: "1 · Hero stat: 13 seconds", render: () => <Post1HeroStat /> },
  { id: "p2", filename: "warc-02-after-hours", title: "2 · After-hours comparison", render: () => <Post2AfterHours /> },
  { id: "p3", filename: "warc-03-quote", title: "3 · Patient quote", render: () => <Post3Quote /> },
  { id: "p4", filename: "warc-04-chat-mockup", title: "4 · Real conversation mockup", render: () => <Post4ChatMockup /> },
  { id: "p5", filename: "warc-05-before-after", title: "5 · Before / after WARC", render: () => <Post5BeforeAfter /> },
  { id: "p6", filename: "warc-06-stats-grid", title: "6 · Full stats grid", render: () => <Post6StatsGrid /> },
  { id: "p7", filename: "warc-07-testimonial", title: "7 · Dr. Fidanov testimonial", render: () => <Post7Testimonial /> },
  { id: "p8", filename: "warc-08-cta", title: "8 · Closing CTA", render: () => <Post8CTA /> },
  { id: "p9", filename: "warc-09-engagement", title: "9 · High engagement (drives comments)", render: () => <Post9Engagement /> },
  { id: "p11", filename: "warc-11-revenue-proof", title: "11 · Revenue proof (lead with this)", render: () => <Post11Revenue /> },
  { id: "p12", filename: "warc-12-what-it-helps-with", title: "12 · What WARC does + results", render: () => <Post12WhatItHelpsWith /> },
]

// Before/After/Results carousels: the highest-performing post in the pack
// (the real 6:58am conversation, p4) is a single-slide compression of a
// story that has more room to work as 3 full slides. These are the new
// content pillar, built the same way, going forward, one story per
// carousel: the problem beat, the WARC-catches-it beat, then the real
// case-study numbers tying it back to proof.
const STORY_CAROUSEL_1 = {
  title: "13 · The 06:58 toothache (carousel, 3 slides)",
  captionKey: "p13",
  slides: [
    { id: "p13-1", filename: "warc-13-1-story-toothache-before", label: "1 · Before", render: () => <Story1Slide1Before /> },
    { id: "p13-2", filename: "warc-13-2-story-toothache-after", label: "2 · After", render: () => <Story1Slide2After /> },
    { id: "p13-3", filename: "warc-13-3-story-toothache-results", label: "3 · Results", render: () => <Story1Slide3Results /> },
  ],
}

const STORY_CAROUSEL_2 = {
  title: "14 · Same message, two outcomes (carousel, 3 slides)",
  captionKey: "p14",
  slides: [
    { id: "p14-1", filename: "warc-14-1-story-outcomes-before", label: "1 · Before", render: () => <Story2Slide1Before /> },
    { id: "p14-2", filename: "warc-14-2-story-outcomes-after", label: "2 · After", render: () => <Story2Slide2After /> },
    { id: "p14-3", filename: "warc-14-3-story-outcomes-results", label: "3 · Results", render: () => <Story2Slide3Results /> },
  ],
}

// Instagram carousels take one caption for the whole post, not one per
// slide, so this is a separate structure from POSTS above rather than 6
// more entries in it.
const BUNDLE_CAROUSEL = {
  title: "10 · Limited-time bundle (carousel, 6 slides)",
  captionKey: "p10" as const,
  slides: [
    { id: "p10-1", filename: "warc-10-1-bundle-cover", label: "1 · Cover", render: () => <BundleSlide1Cover /> },
    { id: "p10-2", filename: "warc-10-2-bundle-warc", label: "2 · WARC", render: () => <BundleSlide2Warc /> },
    { id: "p10-3", filename: "warc-10-3-bundle-booking", label: "3 · Booking system", render: () => <BundleSlide3Booking /> },
    { id: "p10-4", filename: "warc-10-4-bundle-reminders", label: "4 · No-show reminders", render: () => <BundleSlide4Reminders /> },
    { id: "p10-5", filename: "warc-10-5-bundle-landing-page", label: "5 · Landing page", render: () => <BundleSlide5LandingPage /> },
    { id: "p10-6", filename: "warc-10-6-bundle-recap", label: "6 · Recap + offer & CTA", render: () => <BundleSlide6Recap /> },
  ],
}

type Carousel = {
  title: string
  captionKey: keyof typeof POST_CAPTIONS
  slides: { id: string; filename: string; label: string; render: () => React.ReactNode }[]
}

function CarouselSection({ id, carousel, note }: { id: string; carousel: Carousel; note: string }) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] px-8 pt-14">
      <p className="mb-1 text-[15px] font-semibold text-black/70">{carousel.title}</p>
      <p className="mb-6 max-w-[640px] text-[13.5px] leading-relaxed text-black/50">{note}</p>
      <div className="flex flex-wrap gap-8">
        {carousel.slides.map((s) => (
          <div key={s.id} className="flex flex-col items-center gap-3">
            <p className="text-[13px] font-semibold text-black/55">{s.label}</p>
            <PostFrame id={s.id} filename={s.filename} displayWidth={220}>
              {s.render()}
            </PostFrame>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-8 max-w-[640px]">
        <CopyField label="Carousel caption (use once, for the whole post)" value={POST_CAPTIONS[carousel.captionKey]} />
      </div>
    </section>
  )
}

function PostsPage() {
  // Client-rendered content isn't in the DOM yet when the browser tries its
  // native scroll-to-hash on load, so deep links like #bundle-carousel need
  // a manual nudge once everything's actually mounted.
  useEffect(() => {
    if (!window.location.hash) return
    document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <header className="border-b border-black/10 bg-white px-8 py-10 text-center">
        <p className="mb-2 text-[13px] font-semibold tracking-wide text-[#2a78d6] uppercase">
          WARC · Instagram content pack
        </p>
        <h1 className="text-[32px] font-bold tracking-tight text-[#0b0b0f]">
          12 single posts + 3 carousels
        </h1>
        <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-relaxed text-black/55">
          Each card renders at native 1080×1350px (Instagram's standard portrait
          post size). Click <strong>Download PNG</strong> under any post to
          export it at full resolution. No screenshotting or cropping needed.
        </p>
        <BioCard />
      </header>

      <div className="mx-auto max-w-[1400px] px-8 pt-14">
        <div className="rounded-2xl border border-[#0a5f33]/25 bg-[#0a5f33]/6 px-6 py-5">
          <p className="text-[13px] font-bold tracking-wide text-[#0a5f33] uppercase">
            Content pillar
          </p>
          <p className="mt-1.5 max-w-[820px] text-[14.5px] leading-relaxed text-black/70">
            The two carousels below are the format to lean into going forward: a
            real Before, a real After, then the case-study Results tying it
            back to proof. It's the same shape as the highest-performing post
            in the pack (post 4), just given the full 3 slides it needs.
          </p>
        </div>
      </div>

      <CarouselSection
        id="story-1-carousel"
        carousel={STORY_CAROUSEL_1}
        note="Upload all 3 images as one Instagram carousel, in this order. Built from the exact real conversation in post 4, the pack's best performer, given room to breathe across a full Before → After → Results arc."
      />

      <CarouselSection
        id="story-2-carousel"
        carousel={STORY_CAROUSEL_2}
        note="Same before/after logic as post 5, expanded into 3 full slides plus a case-study results slide tying it back to the 32-patient proof point."
      />

      <CarouselSection
        id="bundle-carousel"
        carousel={BUNDLE_CAROUSEL}
        note="Upload all 6 images as one Instagram carousel, in this order. Instagram uses a single caption for the whole post, so copy it once below and use it for the carousel, not per-slide."
      />

      <main className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-10 gap-y-14 px-8 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p) => (
          <div key={p.id} className="flex flex-col items-center gap-4">
            <p className="text-[14px] font-semibold text-black/70">{p.title}</p>
            <PostFrame id={p.id} filename={p.filename} displayWidth={300}>
              {p.render()}
            </PostFrame>
            <div className="w-full max-w-[340px]">
              <CopyField label="Caption" value={POST_CAPTIONS[p.id]} />
            </div>
          </div>
        ))}
      </main>

      <footer className="border-t border-black/10 px-8 py-8 text-center text-[12.5px] text-black/40">
        Built with shadcn/ui components (Badge, Avatar, Separator, Button) on real
        D2 Clínica Dental case-study data. Edit copy directly in{" "}
        <code>src/posts/*.tsx</code>.
      </footer>
    </div>
  )
}

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/logo", label: "Logo", end: false },
  { to: "/posts", label: "Instagram Posts", end: false },
  { to: "/outreach", label: "Outreach", end: false },
]

function TopNav() {
  return (
    <nav className="sticky top-0 z-10 flex justify-center gap-2 border-b border-black/10 bg-white/90 py-3 backdrop-blur">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className={({ isActive }) =>
            `rounded-full px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
              isActive ? "bg-[#0a5f33] text-white" : "text-black/55 hover:bg-black/5"
            }`
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  )
}

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/logo" element={<LogoPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
      </Routes>
    </div>
  )
}

export default App
