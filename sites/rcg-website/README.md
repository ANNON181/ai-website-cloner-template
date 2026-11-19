# RCG website (draft)

One-page Next.js 16 + Tailwind v4 site for Risk Consultancy Group Pty Ltd, with Executive Protection Global Pty Ltd.

## Run
```bash
cd sites/rcg-website
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build
```

## Before launch
1. Review all copy in `src/components/sites/rcg/config.ts` and `Sections.tsx`. It is draft and client-facing.
2. Set `NEXT_PUBLIC_CONTACT_EMAIL` (see `.env.example`). Until set, the contact section shows a placeholder.
3. Remove the `robots: noindex` block in `src/app/layout.tsx`.
4. Supply logo and photography if wanted. The logo is currently a text mark.

See `docs/research/rcg/BRIEF.md` for status and open items.
