# 🎮 PROJECT BIBLE — GTA Vi Spot (gtavispot.com)
### The Single Source of Truth — Every AI Model MUST Read This First
> **Created:** June 17, 2026 | **Last Updated:** June 17, 2026
> **Stack:** Next.js · Vercel · WebP-Only Images · Fully Responsive
> **Status:** Pre-Development

---

## ⚠️ HOW TO USE THIS FILE

**This file is LAW.** Every AI model, every coding session, every component, every page, every commit MUST follow these rules. If something in this file contradicts your default behavior — this file wins.

Before writing a single line of code, read this entire document. If you skip a section and violate a rule, the work will be rejected and redone.

---

## PART 1 — PROJECT IDENTITY

### 1.1 What This Project Is

- **Site Name:** GTA Vi Spot
- **Domain:** gtavispot.com
- **Type:** GTA 6 fan guide, news, and information website
- **Audience:** GTA fans aged 16–35 — impatient, smart, mobile-first, will leave in 3 seconds if you waste their time
- **Monetization:** Affiliate links (pre-orders, gear), display ads (after traffic)
- **Differentiator:** Fastest-updated, deepest-researched, best-designed GTA 6 resource on the internet

### 1.2 Brand Design Language

> **Design Inspiration:** The GTA VI logo sunset gradient + the official Rockstar GTA VI website (rockstargames.com/VI). Clean, editorial, cinematic — with Vice City tropical warmth.

#### Default Theme: LIGHT (White)

The site loads in **light mode by default**. A toggle icon in the header switches to dark mode. User preference is saved in `localStorage` and respected via `prefers-color-scheme` on first visit.

#### Color Palette — Extracted from GTA VI Logo

The logo uses a stunning sunset gradient: deep violet → hot magenta/pink → warm orange → golden yellow. These are the brand colors:

**Primary Brand Colors (from logo gradient):**

| Name | Hex | Usage |
|------|-----|-------|
| Vice Purple | `#3b1578` | Primary brand — nav accents, active states, CTAs |
| Sunset Magenta | `#d6246e` | Secondary brand — links, highlights, badges |
| Tropical Pink | `#e84590` | Hover states, gradient midpoints |
| Vice Orange | `#f58634` | Accent — warnings, featured tags, call-outs |
| Golden Sunrise | `#f9a825` | Accent — stars, ratings, special highlights |

**Light Theme (Default):**

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#ffffff` | Page background |
| `--bg-secondary` | `#f8f7fc` | Card backgrounds, alternating sections |
| `--bg-tertiary` | `#f0eef5` | Sidebar, code blocks, subtle panels |
| `--text-primary` | `#1a1a2e` | Headings, primary body text |
| `--text-secondary` | `#4a4a68` | Secondary text, descriptions |
| `--text-muted` | `#8888a4` | Captions, timestamps, meta info |
| `--border` | `#e2e0ec` | Card borders, dividers |
| `--border-light` | `#eeecf4` | Subtle separators |
| `--surface-hover` | `#f4f2fa` | Hover backgrounds |
| `--brand-gradient` | `linear-gradient(135deg, #3b1578, #d6246e, #f58634, #f9a825)` | Hero accents, logo backdrop, CTA buttons |

**Dark Theme (Toggle):**

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0c0a14` | Page background |
| `--bg-secondary` | `#141222` | Card backgrounds, panels |
| `--bg-tertiary` | `#1c1932` | Sidebar, code blocks |
| `--text-primary` | `#edecf4` | Headings, body text |
| `--text-secondary` | `#b0aec4` | Secondary text |
| `--text-muted` | `#6e6c88` | Captions, meta |
| `--border` | `#2a2844` | Card borders, dividers |
| `--border-light` | `#1e1c36` | Subtle separators |
| `--surface-hover` | `#1e1c34` | Hover backgrounds |
| `--brand-gradient` | `linear-gradient(135deg, #5b2fa8, #e84590, #f58634, #f9a825)` | Slightly brighter for dark bg |

#### Theme Toggle Implementation

