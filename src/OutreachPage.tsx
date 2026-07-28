import { CopyField } from "@/components/CopyField"
import { Badge } from "@/components/ui/badge"

type EmailTemplate = {
  trigger: string
  subject: string
  body: string
}

const FORMULA = [
  { step: "Notice", note: "A real, specific observation about them. Proves this isn't a mass blast before you've said a word about WARC." },
  { step: "Wonder", note: "A soft question that lets them realize the problem themselves, instead of you pointing it out at them." },
  { step: "Cost", note: "What that problem actually costs them. The patient who doesn't wait, they just message the next practice." },
  { step: "Answer", note: "WARC shows up as the answer to a problem they already feel, not as the subject of a pitch." },
  { step: "Proof", note: "A real result from a real clinic, introduced only after the problem is felt. That order is what makes it land." },
  { step: "Ask", note: "A low-pressure invitation, not a demand. Easy to say yes to because it costs them almost nothing." },
]

// Steps 2 to 6 are the same on purpose. Only the opening "Notice" line
// changes per trigger, that's what keeps this personalized at volume.
const PROBLEM = `It got me wondering, what happens when someone messages your clinic on WhatsApp after you've closed for the day?

If the patient is still waiting for a reply the next morning, there's a good chance they've already contacted another practice.`

const ANSWER_AND_PROOF = `That's exactly why we built WARC. It replies to WhatsApp enquiries within seconds, 24/7, so even outside of business hours every patient gets an immediate response.

One clinic we work with, D2 Clínica Dental in Mallorca, generated over €6,000 in their first 3 months with WARC, including 32 bookings that would otherwise have been missed. Now it's simply part of their front desk.`

const ASK = `Would you be open to a quick 5-minute walkthrough? I'll show you exactly how it would work with your existing WhatsApp.`

const EMAIL_TEMPLATES: EmailTemplate[] = [
  {
    trigger: "Trigger: new location or clinic recently opened",
    subject: "Quick question about [Clinic Name]'s WhatsApp",
    body: `Hi [First Name],

I noticed [Clinic Name] recently opened a new location [in City], so I thought I'd reach out.

${PROBLEM}

${ANSWER_AND_PROOF}

${ASK}`,
  },
  {
    trigger: "Trigger: reviews mention slow replies or missed messages",
    subject: "Noticed something in [Clinic Name]'s reviews",
    body: `Hi [First Name],

I noticed a few reviews for [Clinic Name] mention it takes a while to hear back after messaging, so I thought I'd reach out.

${PROBLEM}

${ANSWER_AND_PROOF}

${ASK}`,
  },
  {
    trigger: "Trigger: team or practice is growing",
    subject: "[Clinic Name] is growing, quick question",
    body: `Hi [First Name],

I noticed [Clinic Name] has been growing the team lately [new dentist, more hours, more chairs], so I thought I'd reach out.

${PROBLEM} With more patients coming through, that gap only gets more expensive.

${ANSWER_AND_PROOF}

${ASK}`,
  },
  {
    trigger: "Trigger: running ads, promotions, or visibly high enquiry volume",
    subject: "Quick question about [Clinic Name]'s enquiries",
    body: `Hi [First Name],

I noticed [Clinic Name] has been getting a lot of enquiries lately [saw your promotion, your ads, your social posts], so I thought I'd reach out.

It got me wondering, with that many people messaging in, what happens to the ones who reach out on WhatsApp after you've closed for the day?

If a patient is still waiting for a reply the next morning, there's a good chance they've already booked with another practice, and that ad spend just went to a competitor instead.

${ANSWER_AND_PROOF}

${ASK}`,
  },
  {
    trigger: "Fallback: no specific trigger found, use sparingly",
    subject: "Quick question for [Clinic Name]",
    body: `Hi [First Name],

I've been speaking with a few clinics about how they handle WhatsApp messages outside office hours, and it got me thinking about [Clinic Name].

${PROBLEM}

${ANSWER_AND_PROOF}

${ASK}`,
  },
]

// Same six-step formula as the email, compressed hard. A DM that reads like
// an email gets ignored, so only the opener changes and everything else is
// cut to one line each.
const DM_PROBLEM = `Quick one: how fast do patients hear back after hours on WhatsApp? If they're still waiting the next morning, they've probably messaged someone else.`

const DM_ANSWER_AND_PROOF = `We built WARC for that. It replies in about 13 seconds, 24/7. One clinic generated over €6,000 in 3 months, including 32 bookings that would've otherwise been missed.`

const DM_ASK = `Would you be open to a quick 5-minute walkthrough? I'll show you exactly how it would work with your existing WhatsApp 👍`

// Sent as the last line of every clinic-facing DM, right before the 6-image
// bundle carousel gets attached as a follow-up in the same conversation.
const DM_IMAGES_NOTE = `I'll also send over a few images below that break down exactly how it works 👇`

