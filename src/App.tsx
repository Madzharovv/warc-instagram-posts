import { Routes, Route, NavLink } from "react-router-dom"
import { PostsPage } from "@/PostsPage"
import { LogoPage } from "@/LogoPage"
import { LegacyArchivePage } from "@/LegacyArchivePage"
import { HomePage } from "@/HomePage"
import { OutreachPage } from "@/OutreachPage"

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/logo", label: "Logo", end: false },
  { to: "/posts", label: "Instagram Posts", end: false },
  { to: "/outreach", label: "Outreach", end: false },
]

function TopNav() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-40 flex justify-start gap-1 overflow-x-auto border-b border-black/10 bg-[#fdfbf3]/95 px-2 py-2 backdrop-blur sm:justify-center sm:gap-2 sm:py-3">
      {NAV_LINKS.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          end={l.end}
          className={({ isActive }) =>
            `shrink-0 rounded-full px-3 py-2 text-[12px] sm:px-4 sm:py-1.5 sm:text-[13.5px] font-semibold transition-colors ${
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
        <Route path="/archive" element={<LegacyArchivePage />} />
      </Routes>
    </div>
  )
}

export default App