```tsx
// Theme toggle behavior:
// 1. Check localStorage for 'theme' key
// 2. If no key, check prefers-color-scheme media query
// 3. If neither, default to 'light'
// 4. Apply data-theme="light" or data-theme="dark" on <html>
// 5. Toggle icon: ☀️ sun (when dark) / 🌙 moon (when light)
// 6. Save preference to localStorage on toggle
// 7. Use CSS: [data-theme="dark"] { ... } for dark overrides
// 8. NO flash of wrong theme — apply theme in <head> blocking script
```

```css
/* globals.css — CSS custom properties with theme switching */
:root,
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f7fc;
  --bg-tertiary: #f0eef5;
  --text-primary: #1a1a2e;
  --text-secondary: #4a4a68;
  --text-muted: #8888a4;
  --border: #e2e0ec;
  --border-light: #eeecf4;
  --surface-hover: #f4f2fa;
  --brand-purple: #3b1578;
  --brand-magenta: #d6246e;
  --brand-pink: #e84590;
  --brand-orange: #f58634;
  --brand-gold: #f9a825;
  --brand-gradient: linear-gradient(135deg, #3b1578, #d6246e, #f58634, #f9a825);
  --shadow: 0 1px 3px rgba(26, 26, 46, 0.06), 0 4px 12px rgba(26, 26, 46, 0.04);
  --shadow-lg: 0 4px 12px rgba(26, 26, 46, 0.08), 0 12px 32px rgba(26, 26, 46, 0.06);
}

[data-theme="dark"] {
  --bg-primary: #0c0a14;
  --bg-secondary: #141222;
  --bg-tertiary: #1c1932;
  --text-primary: #edecf4;
  --text-secondary: #b0aec4;
  --text-muted: #6e6c88;
  --border: #2a2844;
  --border-light: #1e1c36;
  --surface-hover: #1e1c34;
  --brand-purple: #7c5bbf;
  --brand-magenta: #e84590;
  --brand-pink: #f06aaa;
  --brand-orange: #f58634;
  --brand-gold: #f9a825;
  --brand-gradient: linear-gradient(135deg, #5b2fa8, #e84590, #f58634, #f9a825);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.4), 0 12px 32px rgba(0, 0, 0, 0.3);
}
```

#### Typography

- Headlines: `Bebas Neue` (Google Fonts)
- Sub-headlines / UI Labels: `Barlow Condensed` (weight 400, 600, 700)
- Body Text: `Barlow` (weight 300, 400, 500)
- Minimum body font size: 16px
- Line height: 1.6 for body, 1.0–1.2 for headlines

#### Visual Style

- Subtle glassmorphism accents on cards in light mode (light frosted backgrounds)
- Brand gradient used sparingly — hero sections, CTA buttons, accent lines
- Micro-animations on hover/scroll
- Clean editorial layouts inspired by rockstargames.com/VI — lots of whitespace, cinematic imagery, minimal UI chrome
- Cards use subtle shadows (`--shadow`) not heavy borders
- Logo: GTA 6 Logo available at `/public/images/gta-6-logo.webp` (convert from source PNG)

### 1.3 What This Site Must NEVER Look Like

- ❌ A generic WordPress theme
- ❌ A Bootstrap template with default colors
- ❌ AI-generated — no telltale signs (generic gradients, centered-everything layouts, stock photo vibes)
- ❌ A simple blog with plain white background and no design personality
- ❌ Anything that looks like it was built in a weekend
- ❌ A dark-only gamer site with neon everywhere — the light theme is clean, editorial, premium
- ❌ A site where the dark mode looks like an afterthought

**The design must pass the "would IGN or Kotaku be jealous?" test.**
**Both light and dark themes must feel equally polished and intentional.**

---

## PART 2 — TECH STACK & ARCHITECTURE

