# Sarthak Wakchaure — Portfolio

A personal portfolio site built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Sections

Hero · About · Skills · Professional Journey (education + experience) · Certifications · Achievements · Contact

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with:

```bash
npm run preview
```

## Deploy (free options)

**Vercel**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Click Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder after running `npm run build`).
2. Build command: `npm run build`, publish directory: `dist`.

## Editing content

All real content (name, headline, skills, experience, education, certifications, achievements, contact links) lives in one place:

```
src/data/content.ts
```

Update that file and the whole site updates — no need to touch components.

## Updating the resume

Replace `public/Sarthak_Wakchaure_Resume.pdf` with a new file of the same name, or update the `resumeFile` path in `src/data/content.ts` if you rename it.

## Notes

- Projects/GitHub sections are intentionally left out until real project links are ready — add a `Projects` section and data entry in `content.ts` when you have some to show.
- Dark theme with blue/violet/cyan accents, glass panels, and a code-comment motif (`// 01 about.tsx`) tying the visual language to your developer background.
- Respects `prefers-reduced-motion` for accessibility.
