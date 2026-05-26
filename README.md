# Alitworld

Marketing website built with Next.js 15, React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Run production server    |
| `npm run lint` | Run ESLint               |

## Project structure

```
src/
├── app/              # Pages (App Router)
├── components/       # Header, Footer, sections
├── data/site.ts      # Content (nav, portfolio, team, FAQ)
└── lib/config.ts     # Brand name, contact, social links
```

## Email (Resend)

Copy `.env.example` to `.env.local` and add your [Resend](https://resend.com) API key.

## Customize

- Brand & contact: `src/lib/config.ts`
- Content: `src/data/site.ts`
- Team photos: `public/team/`