### 2.1 Framework & Deployment

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Framework** | Next.js (App Router) | Latest stable version |
| **Language** | TypeScript | Strict mode enabled |
| **Styling** | Vanilla CSS (CSS Modules) | NO Tailwind unless explicitly asked |
| **Hosting** | Vercel | Auto-deploy from main branch |
| **Image Format** | WebP ONLY | All images must be .webp — no PNG, JPG, or GIF in production |
| **Image Component** | `next/image` | Always use — auto WebP, lazy loading, srcSet |
| **Fonts** | Google Fonts via `next/font` | Bebas Neue, Barlow, Barlow Condensed |
| **Icons** | SVG inline or icon library | No icon fonts (performance) |
| **Package Manager** | npm | Lock file committed |

### 2.2 Project Structure (Mandatory)

```
gtavihub/
├── public/
│   ├── images/           # All static images (.webp ONLY)
│   ├── icons/            # SVG icons
│   ├── robots.txt
│   └── sitemap.xml       # Auto-generated
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, meta, analytics)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global CSS + design tokens
│   │   ├── news/
│   │   │   ├── page.tsx        # /news/ hub
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx    # Individual news articles
│   │   │   └── layout.tsx
│   │   ├── guides/
│   │   ├── characters/
│   │   ├── map/
│   │   ├── gear/
│   │   └── about/
│   ├── components/
│   │   ├── layout/       # Header, Footer, Navigation, Breadcrumbs
│   │   ├── ui/           # Buttons, Cards, Tables, Badges, Modals
│   │   ├── seo/          # SchemaMarkup, MetaTags, OpenGraph
│   │   ├── news/         # NewsCard, NewsFeed, BreakingBanner
│   │   └── shared/       # CountdownTimer, SearchBar, FAQ
│   ├── lib/
│   │   ├── constants.ts  # Site-wide constants
│   │   ├── seo.ts        # SEO utility functions
│   │   ├── schema.ts     # JSON-LD schema generators
│   │   └── utils.ts      # Shared helpers
│   ├── data/             # Static data files (keywords, content maps)
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── styles/           # CSS Modules per component
├── next.config.js
├── tsconfig.json
├── package.json
├── vercel.json
└── PROJECT_BIBLE.md      # THIS FILE — always at project root
```

### 2.3 Image Rules — ZERO EXCEPTIONS

1. **Every image served to the browser MUST be WebP format**
2. Source images (JPG, PNG) are converted to WebP during build or manually before commit
3. Always use `next/image` component — never raw `<img>` tags
4. Set explicit `width` and `height` to prevent CLS (Cumulative Layout Shift)
5. Images below the fold: `loading="lazy"` (default in next/image)
6. Hero images: `priority={true}` for LCP optimization
7. Alt text is MANDATORY — descriptive, keyword-relevant, not "image1" or "photo"
8. File naming: `gta-6-release-date-countdown.webp` — NOT `IMG_1234.webp`
9. Maximum image dimensions: 1920px wide for full-width, 800px for inline
10. Use `next/image` `sizes` prop for responsive serving

```tsx
// ✅ CORRECT
<Image
  src="/images/gta-6-release-date-hero.webp"
  alt="GTA 6 release date November 19 2026 countdown timer"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
/>

// ❌ WRONG — Never do this
<img src="/images/photo.jpg" />
<img src="/images/hero.png" alt="" />
```

---

## PART 3 — RESPONSIVENESS — EVERY DEVICE, EVERY TIME

### 3.1 Breakpoint System (Mandatory)

```css
/* Mobile First — always start with mobile styles */

/* Small phones */
/* Default: 0px – 479px */

/* Large phones */
@media (min-width: 480px) { }

/* Tablets */
@media (min-width: 768px) { }

/* Small desktops / Laptops */
@media (min-width: 1024px) { }

/* Large desktops */
@media (min-width: 1280px) { }

/* Ultra-wide */
@media (min-width: 1536px) { }
```

### 3.2 Responsiveness Rules

1. **Mobile-first CSS** — write base styles for mobile, then `min-width` media queries up
2. **No horizontal scrolling** on ANY viewport — ever
3. **Tap targets minimum 48×48px** with adequate spacing on mobile
4. **Text readable without zooming** — minimum 16px base font, 14px absolute minimum for captions
5. **Images scale fluidly** — use `max-width: 100%` or `next/image` fill mode
6. **Navigation collapses** to hamburger menu on mobile (< 768px)
7. **Tables scroll horizontally** if they overflow on mobile — wrap in `overflow-x: auto`
8. **Test on real viewports:** iPhone SE (375px), iPhone 14 (390px), iPad (768px), iPad Pro (1024px), Desktop (1440px)
9. **Max content width: 1300px** — centered with auto margins
10. **Grid layouts** use CSS Grid or Flexbox — no floats, no absolute positioning for layout

