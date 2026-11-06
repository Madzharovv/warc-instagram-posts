import { CopyField } from "@/components/CopyField"

const PROFILE = [
  ["Name", "WARC | WhatsApp for Clinics", 30],
  ["Bio", "24/7 WhatsApp receptionist for dental clinics\nEnquiries → clear booking path\nSee WARC on a sample enquiry ↓", 150],
  ["Website link", "warc.akroslab.com"],
  ["Category", "Software company"],
] as const

export function BioCard() {
  return <div className="mx-auto mt-8 max-w-[640px] rounded-2xl border border-[#17170f]/10 bg-[#fdfbf3] p-5 text-left shadow-sm sm:p-6"><p className="text-[13px] font-semibold tracking-wide text-[#0a5f33] uppercase">WARC profile · product & proof hub</p><p className="mt-2 mb-5 text-[13px] leading-5 text-[#17170f]/60">Suggested profile copy, aligned with the current offer. No unverified patient or revenue metrics.</p><div className="flex flex-col gap-3">{PROFILE.map(([label, value, limit]) => <CopyField key={label} label={label} value={value} limit={limit} />)}</div></div>
}