// One-off, not part of the 5-trigger system: mutual follow already in place,
// send from personal account, includes the end-of-July bonus offer.
const BARLAS_CO_DM = `Hey Dr Abdullah & Dr Shafay 👋 love the before/after transformations you're posting, thought I'd reach out.

Quick one: how fast do patients hear back after hours on WhatsApp? If they're still waiting the next morning, they've probably messaged someone else.

We built WARC for that. It replies in about 13 seconds, 24/7. One clinic generated over €6,000 in 3 months, including 32 bookings that would've otherwise been missed.

If you sign up before the end of July, we'll also include the booking system and appointment reminder add-ons at no extra cost.

Would you be open to a quick 5-minute walkthrough? I'll show you exactly how it would work with your existing WhatsApp 👍

${DM_IMAGES_NOTE}`

// Bio and content are landing-page style (Same Day Implants/Bonding/Veneers,
// "Book Now", phone number front and center). Reads as an active,
// enquiry-driven marketing account, so the ads/high-volume trigger fits.
const SYNERGY_DENTAL_DM = `Hey [First Name] 👋 saw the same-day implant and veneer content you've been posting, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`

// Not a cold sales DM: he's a verified educator with 177K followers who
// teaches other dentists (Limitless On Demand), so this is a professional
// partnership/referral pitch, no emoji, no DM-speak. WARC Instagram gets
// shared as a separate follow-up message underneath this one.
const NICK_C_MESSAGE = `Hi Nick,

I'm Valentin, part of the team behind WARC, which replies to WhatsApp enquiries within seconds, 24/7. One clinic we work with generated over €6,000 in their first 3 months with WARC, including 32 bookings that would otherwise have been missed.

Given the platform you've built with Limitless On Demand, I wanted to introduce WARC directly, in case there are a few clinic owners you know personally who'd genuinely benefit and you'd be comfortable mentioning it to them.

As a thank you, we'll offer 20% of the subscription for every clinic that signs up through you, for as long as they stay a customer. We'll also include the booking system and appointment reminder system at no extra cost for each clinic you help sign up, and if you find WARC useful for Limitless Dental, we'd extend the same to you.

Let me know if you have any questions.

Best,
Valentin`

type ReadyToSend = {
  label: string
  handle: string
  note: string
  message: string
  followUpWithImages?: boolean
}

const READY_TO_SEND: ReadyToSend[] = [
  {
    label: "DM to Dr Abdullah & Dr Shafay Barlas",
    handle: "@barlasandco.dentistry",
    note: "Mutual follow already in place, so this'll land straight in their inbox. Includes the end-of-July booking + reminder system bonus.",
    message: BARLAS_CO_DM,
    followUpWithImages: true,
  },
  {
    label: "DM to Synergy Dental Clinic Specialist",
    handle: "@synergydentalspecialist",
    note: "Bio and content are built around same-day implant/veneer bookings, a high-enquiry-volume marketing angle.",
    message: SYNERGY_DENTAL_DM,
    followUpWithImages: true,
  },
  {
    label: "Message to Dr Nick Ciardiello",
    handle: "@dr.nickc",
    note: "Partnership/referral pitch, not a cold sales DM. He's a verified educator with 177K followers, and this asks him to mention WARC personally to clinic owners he actually knows, not repost it broadly. 20% referral rate. Follow up underneath with the WARC Instagram profile.",
    message: NICK_C_MESSAGE,
  },
]

const DM_TEMPLATES: EmailTemplate[] = [
  {
    trigger: "Trigger: new location or clinic recently opened",
    subject: "",
    body: `Hey [First Name] 👋 saw [Clinic Name] just opened a new location, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`,
  },
  {
    trigger: "Trigger: reviews mention slow replies or missed messages",
    subject: "",
    body: `Hey [First Name] 👋 noticed a few reviews on [Clinic Name] mention slow replies, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`,
  },
  {
    trigger: "Trigger: team or practice is growing",
    subject: "",
    body: `Hey [First Name] 👋 saw [Clinic Name] is growing the team, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`,
  },
  {
    trigger: "Trigger: running ads, promotions, or visibly high enquiry volume",
    subject: "",
    body: `Hey [First Name] 👋 saw [Clinic Name] getting a lot of enquiries lately, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`,
  },
  {
    trigger: "Fallback: no specific trigger found, use sparingly",
    subject: "",
    body: `Hey [First Name] 👋 came across [Clinic Name]'s page, thought I'd reach out.

${DM_PROBLEM}

${DM_ANSWER_AND_PROOF}

${DM_ASK}

${DM_IMAGES_NOTE}`,
  },
]

function EmailCard({ t, index }: { t: EmailTemplate; index: number }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="text-[15px] font-semibold text-[#0b0b0f]">Email {index + 1}</p>
        <Badge className="border-[#0a5f33]/20 bg-[#0a5f33]/8 text-[11px] font-semibold text-[#0a5f33]">
          {t.trigger}
        </Badge>
      </div>
      <div className="flex flex-col gap-3">
        <CopyField label="Subject" value={t.subject} />
        <CopyField label="Body" value={t.body} />
      </div>
    </div>
  )
}