### 3.3 Responsive Component Rules

```css
/* Every layout container MUST have this */
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container { padding: 0 24px; }
}

@media (min-width: 1024px) {
  .container { padding: 0 32px; }
}
```

---

## PART 4 — PERFORMANCE & SPEED OPTIMIZATION

### 4.1 Core Web Vitals Targets (Non-Negotiable)

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| **LCP** (Largest Contentful Paint) | < 2.5 seconds | Perceived loading speed |
| **INP** (Interaction to Next Paint) | < 200ms | Responsiveness |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability |
| **PageSpeed Mobile** | 90+ score | Overall mobile performance |
| **PageSpeed Desktop** | 95+ score | Overall desktop performance |

### 4.2 Speed Rules

1. **Fonts:** Load via `next/font/google` — auto-subsetting, no render-blocking
2. **CSS:** Use CSS Modules — tree-shaking built in, no unused styles shipped
3. **JavaScript:** Minimize client-side JS — use Server Components by default
4. **Code Splitting:** Next.js handles this — but verify no massive bundles
5. **No unnecessary polyfills** — target modern browsers only
6. **Lazy load everything below the fold** — images, components, embeds
7. **Minify HTML, CSS, JS** — Next.js production build handles this
8. **Use Vercel Edge Network** — automatic CDN, edge caching
9. **Preload critical assets** — hero image, above-fold fonts
10. **Avoid layout shifts** — set dimensions on all images, embeds, ads

### 4.3 Font Loading Strategy

```tsx
// src/app/layout.tsx
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const barlow = Barlow({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ui',
});
```

### 4.4 What NOT To Do (Performance)

- ❌ Import entire libraries when you need one function
- ❌ Use `"use client"` unless the component truly needs client interactivity
- ❌ Load all images eagerly
- ❌ Use GIFs — use WebP or CSS animations instead
- ❌ Inline massive SVGs — componentize them
- ❌ Add analytics/tracking scripts that block rendering
- ❌ Use `setTimeout` / `setInterval` for animations — use CSS or `requestAnimationFrame`

---

## PART 5 — SEO, AEO & GEO STANDARDS

> **Reference Document:** `OnPage_SEO_AEO_GEO_Checklist_June2026.md`
> Every page MUST comply with these standards. No exceptions.

### 5.1 Every Page Must Have

| Element | Requirement |
|---------|------------|
| **Title Tag** | Unique, 50–60 chars, primary keyword near start, ends with `\| GTA Vi Spot` |
| **Meta Description** | Unique, 120–160 chars, includes keyword, ends with reason to click |
| **H1** | Exactly ONE per page, includes primary keyword, under 60 chars |
| **H2s** | Written as questions or direct answers, include secondary keywords |
| **Canonical URL** | Set on every page via `<link rel="canonical">` |
| **Open Graph** | `og:title`, `og:description`, `og:image` (1200×630px WebP), `og:url`, `og:type` |
| **Twitter Card** | `twitter:card`, `twitter:title`, `twitter:image` |
| **Schema Markup** | JSON-LD in `<head>` — Article, BreadcrumbList, FAQPage minimum |
| **Language** | `<html lang="en">` |
| **Viewport** | `<meta name="viewport" content="width=device-width, initial-scale=1">` |

### 5.2 Schema Markup (JSON-LD) — Required Per Page Type

```tsx
// src/lib/schema.ts — Export generators for each schema type

// Every page: BreadcrumbList
// News articles: NewsArticle + FAQPage + BreadcrumbList
// Guides: Article + FAQPage + HowTo + BreadcrumbList
// Hub pages: WebSite + Organization
// Product pages (pre-order, price): Product + FAQPage
// Trailer pages: VideoObject + NewsArticle + FAQPage
```

