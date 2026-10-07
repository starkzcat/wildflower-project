# Wildflower — Sustainable Modern Millinery

[![Live Demo](https://img.shields.io/badge/Live%20Demo-mywildflower.vercel.app-4d5940?style=for-the-badge&logo=vercel)](https://mywildflower.vercel.app/)
[![Built with SvelteKit](https://img.shields.io/badge/SvelteKit-5.x%20%7C%20Runes-FF3E00?style=for-the-badge&logo=svelte)](https://svelte.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Runtime Bun](https://img.shields.io/badge/Runtime-Bun-fbf0df?style=for-the-badge&logo=bun)](https://bun.sh/)

> *"Modern silhouettes, blocked with ancestral patience."*

**Wildflower** is an editorial web application crafted for a sustainable millinery atelier. Rejecting fast-fashion automated manufacturing, Wildflower hand-shapes headwear over heirloom walnut molds using 100% regenerative, zero-plastic fibers. To eliminate excessive shipping emissions and preserve tactile in-person fitting culture, Wildflower operates on a browse-only digital catalogue model directing patrons to certified independent partner boutiques worldwide.

---

## 🌿 Live Application

Explore the live staging site: **[https://mywildflower.vercel.app/](https://mywildflower.vercel.app/)**

---

## ✨ Key Features & Experiences

### 1. Story & Home (`/`)
* **Hero Editorial Presentation:** Distinctive split-grid narrative with dynamic collection trust metrics (*100% Zero-Plastic Fibers*, *48 Hrs Handcraft*, *14 Partner Boutiques*).
* **Our Guiding Conviction:** Deep-dive value cards highlighting *Regenerative Sourcing*, *Heirloom Wooden Blocks*, and *Slow Boutique Distribution*.
* **Curated Lookbook Preview:** Immediate access to explore seasonal hat silhouettes.
* **Meet the Makers:** Profiles of the artisans behind the blocks (Clara Vance, Marcus Reed, and Elena Ortiz).
* **Fitting Invitation Banner:** Call-to-action inviting patrons to experience the texture of slow millinery in person.

### 2. Digital Catalogue (`/shop`)
* **Browse-Only Ethos:** Designed to highlight craftsmanship and specifications rather than anonymous one-click checkouts.
* **Interactive Category Filtering:** Smooth, mobile-optimized filter pills (*All Styles*, *Merino & Felt*, *Handwoven Straw*, *Heritage Caps*) with responsive horizontal snap-scrolling.
* **Available In Store Badges:** Real-time indicator on every product card linking directly to boutique stockist availability.
* **Technical Hat Modal Popover:** Deep-dive modal inspecting crown height, brim width, fiber grade, curing duration, origin story, and copyable reference specs.

### 3. The Craft & Ethos (`/about`)
* **The Sculptor's Wooden Block:** Photo-documentary on cold-steam hood shaping over mid-century walnut molds.
* **Closed-Loop Botanical Pigments:** Transparent sourcing of walnut husks, iron water, and compostable vegetable-tanned sweatbands.
* **Atelier Milestones Timeline:** Interactive chronological journey from salvaged Brooklyn molds (2022) to carbon-negative regenerative certification (2026).

### 4. Boutique Store Locator (`/locator`)
* **Global Stockist Directory:** Partner ateliers across New York (SoHo), Paris (Le Marais), London (Mayfair), Tokyo (Daikanyama), and Los Angeles (Abbot Kinney).
* **Instant Filter & Search:** Real-time search query filtering by city, neighborhood, street, or boutique name.
* **Boutique Experience Guide:** Details on calibrated cranium sizing, on-the-spot steam custom reshaping, and upcycled band personalization.

### 5. Privacy & Data Ethics (`/privacy`)
* **Non-Commercial Tracking Manifesto:** Zero invasive ad pixels, trackers, or data broker integrations.
* Minimal telemetry and GDPR/CCPA consumer rights compliance.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** [SvelteKit](https://kit.svelte.dev/) with **Svelte 5 Runes** (`$state`, `$derived`, `$props`) for fine-grained, boilerplate-free reactivity.
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) using `@theme` color tokens (`brand-charcoal`, `brand-canvas`, `brand-olive`, `brand-slate`, `brand-stone`, `brand-chalk`) and custom utilities.
* **Typography:** [Google Fonts](https://fonts.google.com/) — *Cormorant Garamond* (Editorial Serif) & *Plus Jakarta Sans* (Modern Clean Sans).
* **Package Manager & Tooling:** [Bun](https://bun.sh/) & [Vite](https://vitejs.dev/).
* **Deployment Adapter:** [`@sveltejs/adapter-vercel`](https://svelte.dev/docs/kit/adapter-vercel) for serverless edge and static pre-rendering.

---

## 📐 Software Engineering Principles

* **SOLID Design:**
  * **Single Responsibility (SRP):** Isolated domain interfaces, static data stores, UI components, and reactive controllers.
  * **Open/Closed (OCP):** Modular card and filter interfaces extensible without refactoring core rendering engines.
  * **Liskov Substitution (LSP):** Standardized prop contracts across components.
  * **Interface Segregation (ISP):** Fine-grained TypeScript contracts (`Hat`, `Store`, `TeamMember`, `Milestone`).
  * **Dependency Inversion (DIP):** UI components consume reactive state singletons (`toast`, `hatModal`) rather than directly querying or mutating raw DOM elements.
* **KISS (Keep It Simple, Stupid):** Native Svelte 5 reactive primitives instead of bulky state management libraries.
* **DRY (Don't Repeat Yourself):** Reusable layout chrome, product cards, store cards, section headers, and shared design system tokens.
* **YAGNI (You Aren't Gonna Need It):** Faithful implementation of the bespoke boutique curation model without premature e-commerce transaction bloat.
* **Atomic Commits Principle:** Incremental, self-contained git history where every checkpoint builds, type-checks, and functions cleanly.

---

## 📂 Project Structure

```text
src/
├── app.html                    # HTML shell (Google Fonts, FontAwesome, metadata)
├── routes/                     # SvelteKit file-based routing
│   ├── +layout.svelte          # Global chrome (AnnouncementBar, Header, Footer, Toast, Modal)
│   ├── layout.css              # Tailwind v4 theme tokens and custom utilities
│   ├── +page.svelte            # Route "/" (Story & Home)
│   ├── shop/+page.svelte       # Route "/shop" (Digital Catalogue)
│   ├── about/+page.svelte      # Route "/about" (The Craft & Ethos)
│   ├── locator/+page.svelte    # Route "/locator" (Boutique Store Locator)
│   └── privacy/+page.svelte    # Route "/privacy" (Privacy & Data Ethics)
└── lib/                        # Shared domain logic and components
    ├── index.ts                # Public library exports (#lib)
    ├── types/                  # TypeScript domain contracts
    │   ├── catalogue.ts        # Hat and category models
    │   ├── store.ts            # Store stockist model
    │   ├── team.ts             # Artisan team model
    │   └── milestone.ts        # Atelier milestone model
    ├── data/                   # Content repositories
    │   ├── catalogue.ts        # Hat specifications, fibers, and dimensions
    │   ├── stores.ts           # Global boutique partner directory
    │   ├── team.ts             # Maker biographies and quotes
    │   └── milestones.ts       # Historical milestones
    ├── state/                  # Reactive Svelte 5 state managers
    │   ├── toast.svelte.ts     # Global notification toast controller
    │   └── modal.svelte.ts     # Product detail inspection controller
    └── components/             # Reusable UI components
        ├── layout/             # AnnouncementBar, Header, Footer
        ├── catalogue/          # ProductCard, ProductModal
        ├── locator/            # StoreCard
        ├── team/               # TeamCard
        └── ui/                 # SectionHeader, Toast
```

---

## 🚀 Getting Started Locally

### Prerequisites
* [Bun](https://bun.sh/) (version 1.0+)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone git@github.com:starkzcat/wildflower-project.git
   cd wildflower-project
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the local development server:**
   ```bash
   bun run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Run type checks & diagnostics:**
   ```bash
   bun run check
   ```

5. **Build for production:**
   ```bash
   bun run build
   ```

---

## 📜 License

Created with reverence for slow craftsmanship. © 2026 Wildflower Millinery Co. All rights reserved.
