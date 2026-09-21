/**
 * Adsterra Ad Network Configuration for gtavispot.com
 * Next.js 14 App Router Performance & Core Web Vitals Optimized
 *
 * To disable ALL ads: set ENABLED to false.
 * To disable any individual ad unit: set its enabled property to false.
 */

export interface AdUnitConfig {
  enabled: boolean;
  key?: string;
  width?: number;
  height?: number;
  scriptSrc: string;
  containerId?: string;
}

export interface AdsterraConfig {
  ENABLED: boolean;
  nativeBanner: AdUnitConfig & { containerId: string };
  banner320x50: AdUnitConfig & { key: string; width: number; height: number };
  banner728x90: AdUnitConfig & { key: string; width: number; height: number };
  banner160x600: AdUnitConfig & { key: string; width: number; height: number };
  banner300x250: AdUnitConfig & { key: string; width: number; height: number };
}

export const ADSTERRA_CONFIG: AdsterraConfig = {
  // Global master switch to enable or disable all ads instantly (Decommissioned per user request)
  ENABLED: false,

  // 1. Native Banner (Decommissioned - Saved in SCRIPT_REGISTRY.md)
  nativeBanner: {
    enabled: false,
    containerId: 'container-85c3a3c5c64cf108e706faaca092d6fb',
    scriptSrc: 'https://pl31219384.profitableratecpmnetwork.com/85c3a3c5c64cf108e706faaca092d6fb/invoke.js',
  },

  // 2. Banner 320x50 (Decommissioned - Saved in SCRIPT_REGISTRY.md)
  banner320x50: {
    enabled: false,
    key: '7d644c96493c1214e1b3fc267838e282',
    width: 320,
    height: 50,
    scriptSrc: 'https://www.highrevenueformat.com/7d644c96493c1214e1b3fc267838e282/invoke.js',
  },

  // 3. Banner 728x90 (Decommissioned - Saved in SCRIPT_REGISTRY.md)
  banner728x90: {
    enabled: false,
    key: 'c32991b7b4468685ff6bc33d9a48d42e',
    width: 728,
    height: 90,
    scriptSrc: 'https://www.highrevenueformat.com/c32991b7b4468685ff6bc33d9a48d42e/invoke.js',
  },

  // 4. Banner 160x600 (Decommissioned - Saved in SCRIPT_REGISTRY.md)
  banner160x600: {
    enabled: false,
    key: 'ddbe7561c490ca9cbf23af3dcec668f7',
    width: 160,
    height: 600,
    scriptSrc: 'https://www.highrevenueformat.com/ddbe7561c490ca9cbf23af3dcec668f7/invoke.js',
  },

  // 5. Banner 300x250 (Decommissioned - Saved in SCRIPT_REGISTRY.md)
  banner300x250: {
    enabled: false,
    key: 'd239210586d9a10227d4cfc15f615ab0',
    width: 300,
    height: 250,
    scriptSrc: 'https://www.highrevenueformat.com/d239210586d9a10227d4cfc15f615ab0/invoke.js',
  },
};