### 5.3 SEO Component (Every Page Uses This)

```tsx
// src/components/seo/PageSEO.tsx
// Generates: <title>, meta description, canonical, OG tags, Twitter cards, JSON-LD
// Usage: <PageSEO title="..." description="..." keywords={[]} schema={[]} />
```

### 5.4 URL Structure Rules

- URLs are lowercase, hyphenated, keyword-rich: `/news/gta-6-release-date/`
- No underscores, no uppercase, no special characters
- No stop words unless needed for clarity
- Consistent trailing slash (with) — configured in `next.config.js`
- No dynamic parameters visible in URL (`?id=123`)

### 5.5 Content Freshness

- Every article displays `datePublished` and `dateModified` visibly
- Schema includes both dates
- News articles show "Last Updated: X hours ago" above the fold

### 5.6 AEO (Answer Engine Optimization)

- Every informational page has a **Quick Answer Box** in the first 100 words
- H2s are phrased as questions users actually search
- FAQ sections use `FAQPage` schema markup — minimum 4 questions per page
- Direct answers appear within 40–60 words after the question heading
- Use numbered lists for step-by-step content (AI systems prefer numbered > bullets)

### 5.7 GEO (Generative Engine Optimization)

- Include original data, statistics, unique research wherever possible
- Content must be quotable — clear conclusions, memorable definitions
- Every article has a "Key Takeaways" section
- Author attribution on every article (builds E-E-A-T)
- Avoid hedge language on known facts ("it might be" → "it is")

---

## PART 6 — CONTENT WRITING STANDARDS

> **Reference Document:** `Content Writing Prompt.md`
> Every piece of content on this site follows these rules.

### 6.1 Voice & Tone

- **Write like a senior gaming journalist texting a smart friend**
- Short sentences. Real talk. No corporate speak.
- Contractions always: "you'll" not "you will"
- American English spelling: "favorite" not "favourite"
- Lead with the answer — first sentence answers the question
- Every sentence must add information — if it can be deleted without loss, delete it

### 6.2 Banned Words & Phrases — NEVER USE

```
"In conclusion"               "It is worth noting that"
"Comprehensive guide"         "In this article we will"
"Without further ado"         "It goes without saying"
"Delve into"                  "At the end of the day"
"Game-changing"               "Dive deep"
"Buckle up"                   "Let's explore"
"Exciting"                    "Revolutionary"
"Leverage"                    "Needless to say"
"Furthermore"                 "Moreover"
"In addition to this"
Any sentence starting with "As a"
Any sentence starting with "It is important to"
"stay tuned for more updates"
"we hope this guide helped you"
```

### 6.3 Formatting Rules

- Max 3 sentences per paragraph
- One idea per paragraph
- White space is your friend — never a wall of text
- Bold only the single most important word/phrase per section
- Use tables for comparisons, specs, tier lists
- Use bullet points only for lists of 4+ items

### 6.4 Article Structure Template

```
[H1 — Primary Keyword — Under 60 chars]
[LEDE — 2–3 sentences — answer immediately]
[QUICK ANSWER BOX — 2–4 bullet TL;DR]
[H2 — Question users have #1]
[H2 — Question users have #2]
[... continue until topic fully covered]
[H2 — Frequently Asked Questions (4–6 Q&As with schema)]
[FINAL LINE — one useful next step, not a conclusion]
```

---

## PART 7 — INTERNAL LINKING STANDARDS

> **Reference Document:** `Internal_Linking_Standards_2026.md`

### 7.1 Architecture: Hub → Spoke → Bridge

```
HOMEPAGE
  ├── /news/ (HUB) → 12 spoke pages
  ├── /guides/ (HUB) → spoke pages
  ├── /characters/ (HUB) → spoke pages
  ├── /map/ (HUB) → spoke pages
  └── /gear/ (HUB) → spoke pages
```

### 7.2 Linking Rules

