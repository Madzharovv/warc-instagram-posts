import { CopyField } from "@/components/CopyField"

const NAME = "WARC | WhatsApp Receptionist"
const BIO =
  "🦷 24/7 AI receptionist for clinics\n⚡ Real replies in ~13 seconds\n📊 Real case studies, zero fluff\n👇 Book a free demo"
const LINK = "warc.akroslab.com"
const CATEGORY = "Software company"

export function BioCard() {
  return (
    <div className="mx-auto mt-8 max-w-[640px] rounded-2xl border border-black/10 bg-white p-6 text-left shadow-sm">
      <p className="mb-1 text-[13px] font-semibold tracking-wide text-[#0a5f33] uppercase">
        Instagram profile setup
      </p>
      <p className="mb-5 text-[13.5px] leading-relaxed text-black/50">
        Paste these straight into Edit Profile before your first post goes up.
      </p>
      <div className="flex flex-col gap-3">
        <CopyField label="Name" value={NAME} limit={30} />
        <CopyField label="Bio" value={BIO} limit={150} />
        <CopyField label="Website link" value={LINK} />
        <CopyField label="Category" value={CATEGORY} />
      </div>
    </div>
  )
}
