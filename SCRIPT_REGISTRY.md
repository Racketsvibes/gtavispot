# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external advertising, analytics, and monetization scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, configuration memories, and how to safely manage or remove them.

---

## 1. Active Scripts & Ad Units

### 📍 1. Google AdSense — Global Account Script
- **Status:** Active
- **Client ID:** `ca-pub-7134755750458767`
- **Script URL:** `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134755750458767`
- **Placement File:** `src/app/layout.tsx` (before `</head>` / inside `<body>`)
- **Performance Strategy:** Next.js `<Script strategy="lazyOnload" />`
  - Loads strictly during browser idle time (`requestIdleCallback`) after full initial page load and React hydration.
  - Zero main-thread blocking, preserving 100% Core Web Vitals (LCP, FCP, TBT).

---

### 📍 2. Google AdSense — Custom Display Banner (Post-Header Placement)
- **Status:** Active
- **Client ID:** `ca-pub-7134755750458767`
- **Slot ID:** `8152708714`
- **Component File:** `src/components/ads/AdSenseBanner.tsx` & `src/components/ads/AdSensePostHeaderAd.tsx`
- **Configuration Switchboard:** `src/config/adsense.ts`
- **Placement Position:** Directly after the `<header>` (Post Header / Share Buttons divider) on the **38 Most Traffic Pages**.
- **Code Format:**
  ```html
  <!-- Banner Ads 1 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-7134755750458767"
       data-ad-slot="8152708714"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  ```
- **Performance & Stability Protections:**
  - Standard React client component (`'use client'`) consuming **0 server resources**.
  - `minHeight: 90px` container styling to eliminate Cumulative Layout Shift (CLS).
  - Hydration safety & Fast Refresh protection: `isPushedRef` guards against duplicate `.push({})` errors.

#### 🎯 Active on the 38 Most Traffic Pages (per GA Report):
1. **GTA 6 Voice Actors: Complete Cast & Characters 2026** (`/story/voice-actors/`)
2. **GTA 6 System Requirements: PS5 & Xbox Hardware Specs** (`/tech/gta-6-system-requirements/`)
3. **GTA 6 Strip Club Leak: Cyberleek Releases Clip 7 in Crypto Grift** (`/news/gta-6-strip-club-leak/`)
4. **GTA 6 Interiors: All 700+ Enterable Buildings Guide** (`/map/interiors/`)
5. **GTA 6 Ending Explained: All 3 Endings & Secret End 2026** (`/story/ending/`)
6. **GTA 6 Characters: Protagonists, Cast & Real Life Rumors** (`/story/gta-6-characters/`)
7. **GTA 6 Collectors Edition: Price & Details** (`/news/gta-6-collectors-edition/`)
8. **GTA 6 All Missions List: Every Story Mission in Order** (`/story/missions/`)
9. **GTA 6 Physical Copy: Disc Release & Pre-Order Details** (`/news/gta-6-physical-copy/`)
10. **GTA Vi Spot: GTA 6 News, Guides & Interactive Map** (`/` Homepage)
11. **GTA 6 Map Size: How Big Is It vs GTA 5, RDR2 & More** (`/map/size/` & `/tech/how-big-will-gta-6-be/`)
12. **GTA 6 Walkthrough: Story Mode Guide & All Missions** (`/story/walkthrough/`)
13. **GTA 6 PC Requirements: Specs, Hardware & RAM Guide** (`/tech/gta-6-pc-requirements/`)
14. **GTA 6 Cars List: Real-Life Vehicles & Brands Guide** (`/vehicles/gta-6-cars/`)
15. **GTA 6 Delay History: How Many Times Was It Delayed?** (`/news/gta-6-delay/`)
16. **GTA 6 PC Release Date: When Is It Coming to PC?** (`/news/gta-6-pc-release-date/`)
17. **GTA 6 Lucia Guide: Character, Backstory & Abilities** (`/story/lucia/`)
18. **GTA 6 Jason & Lucia: Relationship, Dynamic & Theme Guide** (`/story/jason-and-lucia/`)
19. **GTA 6 Story & Characters — Full Overview Guide** (`/story/`)
20. **GTA 6 Raul Bautista Guide: Heists, Cast & Real Leaks** (`/story/gta-6-raul-bautista/`)
21. **GTA 6 Jason Guide: Character, Backstory & Abilities** (`/story/jason/`)
22. **GTA 6 Mods: Expected Release, Leaks & Custom Tools** (`/mods/`)
23. **GTA 6 Lucia Backstory: Liberty City, Origin & Full Lore** (`/story/lucia-backstory/`)
24. **GTA 6 Bikes List: Confirmed Motorcycles & Bicycles** (`/vehicles/gta-6-bikes/`)
25. **GTA 6 How Long to Beat: Story & 100% Playtimes (2026)** (`/story/how-long-to-beat/`)
26. **GTA 6 Weapons List: All Confirmed Guns** (`/weapons/`)
27. **GTA 6 Dual Protagonists: Switching System Guide** (`/story/dual-protagonists/`)
28. **GTA 6 Release Date: November 19, 2026 Confirmed** (`/news/gta-6-release-date/`)
29. **GTA 6 Artworks: Official 4K Wallpapers & HD Gallery** (`/news/gta-6-artworks/`)
30. **GTA 6 Graphics: Specs, Requirements & Visual Leaks** (`/tech/gta-6-graphics/`)
31. **GTA 6 vs GTA 5: Full Comparison & Key Differences** (`/compare/gta-6-vs-gta-5/`)
32. **PS5 vs Xbox Series x — Which to Buy For GTA 6 Specs** (`/compare/ps5-vs-xbox-series-x/`)
33. **GTA 6 Side Missions: All Stranger Quests & Rewards 2026** (`/story/side-missions/`)
34. **GTA 6 Vehicles: Confirmed Cars, Bikes, Boats & Planes** (`/vehicles/`)
35. **GTA 6 Easter Eggs: Every Secret & Reference Found** (`/map/easter-eggs/`)
36. **GTA 6 Underwater: Secrets, Sharks, Sunken Ships & Guide** (`/map/underwater/`)
37. **GTA 6 Timeline: Complete Development & Trailer History** (`/gta-6-timeline/`)
38. **GTA 6 Leaks Get Higher Quality: Cyberleeks Defies Subpoenas** (`/news/gta-6-leaks-escalation/`)