1. Every page links to its parent hub page
2. Every page links to 2–3 sibling pages in the same cluster
3. Hub pages link out to ALL their spoke pages
4. Every important page reachable within **3 clicks from homepage**
5. Anchor text is keyword-rich, descriptive — NEVER "click here" or "read more"
6. Internal links open in **same tab** — no `target="_blank"` for internal links
7. External links open in new tab with `target="_blank" rel="noopener noreferrer"`
8. Use relative URLs for internal links: `/news/gta-6-release-date/` not full domain
9. Max 150 total links per page (including nav + footer)
10. Place at least one high-priority internal link in the first screen of content

### 7.3 Anchor Text Distribution

| Type | % of Total | Example |
|------|-----------|---------|
| Exact Match | 15–20% | "GTA 6 release date" |
| Partial Match | 30–35% | "the confirmed GTA 6 launch date" |
| Semantic/LSI | 20–25% | "when the game drops" |
| Branded | 10–15% | "our GTA Vi Spot release tracker" |
| Descriptive Natural | 10–15% | "this detailed breakdown" |

### 7.4 New Content Linking Protocol

When a new page is published:
1. Add link from the relevant hub page immediately
2. Add links from 2–3 existing high-traffic posts in the same cluster
3. Add a link from the new page back to the hub
4. Update breadcrumb navigation

---

## PART 8 — CONTENT CLUSTER MAP

> **Reference Document:** `cluster-01-news-updates.md`

### Cluster 1 — News & Updates (`/news/`)

| # | URL Slug | Focus Keyword | Monthly Vol |
|---|----------|--------------|-------------|
| 1 | `/news/` | GTA 6 news | 450K–600K |
| 2 | `/news/gta-6-release-date/` | GTA 6 release date | 2M–3.5M |
| 3 | `/news/gta-6-delay/` | GTA 6 delay | 550K–800K |
| 4 | `/news/gta-6-trailer-3/` | GTA 6 trailer 3 | 800K–1.4M |
| 5 | `/news/gta-6-leaks/` | GTA 6 leaks | 700K–1.1M |
| 6 | `/news/gta-6-price/` | GTA 6 price | 400K–650K |
| 7 | `/news/gta-6-pre-order/` | GTA 6 pre-order | 350K–550K |
| 8 | `/news/gta-6-new-features/` | GTA 6 new features | 300K–500K |
| 9 | `/news/gta-6-november-release/` | GTA 6 November release | 180K–280K |
| 10 | `/news/gta-6-pc-release-date/` | GTA 6 PC release date | 550K–850K |
| 11 | `/news/gta-6-cover-art/` | GTA 6 cover art | 120K–200K |
| 12 | `/news/rockstar-news/` | Rockstar Games GTA 6 | 250K–400K |

**Cluster 1 Linking Rules:**
- Every page links to `/news/gta-6-release-date/` (highest authority page)
- Every page links to `/news/` hub
- `/news/gta-6-price/` ↔ `/news/gta-6-pre-order/` cross-link
- `/news/gta-6-trailer-3/` → `/news/gta-6-leaks/`
- `/news/gta-6-pc-release-date/` → `/gear/pc-build/`

### Future Clusters (Planned)

- Cluster 2 — Story & Characters (`/characters/`)
- Cluster 3 — Map & Locations (`/map/`)
- Cluster 4 — Gameplay & Guides (`/guides/`)
- Cluster 5 — GTA Online (`/online/`)
- Cluster 6 — Gear & Hardware (`/gear/`)
- Cluster 7 — Comparisons (`/vs/`)
- Cluster 8 — Media & Trailers (`/media/`)

---

## PART 9 — COMPONENT DESIGN STANDARDS

### 9.1 Reusable Components Required

Every component must be:
- Fully responsive (works on 375px → 2560px)
- Accessible (ARIA labels, keyboard navigation, 4.5:1 contrast ratio)
- Typed with TypeScript interfaces
- Styled with CSS Modules (no inline styles, no global pollution)
- Server Components by default (`"use client"` only when needed)

### 9.2 Core Components to Build

