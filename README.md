# ALX Listing App

**ALX Listing App** — A scaffold for an Airbnb-style property listing application built with **Next.js + TypeScript + Tailwind CSS**. This repository provides a production-ready foundation: clean folder structure, reusable components, TypeScript interfaces, Tailwind setup, and asset organization so you can rapidly build listing pages and UI components.

## Project Goals

- Scaffold a maintainable, scalable Next.js project for property listings.
- Enforce type-safety with TypeScript and code quality with ESLint.
- Use Tailwind CSS for fast, responsive UI composition.
- Provide reusable components (Card, Button, CardGrid) and a clear folder layout so teams can iterate quickly.

## Live Demo

- Deployed on Vercel: [https://alx-listing.gabcares.xyz](https://alx-listing.gabcares.xyz/)

## Tech Stack & Requirements

- Node: **v24+**
- Next.js: v13+ (Pages Router)
- TypeScript
- Tailwind CSS: **v4+**
- ESLint
- Recommended editor: VS Code with TypeScript & Tailwind plugins

## Project Structure

```folder

alx-listing-app/
├── components/           # Reusable React components
│   └── common/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── CardGrid.tsx
├── constants/            # App-wide constants (API URLs, UI text)
│   └── index.ts
├── interfaces/           # TypeScript interfaces (CardProps, ButtonProps, etc.)
│   └── index.ts
├── pages/                # Next.js pages (Pages Router)
│   ├── api/
│   │   └── hello.ts
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/               # Static assets
│   └── assets/
│       ├── detail-images/
│       ├── listing-images/
│       ├── hero-section-image.png
│       ├── icons.svg
│       └── logos.svg
├── styles/               # Global styles and Tailwind imports
│   └── globals.css
├── .gitignore
├── .prettierrc.json
├── eslint.config.mjs
├── LICENSE
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── tsconfig.json

```

### Directory Responsibilities

- **components/** — Composable UI components like `Card`, `Button`, `CardGrid`.
- **constants/** — Centralized constants for API URLs, default UI strings.
- **interfaces/** — Shared TypeScript interfaces (`CardProps`, `ButtonProps`) for consistent typing.
- **public/assets/** — Static images, SVGs, and other media. Reference in components via `/assets/...`.
- **styles/** — Global Tailwind styles.

## Getting Started — Run Locally

1. **Clone the repo**

```bash
git clone https://github.com/D0nG4667/alx-listing-app.git
cd alx-listing-app
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open `http://localhost:3000` in your browser.

4. **Build & run production**

```bash
npm run build
npm start
# or
yarn build
yarn start
```

5. **Linting & type checking**

```bash
npm run lint
npm run typecheck
# or
yarn lint
yarn typecheck
```

## Tailwind Configuration

- `tailwind.config.js`:

```ts
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

- `styles/globals.css` should only contain:

```css
@import "tailwindcss";

```

## Using Assets

- Place images in `public/assets/` (e.g., `listing-images/`, `detail-images/`).
- Reference with `<img src="/assets/listing-images/List 1.png" />` or with `next/image`.

## Verification Checklist

- [ ] Dev server runs without errors (`npm run dev`)
- [ ] Linting passes (`npm run lint`)
- [ ] TypeScript check passes (`npm run typecheck`)
- [ ] Tailwind styles applied correctly
- [ ] Static assets accessible under `/assets/...`

---

## 👥 Author

🕺🏻**Gabriel Okundaye**

- GitHub: [GitHub Profile](https://github.com/D0nG4667)

- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/dr-gabriel-okundaye)

## ⭐️ Show your support

If you like this project kindly show some love, give it a 🌟 **STAR** 🌟. Thank you!
