[![React](https://img.shields.io/badge/React-18-20232a?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-0ea5e9?logo=tailwindcss)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2023-F7DF1E?logo=javascript&logoColor=222)](https://developer.mozilla.org/docs/Web/JavaScript)
[![ESLint](https://img.shields.io/badge/ESLint-config-4B32C3?logo=eslint&logoColor=fff)](https://eslint.org/)

Trigon Engineering





A modern, mobile-friendly website for Trigon Engineering, built with React, Vite, and Tailwind CSS. The focus is a fast marketing site with clean UI, responsive layout, and straightforward maintenance.

Features
Responsive marketing site suitable for industrial/engineering services

Fast DX with Vite (HMR) and small production bundles

Utility-first styling via Tailwind; minimal custom CSS

Accessible defaults (semantic structure, keyboard-friendly nav)

SEO-ready head tags and easy Open Graph/Twitter setup

Tech Stack
UI: React

Build/Dev: Vite

Styling: Tailwind CSS

Quality: ESLint (configurable rules)

Getting Started
Prerequisites
Node.js 18+ recommended

npm (or pnpm/yarn)

Installation & Scripts
bash
Copy
Edit
# install deps
npm install

# dev server with HMR
npm run dev

# production build
npm run build

# preview the production build
npm run preview

# (optional) lint
npm run lint
Project Structure
php
Copy
Edit
.
├─ public/                 # static assets copied as-is
├─ src/                    # React app source (components, pages, styles)
├─ index.html              # Vite entry HTML
├─ tailwind.config.js      # Tailwind config
├─ postcss.config.js       # PostCSS pipeline
├─ vite.config.js          # Vite configuration
├─ eslint.config.js        # ESLint rules (may be .eslintrc.*)
└─ package.json
Tailwind Setup (quick reference)
Ensure Tailwind scans your files:

js
Copy
Edit
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
};
And import Tailwind layers in your global stylesheet (e.g., src/index.css):

css
Copy
Edit
@tailwind base;
@tailwind components;
@tailwind utilities;
SEO Checklist
Set <title> and <meta name="description"> in index.html

Add Open Graph / Twitter tags (title, description, image)

Provide a favicon (e.g., /public/favicon.ico) and optional web manifest

Ensure production is served over HTTPS with proper redirects (www ↔ apex)

Deployment
This is a static React app built by Vite; any static host works:

Vercel / Netlify: connect repo → build npm run build → output dist/

GitHub Pages: build locally and deploy the dist/ directory

Roadmap
 Finalize content (services, about, contact)

 Add OG image and social meta tags

 Lighthouse ≥ 95 (Performance / A11y / Best Practices / SEO)

 Basic analytics (e.g., Vercel Analytics)

 Contact form (static form service or serverless function)

Contributing
Open an issue or PR with fixes, accessibility improvements, or content updates. Keep changes focused and documented.