| Component | Location | Notes |
|-----------|----------|-------|
| `Header` | `components/layout/` | Sticky, responsive nav, hamburger on mobile, **theme toggle icon** |
| `Footer` | `components/layout/` | Internal links, legal pages, social |
| `Breadcrumbs` | `components/layout/` | With BreadcrumbList schema |
| `ThemeToggle` | `components/layout/` | ☀️/🌙 icon button, saves to localStorage, no flash |
| `NewsCard` | `components/news/` | Image, title, date, category tag |
| `BreakingBanner` | `components/news/` | Animated top banner for breaking news |
| `CountdownTimer` | `components/shared/` | Live countdown to Nov 19, 2026 |
| `FAQSection` | `components/shared/` | Accordion with FAQPage schema auto-generated |
| `QuickAnswerBox` | `components/shared/` | TL;DR box at top of articles |
| `TableOfContents` | `components/shared/` | Auto-generated from H2s, sticky sidebar on desktop |
| `SchemaMarkup` | `components/seo/` | JSON-LD generator component |
| `PageSEO` | `components/seo/` | Meta tags, OG, Twitter, canonical |

### 9.3 Animation Standards

- Use CSS transitions and transforms — not JavaScript animations
- `transition: all 0.2s ease` for hover states
- `transform: translateY(-2px)` for subtle lift on hover
- No animation should exceed 300ms duration
- Respect `prefers-reduced-motion` media query
- Page transitions: subtle fade-in (opacity 0 → 1, 200ms)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## PART 10 — ACCESSIBILITY STANDARDS

- All images have descriptive `alt` text
- Color contrast meets WCAG 2.1 AA (4.5:1 for normal text, 3:1 for large text)
- All interactive elements accessible via keyboard (Tab, Enter, Escape)
- Form fields have associated `<label>` elements
- ARIA labels on icon-only buttons
- Skip-to-content link as first focusable element
- Focus states visible on all interactive elements
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
- Lighthouse Accessibility score target: 90+

---

## PART 11 — DEPLOYMENT & VERCEL CONFIG

### 11.1 Vercel Settings

```json
// vercel.json
{
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 11.2 Next.js Config

```js
// next.config.js
const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [375, 480, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
      ],
    },
  ],
  poweredByHeader: false, // Remove "X-Powered-By: Next.js"
};

