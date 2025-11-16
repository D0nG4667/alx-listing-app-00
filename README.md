# ALX Listing App

**ALX Listing App** — A production-grade, scalable Airbnb-style property listing platform architected with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. Designed for semantic clarity, type safety, and expressive UI composition.

![Next.js](https://img.shields.io/badge/Next.js-16-blue?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-blue?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

---

## 🚀 Live Deployment

- Hosted on Vercel: [https://alxlisting-00.gabcares.xyz](https://alxlisting-00.gabcares.xyz)



---

## 📦 Tech Stack

| Tool           | Version     | Purpose                                 |
|----------------|-------------|-----------------------------------------|
| Node.js        | v24+        | Runtime                                 |
| Next.js        | v16 (Pages) | React framework with SSR & routing      |
| TypeScript     | 5.x         | Static typing and DX                    |
| Tailwind CSS   | v4+         | Utility-first styling                   |
| ESLint         | Latest      | Code linting and quality enforcement    |

> 💡 Recommended: VS Code with Tailwind IntelliSense + TypeScript extensions

---

## 🧱 Folder Structure

```folder
└── 📁alx-listing-app-00
    ├── 📁components
    │   ├── 📁common
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── CardGrid.tsx
    │   │   ├── DiscountBadge.tsx
    │   │   ├── FilterMenu.tsx
    │   │   ├── Icon.tsx
    │   │   ├── Pill.tsx
    │   │   ├── SortMenu.tsx
    │   ├── 📁layout
    │   │   ├── Footer.tsx
    │   │   ├── Header.tsx
    │   │   ├── Layout.tsx
    │   │   └── 📁sections
    │   │       ├── FilterSection.tsx
    │   │       ├── HeroSection.tsx
    │   │       ├── MadeWithLove.tsx
    │   │       ├── MainHeader.tsx
    │   │       ├── Navigation.tsx
    │   │       ├── PromotionBanner.tsx
    │   └── .gitkeep
    ├── 📁constants
    │   ├── IconName.ts
    │   ├── index.ts
    │   └── .gitkeep
    ├── 📁hooks
    │   └── useInfiniteScrollObserver.ts
    ├── 📁interfaces
    │   ├── index.ts
    │   └── .gitkeep
    ├── 📁pages
    │   ├── 📁api
    │   │   └── hello.ts
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   └── index.tsx
    ├── 📁public
    │   └── 📁assets
    │       ├── 📁detail-images
    │       ├── 📁listing-images
    │       ├── 📁svg
    │       │   ├── 📁icons
    │       │   ├── 📁logos
    │       │   ├── alx-white.svg
    │       │   ├── alx.svg
    │       ├── hero-section-image.png
    │       ├── icons.svg
    │       ├── sprite.svg
    │       ├── sprites.svg
    │   ├── favicon.ico
    │   ├── site.webmanifest
    ├── 📁styles
    │   └── globals.css
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.json
    ├── build-sprite.ts
    ├── eslint.config.mjs
    ├── LICENSE
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── tailwind.config.ts
    └── tsconfig.json
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/D0nG4667/alx-listing-app-00.git
cd alx-listing-app-00
npm install
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## ✅ Verification Checklist

- [x] Dev server runs without errors
- [x] Linting and type-checking pass
- [x] Tailwind styles render correctly
- [x] Responsive layout verified across breakpoints
- [x] Static assets load from `/assets/...`
- [x] Layout components (`Header`, `Footer`, `Layout`) render consistently across pages
- [x] Hero section displays background image and headline text correctly
- [x] Filter pills render dynamically and respond to user interaction
- [x] Property cards render with correct data from `PROPERTYLISTINGSAMPLE`
- [x] Infinite scroll loads additional cards using Intersection Observer
- [x] Fade-in animation triggers correctly on new card render
- [x] “Show more” button replaced with “No more listings” when exhausted
- [x] TypeScript interfaces (`PropertyProps`, etc.) enforce prop safety across components
- [x] Tailwind animation (`fade-in`) configured and applied via `tailwind.config.ts`
- [x] Layout integrated globally via `_app.tsx`
- [x] Project structure matches modular, scalable architecture
- [x] Deployed successfully to Vercel at `alxlisting-00.gabcares.xyz`

---

## 📖 Changelog

### Milestone 00 — Responsive Listing Page

- ✅ Created layout components: `Header`, `Footer`, `Layout`
- ✅ Defined `PropertyProps` interface and sample data
- ✅ Implemented hero section, filters, and listing grid
- ✅ Integrated Tailwind animations and infinite scroll
- ✅ Deployed to Vercel at `alxlisting-00.gabcares.xyz`

---

## 🧾 NPM Scripts

This project includes a curated set of scripts to streamline development, enforce code quality, and automate asset generation. Each script is designed for clarity, speed, and operational consistency.

```json
"scripts": {
  "dev": "next dev",
  "build": "ts-node build-sprite.ts && next build",
  "start": "next start",
  "lint": "eslint",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "sprite": "ts-node build-sprite.ts",
  "sprite:watch": "concurrently -k -n SPRITE -c cyan \"ts-node build-sprite.ts --watch\""
}
```

### 🔧 Script Descriptions

| Script           | Purpose |
|------------------|---------|
| **`dev`**         | Launches the Next.js development server with hot reloading at `localhost:3000`. |
| **`build`**       | Runs the `build-sprite.ts` script to generate the SVG sprite sheet, then compiles the Next.js app for production. |
| **`start`**       | Starts the optimized production build using `next start`. |
| **`lint`**        | Runs ESLint across the codebase to enforce code quality and catch potential issues. |
| **`format`**      | Formats all files using Prettier based on `.prettierrc.json` rules. |
| **`format:check`**| Checks for formatting issues without modifying files — useful for CI pipelines. |
| **`sprite`**      | Manually triggers the SVG sprite generation script (`build-sprite.ts`) using `ts-node`. |
| **`sprite:watch`**| Watches for changes in SVG assets and regenerates the sprite sheet in real time using `concurrently` with colored logging. |

> 💡 The `build-sprite.ts` script is a custom utility that consolidates individual SVG icons into a single sprite sheet (`sprite.svg`) for optimized inline usage. This ensures minimal HTTP requests and consistent icon rendering across the app.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

### Recommended Workflow

```bash
git checkout -b feature/my-feature
npm run lint && npm run typecheck
git commit -m "feat: add my-feature"
git push origin feature/my-feature
```

---

## 👤 Author

**Gabriel Okundaye**  

- GitHub: [@D0nG4667](https://github.com/D0nG4667)  
- LinkedIn: [Dr. Gabriel Okundaye](https://www.linkedin.com/in/dr-gabriel-okundaye)

---

## 🌟 Show Your Support

If this project inspires or helps you, consider giving it a ⭐️. Your support fuels future iterations and open-source contributions.
