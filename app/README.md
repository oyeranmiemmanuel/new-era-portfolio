# New Era Portfolio

Portfolio and business website for New Era: branding and design work, plus websites and software projects.

Live site: https://www.newerabrand.online/

## Tech

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4
- react-icons

Requires Node.js 20.9 or newer (a Next.js 16 requirement).

## Run locally

```cmd
npm install
npm run dev
```

Open http://localhost:3000.

Before deploying, check the production build:

```cmd
npm run lint
npm run build
```

## Where things live

| What | Where |
|---|---|
| Websites and software projects | `data/projects.ts` |
| Design works (branding, flyers, logos, social) | `data/design-works.ts` |
| Phone, email, Instagram, site URL, WhatsApp message | `lib/site.ts` |
| Pages | `app/` (`/`, `/projects`, `/portfolio`, `/about`, `/contact`) |
| Reusable sections and cards | `components/` |
| Images | `public/images/` |

## Add a website or software project

1. Save a screenshot in `public/images/Projects/` (a filename without spaces, for example `my-shop.jpg`).
2. Open `data/projects.ts` and copy the template at the top of the file into the `projects` list.
3. Fill in real details only. Delete any optional line you do not have: buttons and sections with no data are hidden automatically.
4. Save. The card, category filter, project page and home-page section update by themselves.

Status meanings: `live` (deployed, needs `liveUrl`), `completed`, `in-progress`, `prototype`.

The build stops with a clear message if a URL is invalid, a slug is duplicated, or a `live` project has no `liveUrl`.

## Add a design work

Add an entry to the matching list in `data/design-works.ts` and place the image in the matching folder under `public/images/`. Add `featured: true` to show it on the home page.

## Change contact details

Edit `lib/site.ts`. Every WhatsApp button, the Contact page and the metadata read from it.

## Deploying

Test locally first (`npm run lint` and `npm run build`), commit, then deploy.