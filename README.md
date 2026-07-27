# Mariam Batkuashvili — Career Website

A premium, dark-themed personal career site built to help land remote Customer Support / VIP Support /
Player Experience roles in iGaming. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and
Framer Motion.

## Running it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files.

To build for production:

```bash
npm run build
npm run start
```

## How to update the site — no framework knowledge required

Everything you'd want to change day-to-day lives in **`src/content/`**. Each file is a plain, commented
TypeScript file with an array or object of plain values (strings, numbers) — there is no logic to break.
Save the file and the site updates.

| What you want to change | Edit this file |
| --- | --- |
| Name, headline, bio, location, email, LinkedIn, photo/CV/video paths | `src/content/profile.ts` |
| Career journey timeline (Presenter → Host → Future role) | `src/content/timeline.ts` |
| Work experience cards | `src/content/experience.ts` |
| Certificates grid | `src/content/certificates.ts` |
| Skill bars | `src/content/skills.ts` |
| "My Values" cards | `src/content/values.ts` |
| Career goals & "Why iGaming" text | `src/content/goals.ts` |
| Navbar links | `src/content/nav.ts` |

### Replacing your photo, CV, or intro video

These live in `/public` and are referenced by path from `src/content/profile.ts`:

1. **Photo** — replace `public/images/profile.svg` with your real photo (e.g. `profile.jpg`), then update
   `photo: "/images/profile.jpg"` in `profile.ts`.
2. **CV** — drop your new PDF in `public/cv/`, then update the `cv:` path in `profile.ts`. The current file
   already points at your real CV (`Mariam_Batkuashvili_Professional_CV.pdf`), so the "Download CV" buttons
   work today.
3. **Intro video** — drop an `.mp4` in `public/video/`, then set `introVideo: "/video/your-file.mp4"` in
   `profile.ts`. Until you do, the Video Introduction section shows a clean "coming soon" placeholder
   automatically — no code changes needed either way.

### Adding a new certificate

Open `src/content/certificates.ts` and copy one of the existing objects, then edit the fields
(`title`, `provider`, `issued`, `skills`, `category`). You don't need an image — if `image` is left empty,
the card automatically shows a generated badge with the provider's initial. To use a real screenshot,
drop it in `public/certificates/` and set `image: "/certificates/your-file.png"`.

### Adding a new job to Experience or a new stop on the Career Journey timeline

Same pattern: open `experience.ts` or `timeline.ts`, copy an existing object, edit the text.

## Design system

- **Theme**: dark, near-black background with a muted gold accent and a small emerald secondary accent —
  defined as CSS variables in `src/app/globals.css` (`--gold`, `--emerald`, etc.). Change those variables to
  re-theme the entire site in one place.
- **Fonts**: Playfair Display (headings) + Inter (body), loaded via `next/font` in `src/app/layout.tsx`.
- **Animation**: Framer Motion scroll-reveal (`src/components/ui/Reveal.tsx`), a scroll progress bar, and a
  short loading screen on first paint. Respects `prefers-reduced-motion`.
- **Layout building blocks**: `src/components/layout/` (Navbar, Footer, ScrollProgressBar, PageLoader).
  Section components (Hero, About, Timeline, Experience, Certificates, VideoIntro, Skills, Values,
  WhyIGaming, Learning, Goals, Contact) live in `src/components/sections/` and are assembled in
  `src/app/page.tsx`.

## SEO & accessibility

- Metadata, Open Graph, and Twitter card tags are set in `src/app/layout.tsx` — update `siteUrl` there once
  you have a real domain (also referenced in `src/app/sitemap.ts` and `robots.ts`).
- Skip-to-content link, semantic headings, alt text on all images, and visible focus states are built in.
- `prefers-reduced-motion` disables animation for users who request it.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Once live, update `siteUrl` in `src/app/layout.tsx` (and `sitemap.ts`/`robots.ts`) to your real Vercel or
   custom domain, then redeploy.

## Upgrading to a real headless CMS later (optional)

Right now all content lives in `src/content/*.ts` — simple, free, and requires no signup, but you edit it by
opening a text file. If you later want a visual dashboard (e.g. to update things from your phone), the
cleanest path is **Sanity** (generous free tier, works great with Next.js):

1. Create a free account at [sanity.io](https://www.sanity.io) and run `npm create sanity@latest` in a
   `/studio` subfolder.
2. Define schemas that mirror the shapes already in `src/content/*.ts` (e.g. a `certificate` document type
   with `title`, `provider`, `issued`, `skills`, `image`).
3. Replace the static imports (e.g. `import { certificates } from "@/content/certificates"`) with a fetch
   call to Sanity's API in each section component. Because every section already reads from a single typed
   source, this is a swap at the data layer — the components themselves don't need to change.

This project intentionally keeps content and presentation separate for exactly this reason: moving to a CMS
later is a data-fetching change, not a redesign.
