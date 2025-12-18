## Purpose

This repository is a small React single-page app scaffolded with Vite and Tailwind. These instructions help AI coding agents understand the project's structure, conventions, and developer workflows so contributions are fast and consistent.

## Big picture

- **App type:** React SPA (Vite + HMR). Entry point and bootstrapping live in [src/main.jsx](src/main.jsx).
- **Top-level UI:** The main app component is [src/IndoCultureWebsite.jsx](src/IndoCultureWebsite.jsx). Keep changes to global layout or routing here.
- **Static files & assets:** Public static assets live in `public/`. Build-time assets and images live in [src/assets](src/assets).
- **Styling:** Tailwind is configured via [tailwind.config.js](tailwind.config.js) and global styles in [index.css](index.css) / [App.css](src/App.css).

## Developer workflows (commands)

- Run development server with `npm run dev` (Vite, fast HMR).
- Build production bundle with `npm run build`.
- Preview a production build with `npm run preview`.
- Lint files with `npm run lint` (uses ESLint configuration in eslint.config.js).

## Project-specific conventions

- Files use `.jsx` for React components (no TypeScript source in repo). Keep JSX components self-contained and prefer small, focused components.
- Icons use `lucide-react` — import components directly from that package.
- Prefer Tailwind utility classes over bespoke CSS for new layouts; put any global utilities in [index.css](index.css).
- The project includes `@types/react` and `@types/react-dom` in devDependencies for IDE/type hints even though sources are JS.

## Important files to inspect when making changes

- HTML shell: [index.html](index.html)
- App bootstrap: [src/main.jsx](src/main.jsx)
- Main UI entry: [src/IndoCultureWebsite.jsx](src/IndoCultureWebsite.jsx)
- Vite config: [vite.config.js](vite.config.js)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- ESLint: [eslint.config.js](eslint.config.js)
- Package manifest & scripts: [package.json](package.json)

## Integration points & gotchas

- Vite controls the dev server and build. Avoid introducing webpack-specific config patterns.
- Tailwind classes are purged by build based on source files; keep component class names in plain text (avoid constructing class names at runtime when possible).
- Static files placed in `public/` are served at the root path at runtime — reference them with absolute paths (e.g., `/logo.png`).

## Examples

- To change the global layout, update [src/IndoCultureWebsite.jsx](src/IndoCultureWebsite.jsx) and global CSS in [index.css](index.css).
- To add an icon: `import { IconName } from 'lucide-react'` and use `<IconName />` inline.

## How to propose code changes as an AI agent

- Keep edits minimal and atomic; run `npm run lint` after changes to catch style problems.
- For visual changes, point the human reviewer to preview steps: `npm run build` then `npm run preview` (or `npm run dev` for quick HMR).
- If adding new devDependencies, update `package.json` and avoid major version bumps without human approval.

---
If anything here is unclear or you want me to include examples for specific files, tell me which area to expand.
