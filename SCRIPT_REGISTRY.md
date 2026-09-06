# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external tracking, advertising, and analytics scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, and how to safely remove them.

---

## 1. Active Scripts

### 📍 Script 1: Grow (Journey by Mediavine) — *ACTIVE*
- **Status:** Active
- **Provider:** Grow.me (Mediavine)
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (lines 119–161)
- **Performance Strategy:** Deferred & initialized on user interaction (`scroll`, `mousemove`, `touchstart`, `click`, `keydown`).

---

### 📍 Script 2: Google Analytics (GA4) — *ACTIVE*
- **Status:** Active
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

## 2. Removed / Decommissioned Monetag Zones

All Monetag ad zones have been completely removed from the codebase:

| Zone ID | Description | Former Location / Provider | Status |
|---|---|---|---|
| `11682813` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://5gvci.com/act/files/tag.min.js?z=11682813`) | ❌ Removed per user request |
| `11682790` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://ueuee.com/tag.min.js`) | ❌ Removed per user request |
| `11723860` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://llvpn.com/tag.min.js`) | ❌ Removed per user request |
| `11682819` | Monetag Vignette | `src/app/layout.tsx` (`https://n6wxm.com/vignette.min.js`) | ❌ Removed per user request |
