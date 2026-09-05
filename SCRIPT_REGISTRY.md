# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external tracking, advertising, and analytics scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, and how to safely remove them.

---

## 1. Active Ad Tags & Scripts

### 📍 Script 1: Monetag Tag (Zone 11682813)
- **Status:** Active
- **Provider / URL:** `https://5gvci.com/act/files/tag.min.js?z=11682813`
- **Zone ID:** `11682813`
- **Placement File:** `src/components/layout/Footer.tsx`
- **Attributes:** `data-cfasync="false"`, `strategy="lazyOnload"`
- **Original Snippet Provided:**
  ```html
  <script src="https://5gvci.com/act/files/tag.min.js?z=11682813" data-cfasync="false" async></script>
  ```
- **Implemented Code in Footer.tsx:**
  ```tsx
  {/* === START AD SCRIPT: ZONE 11682813 (5gvci.com) === */}
  {/* Loaded with strategy="lazyOnload" so it executes during idle time without hurting PageSpeed or Core Web Vitals */}
  <Script
    id="ad-tag-11682813"
    src="https://5gvci.com/act/files/tag.min.js?z=11682813"
    data-cfasync="false"
    strategy="lazyOnload"
  />
  {/* === END AD SCRIPT: ZONE 11682813 === */}
  ```

---

### 📍 Script 2: Monetag Tag (Zone 11682790)
- **Status:** Active
- **Provider / Domain:** `https://ueuee.com/tag.min.js`
- **Zone ID:** `11682790`
- **Placement File:** `src/components/layout/Footer.tsx`
- **Performance Strategy:** Next.js `<Script strategy="lazyOnload" />` (Executes during browser idle time via `requestIdleCallback`; zero blocking on Core Web Vitals, LCP, FCP, or TBT)
- **Original Snippet Provided:**
  ```html
  <script>(function(s){s.dataset.zone='11682790',s.src='https://ueuee.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  ```
- **Implemented Code in Footer.tsx:**
  ```tsx
  {/* === START AD SCRIPT: ZONE 11682790 (ueuee.com) === */}
  {/* Loaded with strategy="lazyOnload" so it executes during idle time without hurting PageSpeed or Core Web Vitals */}
  <Script
    id="ad-tag-11682790"
    src="https://ueuee.com/tag.min.js"
    data-zone="11682790"
    strategy="lazyOnload"
  />
  {/* === END AD SCRIPT: ZONE 11682790 === */}
  ```

---

### 📍 Script 3: Grow (Journey by Mediavine) — *KEPT ACTIVE*
- **Status:** Active
- **Provider:** Grow.me (Mediavine)
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (lines 119–161)
- **Performance Strategy:** Deferred & initialized on user interaction (`scroll`, `mousemove`, `touchstart`, `click`, `keydown`).

---

### 📍 Script 4: Google Analytics (GA4)
- **Status:** Active
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

## 2. Removed / Decommissioned Monetag Zones

| Zone ID | Description | Former Location / Provider | Status |
|---|---|---|---|
| `11723860` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://llvpn.com/tag.min.js`) | ❌ Deleted per user request |
| `11682819` | Monetag Vignette | `src/app/layout.tsx` (`https://n6wxm.com/vignette.min.js`) | ❌ Removed |
| `11682790` (old) | Monetag Tag (nap5k) | `src/app/layout.tsx` (`https://nap5k.com/tag.min.js`) | ❌ Replaced with ueuee.com in Footer |
