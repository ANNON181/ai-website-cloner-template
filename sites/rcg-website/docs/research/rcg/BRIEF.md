# RCG site: brief and status

Project: /home/user/rcg-website (Next.js 16, Tailwind v4). Single page: `src/app/page.tsx`.
Components: `src/components/sites/rcg/` (config.ts holds all copy; Header, Footer, Sections, Logo).
Style reference: structure and responsive patterns reused from the Crisis24 clone. No Crisis24 text, logo, photos or links are used.

## Source of facts
Only facts supplied by the owner: RCG (boutique global risk and executive protection firm, Australia; clients: multinationals, mining and resources, Fortune 50 executives, UHNWIs, national media) and EPG (intelligence-led executive protection, travel security, risk management consulting).

## Open items before launch
1. All copy is DRAFT and client-facing. Owner to review. Approach steps and service descriptions are written from the brief, not from an existing RCG source.
2. Contact: set NEXT_PUBLIC_CONTACT_EMAIL. Until set, the contact section shows a placeholder line.
3. Site is set to noindex in `src/app/layout.tsx`. Remove at launch.
4. No logo, photography, ABN, address, phone or testimonials supplied, so none are shown. Logo is a text mark.
5. Google Drive folder could not be read (connector unavailable), so existing RCG material was not audited.
6. Not deployed. Launch needs owner approval.
