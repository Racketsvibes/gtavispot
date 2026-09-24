/**
 * Monetag Ad Network Configuration
 * Zone ID: 11740855 (728x90 Common Banner)
 * Temporary monetization integration — easily toggled or removed.
 */

export const MONETAG_CONFIG = {
  // Master Switch: Set to false to instantly deactivate all Monetag ads site-wide
  ENABLED: true,

  // Ad Unit Settings
  zoneId: '11740855',
  scriptSrc: 'https://aqle3.com/btag.min.js',
  size: '728x90',
  category: 'common',
  id: 'dl-banner-728x90',

  // Placement Toggles
  postHeader: true,    // After Post Header
  inPostCount: 2,      // 1 or 2 Times in Article Body
};
