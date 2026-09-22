# 📜 Third-Party Scripts & Ad Tags Registry

This file tracks all external advertising, analytics, and monetization scripts installed across the **GTA Vi Spot** codebase, their exact locations, performance loading strategies, configuration memories, and how to safely manage or remove them.

---

## 1. Active Scripts & Ad Units

### 📍 1. Google AdSense — Global Account Script
- **Status:** Active
- **Client ID:** `ca-pub-7134755750458767`
- **Script URL:** `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134755750458767`
- **Placement File:** `src/app/layout.tsx` (inside `<head>`)
- **Performance Strategy:** Native asynchronous execution (`async`), unblocking HTML parsing and preserving 100% Core Web Vitals while fully satisfying Google crawler verification.
- **Tag:**
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134755750458767"
       crossorigin="anonymous"></script>
  ```

---

### 📍 2. Grow (Journey by Mediavine)
- **Status:** Active (Untouched)
- **Provider:** Grow.me (Mediavine)
- **Site ID:** `U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=`
- **Placement File:** `src/app/layout.tsx` (lines 118–160)
- **Performance Strategy:** Deferred & initialized on user interaction (`scroll`, `mousemove`, `touchstart`, `click`, `keydown`).

---

### 📍 3. Google Analytics (GA4)
- **Status:** Active
- **Measurement ID:** `G-LYQ8CDZET1`
- **Placement File:** `src/app/layout.tsx`
- **Performance Strategy:** `<Script strategy="afterInteractive" />`

---

### 📍 4. Authorized Digital Sellers (`ads.txt`)
- **Status:** Active & Intact
- **File Locations:** `public/ads.txt` & `src/app/ads.txt/route.ts`
- **Content:**
  ```
  google.com, pub-7134755750458767, DIRECT, f08c47fec0942fa0
  ```

---

## 2. Saved Memory: Google AdSense Scripts & Custom Ads Configuration (Decommissioned)

All Google AdSense scripts and custom ad units were decommissioned and removed from live rendering per user request on September 22, 2026. The full original configuration, script tags, and 38-page mapping are preserved below for instant future restoration if required:

- **Publisher / Client ID:** `ca-pub-7134755750458767`
- **Custom Banner Slot ID:** `8152708714`
- **Switchboard File:** `src/config/adsense.ts` (currently `ENABLED: false`)
- **Global Head Script (Former Placement: `src/app/layout.tsx`):**
  ```html
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134755750458767"
       crossorigin="anonymous"></script>
  ```
- **Custom Banner Display Ad Unit:**
  ```html
  <!-- Banner Ads 1 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-7134755750458767"
       data-ad-slot="8152708714"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
  ```
- **Components:** `src/components/ads/AdSenseBanner.tsx` and `src/components/ads/AdSensePostHeaderAd.tsx` (dormant while `ENABLED: false`).
- **Target 38 Traffic Pages Mapping:**
  1. `voice-actors` (/story/voice-actors/)
  2. `gta-6-system-requirements` (/tech/gta-6-system-requirements/)
  3. `gta-6-strip-club-leak` (/news/gta-6-strip-club-leak/)
  4. `interiors` (/map/interiors/)
  5. `ending` (/story/ending/)
  6. `gta-6-characters` (/story/gta-6-characters/)
  7. `gta-6-collectors-edition` (/news/gta-6-collectors-edition/)
  8. `missions` (/story/missions/)
  9. `gta-6-physical-copy` (/news/gta-6-physical-copy/)
  10. `home` (/)
  11. `size` / `how-big-will-gta-6-be` (/map/size/, /tech/how-big-will-gta-6-be/)
  12. `walkthrough` (/story/walkthrough/)
  13. `gta-6-pc-requirements` (/tech/gta-6-pc-requirements/)
  14. `gta-6-cars` (/vehicles/gta-6-cars/)
  15. `gta-6-delay` (/news/gta-6-delay/)
  16. `gta-6-pc-release-date` (/news/gta-6-pc-release-date/)
  17. `lucia` (/story/lucia/)
  18. `jason-and-lucia` (/story/jason-and-lucia/)
  19. `story-hub` (/story/)
  20. `gta-6-raul-bautista` (/story/gta-6-raul-bautista/)
  21. `jason` (/story/jason/)
  22. `mods-hub` (/mods/)
  23. `lucia-backstory` (/story/lucia-backstory/)
  24. `gta-6-bikes` (/vehicles/gta-6-bikes/)
  25. `how-long-to-beat` (/story/how-long-to-beat/)
  26. `weapons-hub` (/weapons/)
  27. `dual-protagonists` (/story/dual-protagonists/)
  28. `gta-6-release-date` (/news/gta-6-release-date/)
  29. `gta-6-artworks` (/news/gta-6-artworks/)
  30. `gta-6-graphics` (/tech/gta-6-graphics/)
  31. `gta-6-vs-gta-5` (/compare/gta-6-vs-gta-5/)
  32. `ps5-vs-xbox-series-x` (/compare/ps5-vs-xbox-series-x/)
  33. `side-missions` (/story/side-missions/)
  34. `vehicles-hub` (/vehicles/)
  35. `easter-eggs` (/map/easter-eggs/)
  36. `underwater` (/map/underwater/)
  37. `gta-6-timeline` (/gta-6-timeline/)
  38. `gta-6-leaks-escalation` (/news/gta-6-leaks-escalation/)

---

## 3. Saved Memory: Adsterra Ads Configuration (Decommissioned)

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

## 4. Removed Monetag Zones (Archive)

| Zone ID | Description | Former Location / Provider | Status |
|---|---|---|---|
| `11682813` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://5gvci.com/act/files/tag.min.js?z=11682813`) | ❌ Removed |
| `11682790` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://ueuee.com/tag.min.js`) | ❌ Removed |
| `11723860` | Monetag Tag | `src/components/layout/Footer.tsx` (`https://llvpn.com/tag.min.js`) | ❌ Removed |
| `11682819` | Monetag Vignette | `src/app/layout.tsx` (`https://n6wxm.com/vignette.min.js`) | ❌ Removed |