function DmCard({ t, index }: { t: EmailTemplate; index: number }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <p className="text-[15px] font-semibold text-[#0b0b0f]">DM {index + 1}</p>
        <Badge className="border-[#0a5f33]/20 bg-[#0a5f33]/8 text-[11px] font-semibold text-[#0a5f33]">
          {t.trigger}
        </Badge>
      </div>
      <CopyField label="Message" value={t.body} />
    </div>
  )
}

export function OutreachPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f4]">
      <header className="border-b border-black/10 bg-white px-8 py-10 text-center">
        <p className="mb-2 text-[13px] font-semibold tracking-wide text-[#0a5f33] uppercase">
          WARC · Outreach templates
        </p>
        <h1 className="text-[32px] font-bold tracking-tight text-[#0b0b0f]">
          One structure. Five openers. Built to scale.
        </h1>
        <p className="mx-auto mt-3 max-w-[640px] text-[15px] leading-relaxed text-black/55">
          Only the first line changes per clinic. Everything after it, the
          question, the pain point, the product, the proof, the ask, stays the
          same because the structure is what makes it work, not the specific
          words. Send enough of these and it still reads personal every time.
        </p>
        <div className="mx-auto mt-6 max-w-[640px] rounded-xl border border-amber-200 bg-amber-50 px-5 py-3.5 text-left text-[13.5px] leading-relaxed text-amber-900">
          <strong>WARC is WhatsApp-only.</strong> Don't imply it covers
          Instagram DMs, SMS, live chat, or phone calls. Keep every claim
          scoped to WhatsApp specifically.
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-8 py-14">
        <section className="mb-14">
          <h2 className="mb-4 text-[22px] font-bold tracking-tight text-[#0b0b0f]">
            The formula
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FORMULA.map((f, i) => (
              <div key={f.step} className="rounded-xl border border-black/10 bg-white p-4">
                <p className="text-[12px] font-semibold text-[#0a5f33]">
                  {i + 1}. {f.step}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-black/60">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-1 text-[22px] font-bold tracking-tight text-[#0b0b0f]">
            Cold email
          </h2>
          <p className="mb-6 text-[14px] text-black/50">
            Pick whichever trigger is actually true for the clinic you're
            emailing. Fill in the brackets. Use the fallback only when none of
            the other four apply.
          </p>
          <div className="flex flex-col gap-5">
            {EMAIL_TEMPLATES.map((t, i) => (
              <EmailCard key={i} t={t} index={i} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-1 text-[22px] font-bold tracking-tight text-[#0b0b0f]">
            Instagram DM
          </h2>
          <p className="mb-6 text-[14px] text-black/50">
            Same five triggers, same formula, cut down hard. A DM that reads
            like an email gets ignored, so every line here is shorter than its
            email equivalent.
          </p>
          <a
            href="/posts#bundle-carousel"
            className="mb-6 flex items-center justify-between gap-4 rounded-xl border border-[#0a5f33]/20 bg-[#0a5f33]/8 px-5 py-4 text-left transition hover:bg-[#0a5f33]/12"
          >
            <span className="text-[13.5px] leading-relaxed text-[#0a5f33]">
              <strong>Send the 6-image bundle carousel right after this message.</strong>{" "}
              Every DM below ends with a line that sets it up, download the
              images and attach them as your next message in the same chat.
            </span>
            <span className="shrink-0 text-[13px] font-semibold whitespace-nowrap text-[#0a5f33]">
              Get images →
            </span>
          </a>
          <div className="flex flex-col gap-5">
            {DM_TEMPLATES.map((t, i) => (
              <DmCard key={i} t={t} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="mb-1 text-[22px] font-bold tracking-tight text-[#0b0b0f]">
            Ready to send
          </h2>
          <p className="mb-6 text-[14px] text-black/50">
            One-off, personalized DMs for specific accounts. Send from your personal
            account, not the WARC page.
          </p>
          <div className="flex flex-col gap-5">
            {READY_TO_SEND.map((r) => (
              <div key={r.handle} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <div className="mb-4">
                  <p className="text-[15px] font-semibold text-[#0b0b0f]">{r.handle}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-black/55">{r.note}</p>
                  {r.followUpWithImages && (
                    <a
                      href="/posts#bundle-carousel"
                      className="mt-2 inline-block text-[12.5px] font-semibold text-[#0a5f33] hover:underline"
                    >
                      📎 Follow up with the 6-image bundle carousel →
                    </a>
                  )}
                </div>
                <CopyField label={r.label} value={r.message} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 px-8 py-8 text-center text-[12.5px] text-black/40">
        Every stat here (13s reply time, €6,000+ generated, 32 rescued
        bookings) is real, from the D2 Clínica Dental case study. Edit
        directly in{" "}
        <code>src/OutreachPage.tsx</code>.
      </footer>
    </div>
  )
}
