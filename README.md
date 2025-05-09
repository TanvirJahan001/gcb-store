# GCB Store

A modern e-commerce web application built with [Next.js](https://nextjs.org), featuring a dark tech design system, smooth animations, and parallax effects. This project is designed for scalability, performance, and a seamless user experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages & Routing](#pages--routing)
- [Design System](#design-system)
- [Animations & Parallax](#animations--parallax)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- Fully responsive e-commerce UI
- Dark tech design system
- Animated transitions and parallax scrolling
- Product catalog, detail, and shop pages
- Informational pages: About, Contact, FAQ, Shipping, Returns, Warranty, Terms
- Optimized font loading with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- Modern development tooling (ESLint, Prettier, etc.)

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** CSS Modules
- **Animation:** Framer Motion and GSAP
- **Font:** [Geist](https://vercel.com/font) via `next/font`
- **Deployment:** Vercel

## Folder Structure
```
├── app/
│   ├── page.js           # Home page
│   ├── shop/             # Shop & product listing
│   ├── product/          # Product detail pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── faq/              # FAQ page
│   ├── shipping/         # Shipping info
│   ├── returns/          # Returns policy
│   ├── warranty/         # Warranty info
│   ├── terms/            # Terms & conditions
│   └── ...
├── components/           # Reusable UI components
├── styles/               # Global and modular styles
├── public/               # Static assets
├── ...
```

## Getting Started
1. **Clone the repository:**
   ```bash
git clone https://github.com/your-username/gcb-store.git
cd gcb-store
```
2. **Install dependencies:**
   ```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
3. **Run the development server:**
   ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts
- `dev` – Start the development server
- `build` – Build for production
- `start` – Start the production server
- `lint` – Run ESLint

## Pages & Routing
- `/` – Home
- `/shop` – Shop (product listing)
- `/product/[id]` – Product detail
- `/about` – About
- `/contact` – Contact
- `/faq` – Frequently Asked Questions
- `/shipping` – Shipping Information
- `/returns` – Returns Policy
- `/warranty` – Warranty Information
- `/terms` – Terms & Conditions

## Design System
- **Dark Tech Theme:** Consistent dark palette, high contrast, and modern UI elements.
- **Reusable Components:** Buttons, cards, navigation, modals, etc.
- **Typography:** Optimized with Geist font for readability and style.

## Animations & Parallax
- **Smooth Page Transitions:** Leveraging Framer Motion or GSAP for engaging navigation.
- **Parallax Effects:** Subtle parallax on hero sections and product images for depth.
- **Performance Optimized:** Animations are GPU-accelerated and accessible.

## Customization
- Update theme colors and fonts in the `styles/` directory.
- Add or modify components in `components/`.
- Extend pages in the `app/` directory as needed.

## Deployment
The recommended way to deploy is via [Vercel](https://vercel.com/):
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import your project into Vercel and follow the prompts.
3. Alternatively, build locally:
   ```bash
npm run build
npm start
```

## Contributing
Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License
This project is licensed under the MIT License.