---

### 📍 3. Grow (Journey by Mediavine)
- **Status:** Active (Untouched)
- **Provider:** Grow.me (Mediavine)
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (lines 119–161)
- **Performance Strategy:** Deferred & initialized on user interaction (`scroll`, `mousemove`, `touchstart`, `click`, `keydown`).

---

### 📍 4. Google Analytics (GA4)
- **Status:** Active
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

## 2. Saved Memory: Adsterra Ads Configuration (Decommissioned)

All Adsterra ads were deactivated and removed from live rendering per user request on September 21, 2026. The full original configuration is preserved below for instant future restoration if required:

- **Switchboard File:** `src/config/adsterra.ts` (currently `ENABLED: false`)
- **Ad Units Data:**
  - **Native Banner:**
    - Container ID: `container-85c3a3c5c64cf108e706faaca092d6fb`
    - Script: `https://pl31219384.profitableratecpmnetwork.com/85c3a3c5c64cf108e706faaca092d6fb/invoke.js`
  - **Mobile Banner (320x50):**
    - Key: `7d644c96493c1214e1b3fc267838e282`
    - Script: `https://www.highrevenueformat.com/7d644c96493c1214e1b3fc267838e282/invoke.js`
  - **Desktop Leaderboard (728x90):**
    - Key: `c32991b7b4468685ff6bc33d9a48d42e`
    - Script: `https://www.highrevenueformat.com/c32991b7b4468685ff6bc33d9a48d42e/invoke.js`
  - **Side Rail Skyscrapers (160x600):**
    - Key: `ddbe7561c490ca9cbf23af3dcec668f7`
    - Script: `https://www.highrevenueformat.com/ddbe7561c490ca9cbf23af3dcec668f7/invoke.js`
  - **In-Content Banner (300x250):**
    - Key: `d239210586d9a10227d4cfc15f615ab0`
    - Script: `https://www.highrevenueformat.com/d239210586d9a10227d4cfc15f615ab0/invoke.js`

---

## 3. Removed Monetag Zones (Archive)

| Zone ID | Description | Former Location / Provider | Status |
|---|---|---|---|
| `11682813` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://5gvci.com/act/files/tag.min.js?z=11682813`) | ❌ Removed |
| `11682790` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://ueuee.com/tag.min.js`) | ❌ Removed |
| `11723860` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://llvpn.com/tag.min.js`) | ❌ Removed |
| `11682819` | Monetag Vignette | `src/app/layout.tsx` (`https://n6wxm.com/vignette.min.js`) | ❌ Removed |