module.exports = nextConfig;
```

### 11.3 Environment & Build

- `NODE_ENV=production` on Vercel
- No `.env` secrets committed to git
- Build must pass with zero errors and zero warnings
- `next lint` must pass before deploy
- `next build` output analyzed for bundle size — no page over 200KB JS

---

## PART 12 — ANTI-AI DETECTION RULES

### The site must NOT look like it was built by AI. Follow these rules:

1. **No generic Hero sections** — custom layouts, asymmetric grids, editorial feel
2. **No "lorem ipsum" or placeholder text** — every word is intentional
3. **No default component libraries** — custom-styled everything
4. **Varied layouts** — not every page uses the same card grid
5. **Editorial photography feel** — cinematic image treatments, not stock photo grids
6. **Intentional whitespace** — not uniform padding everywhere
7. **Micro-interactions** — subtle hover effects, scroll reveals, cursor interactions
8. **Custom 404 page** — GTA-themed, not default Next.js
9. **Custom loading states** — branded spinners/skeletons using brand gradient, not generic
10. **Typography hierarchy** — at least 4 distinct type scales per page
11. **No centered-everything layouts** — use left-aligned text, asymmetric compositions
12. **Dynamic elements** — live countdown, "last updated X ago", real-time feel
13. **Content density varies** — some sections are spacious, some are dense/information-rich
14. **Navigation feels custom** — not a generic top-bar with logo-left, links-right
15. **Theme toggle is polished** — smooth transition between light/dark, no flash of wrong theme
16. **Both themes are premium** — dark mode is NOT just "invert colors" — it's a full redesign with adjusted brand colors

### Search Engine Cloaking Prevention

- No hidden text, no cloaking, no doorway pages
- Same content served to Googlebot and users
- No keyword stuffing — 1–2% density maximum
- No purchased backlinks or PBN links
- robots.txt allows crawling of all public pages
- Sitemap submitted to Google Search Console and Bing Webmaster Tools

---

## PART 13 — GIT & WORKFLOW RULES

1. **Branch naming:** `feature/page-name`, `fix/bug-description`, `content/article-slug`
2. **Commit messages:** Descriptive, present tense — "Add release date countdown component"
3. **No direct commits to `main`** — PR workflow
4. **PR must include:** What changed, why, screenshots for UI changes
5. **Never commit:** `node_modules/`, `.env`, `.next/`, build artifacts

---

## PART 14 — FILE REFERENCE MAP

These files contain the detailed source data for this project:

| File | Purpose | Location |
|------|---------|----------|
| `Content Writing Prompt.md` | Voice, tone, writing rules for all content | `E:\GTA VI\` |
| `Internal_Linking_Standards_2026.md` | Complete internal linking strategy | `E:\GTA VI\` |
| `OnPage_SEO_AEO_GEO_Checklist_June2026.md` | Full SEO, AEO, GEO compliance checklist | `E:\GTA VI\` |
| `cluster-01-news-updates.md` | News cluster: 12 pages, 403 keywords | `E:\GTA VI\` |
| `gtavi-keywords-az.html` | Master keyword database A–Z | `E:\GTA VI\` |
| `PROJECT_BIBLE.md` | THIS FILE — master rules | `E:\GTA VI\` |

### Source Images (Convert to WebP Before Use)

| File | Format | Action Needed |
|------|--------|--------------|
| `GTA 6 Logo.png` | PNG | Convert to WebP |
| `GTA 6 Release Date.png` | PNG | Convert to WebP |
| `Jason_Duval_03/04/05.jpg` | JPG | Convert to WebP |
| `Lucia_Caminos_03.jpg` | JPG | Convert to WebP |
| `Vice_City_01.jpg` | JPG | Convert to WebP |
| `Grassrivers_03.webp` | WebP ✅ | Ready to use |
| `Mount_Kalaga_National_Park_02.webp` | WebP ✅ | Ready to use |
| `Raul_Bautista_01/02.webp` | WebP ✅ | Ready to use |
| `desktop.webp` | WebP ✅ | Ready to use |

---

## PART 15 — AI MODEL INSTRUCTIONS

### When ANY AI model works on this project, it must:

1. **Read this file first** — before writing any code
2. **Follow the tech stack exactly** — Next.js App Router, TypeScript, CSS Modules, Vercel
3. **Use WebP for all images** — convert any non-WebP before committing
4. **Make every component responsive** — test against all breakpoints listed in Part 3
5. **Include SEO metadata** — every page gets PageSEO component with full meta tags
6. **Include schema markup** — JSON-LD appropriate for the page type
7. **Follow content writing rules** — no banned phrases, lead with answers, max 3 sentences per paragraph
8. **Follow internal linking rules** — hub→spoke architecture, descriptive anchors
9. **Optimize for speed** — Server Components by default, lazy load below fold, WebP images
10. **Make it look premium** — not AI-generated, not generic, not basic
11. **Respect accessibility** — WCAG 2.1 AA, keyboard nav, semantic HTML
12. **Default to light theme** — dark mode via toggle only, saved in localStorage
13. **Use brand colors from the logo** — Vice Purple, Sunset Magenta, Vice Orange, Golden Sunrise
14. **Never use Tailwind** unless explicitly asked
15. **Never use raw `<img>` tags** — always `next/image`
16. **Never commit broken builds** — `next build` must pass clean

### Priority Order for Every Task

```
1. Correctness (it works)
2. Performance (it's fast)
3. SEO compliance (it ranks)
4. Responsiveness (it fits every screen)
5. Design quality (it looks premium)
6. Accessibility (everyone can use it)
7. Code quality (it's maintainable)
```

---

> **This document is the single source of truth for the GTA Vi Spot project.**
> **Any AI model that does not follow these rules is producing non-compliant work.**
> **When in doubt, re-read this file.**

---

*PROJECT_BIBLE.md — v1.1 — June 17, 2026*
*gtavispot.com — Built with Next.js · Deployed on Vercel · WebP-Only · Light Default + Dark Toggle · Every Device*
