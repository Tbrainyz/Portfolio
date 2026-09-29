# Gbadebo Wale — Portfolio

React 19 + TypeScript + Vite + Tailwind CSS. One component per file, grouped by responsibility.
Supports light and dark mode via CSS variables — no component needs to know which theme is active.

## Getting started

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.tsx                 entry point
├── App.tsx                   composes the page from section components, owns the theme state
├── index.css                 Tailwind directives + theme variables + a few custom effects
├── types.ts                   shared TypeScript types
├── config/
│   └── contact.ts              single source of truth for email/phone/WhatsApp/location
├── data/
│   ├── projects.ts              project data — add new projects here as plain objects
│   └── skills.ts                 skill categories shown in the Skills section
├── hooks/
│   ├── useReveal.ts              scroll-into-view detection (IntersectionObserver)
│   ├── useCountUp.ts             animates a number counting up
│   └── useTheme.ts               dark/light mode, persisted to localStorage
└── components/
    ├── ui/
    │   ├── Reveal.tsx              wraps children, fades/slides them in on scroll
    │   ├── TiltCard.tsx            cursor-reactive 3D tilt + glow, used on project cards
    │   ├── ImageWithFallback.tsx   clean "add photo" placeholder until a real image exists
    │   └── CheckIcon.tsx           shared checkmark icon
    ├── AuroraBackground.tsx       ambient animated gradient blobs
    ├── WovenBackground.tsx        subtle background texture
    ├── Nav.tsx                     nav bar + theme toggle switch
    ├── Hero.tsx
    ├── Marquee.tsx                 scrolling stack strip
    ├── Skills.tsx                  categorized skills grid, reads data/skills.ts
    ├── Work.tsx                    bento grid, maps over data/projects.ts
    ├── ProjectCard.tsx             supports a featured layout with a checklist + demo/GitHub links
    ├── OpenSlotCard.tsx            the empty "send me your next project" card
    ├── StatCounter.tsx
    ├── Stats.tsx
    ├── Hire.tsx                    "ways to work together" tiers
    ├── About.tsx
    ├── ContactInfo.tsx             email/phone/WhatsApp/location rows with icons
    ├── ContactForm.tsx             real working form (see setup below)
    ├── Contact.tsx                 composes ContactInfo + ContactForm
    └── Footer.tsx
```

## Before you deploy

### 1. Contact details — `src/config/contact.ts`
Everything else (ContactInfo, the nav, any mailto/tel/WhatsApp link) reads from this one file:
```ts
export const CONTACT = {
  email: "your.email@example.com",
  phoneDisplay: "+234 800 000 0000",
  phoneTel: "+2348000000000",
  whatsappNumber: "2348000000000",
  location: "Lagos, Nigeria",
};
```

### 2. Contact form — `src/components/ContactForm.tsx`
The form is fully wired up in the UI, but a static site can't send email on its own — it needs
somewhere to POST to. Easiest option, free:

1. Go to [formspree.io](https://formspree.io), sign up, create a new form.
2. Copy the endpoint it gives you (looks like `https://formspree.io/f/abc123xyz`).
3. Paste it into `FORM_ENDPOINT` at the top of `ContactForm.tsx`.

Until you do this, the form still renders and works in the browser, but submissions will fail
(the UI will show the "something went wrong" message).

### 3. Photos
Drop files into `public/images/` with these exact names (or edit the `src` paths in `About.tsx`, and `data/projects.ts`):
- `about-photo.jpg` — About section photo (4:5 ratio)
- `my-real-customer-app.png`, `fony.png`, `eventra.png` — project screenshots (16:9 ratio)

Until a file exists, that slot shows a clean placeholder instead of a broken image.

### 4. CV
Drop your CV as a PDF into `public/files/Ade-CV.pdf`. Linked from the nav and the hero.

### 5. Project links
Open `src/data/projects.ts` — each project has commented-out `demoUrl` / `githubUrl` lines.
Uncomment and fill them in once you have real links; the buttons only render when a URL exists,
so nothing breaks in the meantime.

### 6. Adding more projects or skills
`data/projects.ts` and `data/skills.ts` are both just arrays of plain objects — add to them and
the corresponding section renders it automatically, no markup to touch.

### 7. Social links
`src/components/Contact.tsx` has a `socials` array near the top — GitHub/LinkedIn/X, currently `#` placeholders.

## Theming
Dark/light mode is driven by a `data-theme` attribute on `<html>`, toggled by the switch in the
nav (`useTheme.ts`), and persisted to `localStorage`. All color tokens (`ink`, `fg`, `dim`,
`surface`, `brand.amber/magenta/ember/green`) are defined once as CSS variables in `index.css` —
if you want to tune a color, that's the only place to touch.

## Deploying
Static Vite app — deploys cleanly to Vercel or Netlify. On Vercel: framework preset "Vite",
build command `npm run build`, output directory `dist`.
