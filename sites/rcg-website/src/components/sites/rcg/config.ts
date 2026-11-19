/**
 * Site-wide facts. Only facts supplied by the owner are used here.
 * CONTACT_EMAIL is intentionally empty: set NEXT_PUBLIC_CONTACT_EMAIL before launch.
 */
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Approach", href: "#approach" },
  { label: "EPG", href: "#epg" },
  { label: "Contact", href: "#contact" },
] as const;

export const services = [
  {
    title: "Executive protection",
    body: "Close protection for principals, planned around the person, the itinerary and the threat picture.",
  },
  {
    title: "Travel security",
    body: "Route, venue and destination risk assessment with advance work, so movements are planned before they happen.",
  },
  {
    title: "Risk consulting",
    body: "Independent advice on security posture, protective programs and crisis readiness for leadership teams.",
  },
  {
    title: "Intelligence and threat assessment",
    body: "Intelligence-led analysis that informs every protective decision, from a single trip to a standing program.",
  },
  {
    title: "Event and tour security",
    body: "Advance packs, mapping and contact workbooks that venue staff, production crews and site teams can use on the day.",
  },
] as const;

export const sectors = [
  "Multinational corporations",
  "Mining and resources",
  "Fortune 50 executives",
  "Ultra-high-net-worth individuals and families",
  "National media corporations",
] as const;

export const approach = [
  { step: "01", title: "Understand", body: "Intelligence and risk assessment first. We establish who and what needs protecting, and from what." },
  { step: "02", title: "Plan", body: "A protective plan sized to the principal, the environment and the people who must carry it out." },
  { step: "03", title: "Advance", body: "Routes, venues and contacts are verified before arrival, and briefed to the people on the ground." },
  { step: "04", title: "Protect", body: "Quiet, disciplined delivery that keeps the principal moving and the plan simple for everyone involved." },
] as const;
