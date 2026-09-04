# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external tracking, advertising, and analytics scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, and how to safely remove them.

---

## 1. Active Ad Tags & Scripts

### 📍 Script 1: Monetag Tag (Zone 11723860) — *Added per User Request*
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

### 📍 Script 2: Monetag Tag (Zone 11682790)
- **Status:** Active
- **Provider / Domain:** `https://nap5k.com/tag.min.js`
- **Zone ID:** `11682790`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="lazyOnload" />`

---

### 📍 Script 3: Monetag Vignette (Zone 11682819)
- **Status:** Active
- **Provider / Domain:** `https://n6wxm.com/vignette.min.js`
- **Zone ID:** `11682819`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="lazyOnload" />`

---

### 📍 Script 4: Google Analytics (GA4)
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

### 📍 Script 5: Grow.me Faves
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (User interaction-triggered initialization)
