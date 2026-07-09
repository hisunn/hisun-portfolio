# ihsandzahri.com — Portfolio Frontend

Payments-themed developer portfolio. React 18 + TypeScript + Vite + Tailwind CSS,
with TanStack Query wired to a Spring Boot backend (graceful fallback to bundled
content when the API is offline).

## Design notes

The visual identity borrows from the payments domain:

- **Signature element** — the hero "authorization log" types out an ISO 8583-style
  message (MTI 0100 → DE39 = 00 → APPROVED) introducing you like a card transaction.
- **Section eyebrows** — mono labels styled as ISO 8583 data elements
  (F02 Profile, F04 Projects, F39 Experience, F43 Contact).
- **Palette** — receipt-paper white `#F7F8F5`, thermal-ink green-black `#131F1A`,
  bank-note "approved" green `#0B7A4B`, sparing "declined" red `#D8432A`.
- **Type** — Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono (data).
- Contact form success reads: "Response code 00 — message sent."
- Reduced-motion users get everything instantly (no typing animation).

## Quick start

```bash
npm install
cp .env.example .env      # set VITE_API_URL when the backend exists
npm run dev               # http://localhost:5173
```

The site works fully without a backend — projects render from `src/lib/data.ts`.
When `VITE_API_URL` points at your Spring Boot API, `/api/projects` overrides the
bundled list and `/api/contact` receives form submissions.

## Before going live — checklist

- [ ] Replace `your-github` / `your-linkedin` placeholders in `src/lib/data.ts`
- [ ] Drop your resume PDF into `public/Ihsan_Dzahri_Resume.pdf`
- [ ] Update project `demoUrl` / `repoUrl` links with real URLs
- [ ] Set `VITE_API_URL` in your hosting provider's env settings

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git
3. Build command: `npm run build` · Output directory: `dist`
4. Add env var `VITE_API_URL=https://api.ihsandzahri.com`
5. Custom domain → `ihsandzahri.com`

## Structure

```
src/
├── components/     Nav, Hero, TerminalLog (signature), About,
│                   Projects, ProjectCard, Experience, Contact, Footer
├── hooks/          useProjects (TanStack Query + fallback)
├── lib/            api.ts (fetch client) · data.ts (content — edit me!)
├── types/          content.ts
├── App.tsx
├── main.tsx
└── index.css       Tailwind + design tokens
```

## Backend contract (for the Spring Boot API)

```
GET  /api/projects  → { "data": Project[] }
POST /api/contact   → { name, email, message } → 200 OK
```

`Project`: `{ slug, name, status: "LIVE"|"IN DEVELOPMENT"|"CASE STUDY", summary, stack: string[], demoUrl?, repoUrl? }`
