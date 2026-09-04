# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external tracking, advertising, and analytics scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, and how to safely remove them.

---

## 1. Active Ad Tags & Scripts

### 📍 Script 1: Monetag Tag (Zone 11723860) — *ONLY ACTIVE MONETAG ZONE*
- **Status:** Active
- **Provider / Domain:** `https://llvpn.com/tag.min.js`
- **Zone ID:** `11723860`
- **Placement File:** `src/components/layout/Footer.tsx`
- **Component:** `<Footer />` (inside `<footer>` at bottom of page)
- **Performance Strategy:** Next.js `<Script strategy="lazyOnload" />` (Executes during browser idle time via `requestIdleCallback`; zero blocking on Core Web Vitals, LCP, FCP, or TBT)
- **Original Snippet Provided:**
  ```html
  <script>(function(s){s.dataset.zone='11723860',s.src='https://llvpn.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  ```
- **Implemented Code in Footer.tsx:**
  ```tsx
  {/* === START AD SCRIPT: ZONE 11723860 (llvpn.com) === */}
  {/* Loaded with strategy="lazyOnload" so it executes during idle time without hurting PageSpeed or Core Web Vitals */}
  <Script
    id="ad-tag-11723860"
    src="https://llvpn.com/tag.min.js"
    data-zone="11723860"
    strategy="lazyOnload"
  />
  {/* === END AD SCRIPT: ZONE 11723860 === */}
  ```
- **How to Delete:**
  1. Open `src/components/layout/Footer.tsx`.
  2. Remove the block between `{/* === START AD SCRIPT: ZONE 11723860 (llvpn.com) === */}` and `{/* === END AD SCRIPT: ZONE 11723860 === */}`.
  3. If no other scripts are in Footer, the `import Script from 'next/script';` can optionally be removed.

---

### 📍 Script 2: Grow (Journey by Mediavine) — *KEPT ACTIVE*
- **Status:** Active
- **Provider:** Grow.me (Mediavine)
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (lines 119–161)
- **Performance Strategy:** Deferred & initialized on user interaction (`scroll`, `mousemove`, `touchstart`, `click`, `keydown`).

---

### 📍 Script 3: Google Analytics (GA4)
- **Status:** Active
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

## 2. Removed Monetag Zones

The following Monetag zones were previously present or requested for removal and have been completely removed from the codebase:

| Zone ID | Description | Former Location / Provider | Status |
|---|---|---|---|
| `11682790` | Monetag Tag | `src/app/layout.tsx` (`https://nap5k.com/tag.min.js`) | ❌ Removed |
| `11682819` | Monetag Vignette | `src/app/layout.tsx` (`https://n6wxm.com/vignette.min.js`) | ❌ Removed |
| `11682813` | Monetag Zone | None / Removed | ❌ Removed |
