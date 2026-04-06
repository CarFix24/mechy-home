# Design Spec: mechy-home Landing Page

**Date:** 2026-04-05
**Status:** Approved

---

## Context

CarFix24 needs a public-facing landing page at `carfix24.com` to collect waitlist signups and communicate the brand before the Mechy app launches. The design is already fully specified via a reference HTML file (`Image 2.html`) and a design system document (`Image 3.markdown`). This spec covers the implementation approach, not the visual design itself.

---

## Architecture

| Layer | Decision |
|---|---|
| Framework | Next.js 14 (App Router), TypeScript |
| Styles | Tailwind CSS (npm) with custom design tokens |
| Fonts | `next/font/google` — Space Grotesk + Manrope |
| Form backend | Formspree (free tier, email delivery) |
| Container | Docker multi-stage build (Node 20-alpine), identical to mechy-dashboard |
| AWS | Elastic Beanstalk, us-east-1, `mechy-new` profile |
| GitHub | `CarFix24/mechy-home`, created via `sekharnc` account |

---

## File Structure

```
mechy-home/
├── src/app/
│   ├── layout.tsx        # Root layout — fonts, metadata, global CSS
│   ├── page.tsx          # Full landing page (single React component)
│   └── globals.css       # glass-nav, kinetic-gradient, base reset
├── public/               # Static assets placeholder
├── .elasticbeanstalk/
│   └── config.yml        # mechy-home-prod, us-east-1, mechy-new profile
├── Dockerfile            # Exact copy of mechy-dashboard pattern
├── .dockerignore
├── .ebignore
├── next.config.js        # output: standalone
├── tailwind.config.ts    # Full design system tokens
├── package.json
└── tsconfig.json
```

---

## Sections (in order)

1. **Nav** — Glassmorphism fixed navbar (CARFIX24 logo, Benefits / How It Works / Mechanics links, Notify Me CTA)
2. **Hero** — "Auto Repair, Reinvented." headline, email waitlist form, mechanic avatar stack, hero image with floating diagnostic card
3. **Benefits** — "Why CarFix24?" three-card bento grid (Radical Transparency, At Your Doorstep, Top-Tier Talent)
4. **How It Works** — "Service in Motion." three-step flow with progress line
5. **Social Proof** — "Expanding Nationwide" + "Coming to St. Louis soon." CTA banner
6. **App Download** — Mechy (consumer) + MechyPro (mechanic) app cards with store badges
7. **Footer** — Logo, copyright, Privacy Policy / Terms / Contact links

---

## Form Integration (Formspree)

The hero email form and "GET EARLY ACCESS" button both submit to a Formspree endpoint. The user must:
1. Create a free account at formspree.io
2. Create a new form → copy the endpoint URL (e.g., `https://formspree.io/f/XXXXXXXX`)
3. Set the `NEXT_PUBLIC_FORMSPREE_URL` env var in EB environment settings

The form component will read from `process.env.NEXT_PUBLIC_FORMSPREE_URL` with a fallback to `#`.

---

## Design Token Migration

All custom Tailwind tokens from the CDN config are migrated verbatim:
- Colors: `primary`, `secondary`, `surface`, `surface-container-*`, `on-primary`, etc. (full M3 palette)
- Font families: `headline` → Space Grotesk, `body` / `label` → Manrope
- Border radius: `DEFAULT`, `lg`, `xl`, `full` overrides
- Custom CSS classes: `.kinetic-gradient`, `.glass-nav`

---

## Deployment Notes

- `next.config.js` uses `output: "standalone"` (required for Docker/EB)
- Dockerfile: multi-stage (builder → runner), PORT=8080, exposes 8080
- EB config: application `mechy-home`, environment `mechy-home-prod`, platform `Docker on 64bit Amazon Linux 2023`, region `us-east-1`
- Domain: after EB deploy, CNAME `carfix24.com` to the EB environment URL via DNS provider

---

## Images

The reference HTML uses Google-hosted ephemeral image URLs. These will render at launch but must be replaced with owned assets before the domain goes live publicly.

---

## Out of Scope

- Analytics / tracking
- CMS or content management
- Dark mode (design is light-only)
- Mobile app deep links (store badge `href` values are `#` placeholders)
