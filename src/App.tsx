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
import { BundleSlide1Cover } from "@/posts/bundle/Slide1Cover"
import { BundleSlide2Warc } from "@/posts/bundle/Slide2Warc"
import { BundleSlide3Booking } from "@/posts/bundle/Slide3Booking"
import { BundleSlide4Reminders } from "@/posts/bundle/Slide4Reminders"
import { BundleSlide5LandingPage } from "@/posts/bundle/Slide5LandingPage"
import { BundleSlide6Recap } from "@/posts/bundle/Slide6Recap"
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
]

// Instagram carousels take one caption for the whole post, not one per
// slide, so this is a separate structure from POSTS above rather than 6
// more entries in it.
const BUNDLE_CAROUSEL = {
  title: "10 · Limited-time bundle (carousel, 6 slides)",
  slides: [
    { id: "p10-1", filename: "warc-10-1-bundle-cover", label: "1 · Cover", render: () => <BundleSlide1Cover /> },
    { id: "p10-2", filename: "warc-10-2-bundle-warc", label: "2 · WARC", render: () => <BundleSlide2Warc /> },
    { id: "p10-3", filename: "warc-10-3-bundle-booking", label: "3 · Booking system", render: () => <BundleSlide3Booking /> },
    { id: "p10-4", filename: "warc-10-4-bundle-reminders", label: "4 · No-show reminders", render: () => <BundleSlide4Reminders /> },
    { id: "p10-5", filename: "warc-10-5-bundle-landing-page", label: "5 · Landing page", render: () => <BundleSlide5LandingPage /> },
    { id: "p10-6", filename: "warc-10-6-bundle-recap", label: "6 · Recap + offer", render: () => <BundleSlide6Recap /> },
  ],
}

function PostsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <header className="border-b border-black/10 bg-white px-8 py-10 text-center">
        <p className="mb-2 text-[13px] font-semibold tracking-wide text-[#2a78d6] uppercase">
          WARC · Instagram content pack
        </p>
        <h1 className="text-[32px] font-bold tracking-tight text-[#0b0b0f]">
          11 single posts + 1 six-slide carousel
        </h1>
        <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-relaxed text-black/55">
          Each card renders at native 1080×1350px (Instagram's standard portrait
          post size). Click <strong>Download PNG</strong> under any post to
          export it at full resolution. No screenshotting or cropping needed.
        </p>
        <BioCard />
      </header>

      <section className="mx-auto max-w-[1400px] px-8 pt-14">
        <p className="mb-1 text-[15px] font-semibold text-black/70">{BUNDLE_CAROUSEL.title}</p>
        <p className="mb-6 max-w-[640px] text-[13.5px] leading-relaxed text-black/50">
          Upload all 6 images as one Instagram carousel, in this order.
          Instagram uses a single caption for the whole post, so copy it once
          below and use it for the carousel, not per-slide.
        </p>
        <div className="flex flex-wrap gap-8">
          {BUNDLE_CAROUSEL.slides.map((s) => (
            <div key={s.id} className="flex flex-col items-center gap-3">
              <p className="text-[13px] font-semibold text-black/55">{s.label}</p>
              <PostFrame id={s.id} filename={s.filename} displayWidth={220}>
                {s.render()}
              </PostFrame>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-[640px]">
          <CopyField label="Carousel caption (use once, for the whole post)" value={POST_CAPTIONS.p10} />
        </div>
      </section>

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
