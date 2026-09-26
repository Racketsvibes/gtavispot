import type { Metadata } from 'next';
import Script from 'next/script';
import { Bebas_Neue, Barlow, Barlow_Condensed } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
});

const barlow = Barlow({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const barlowCondensed = Barlow_Condensed({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ui',
});

export const metadata: Metadata = {
  title: 'GTA Vi Spot — GTA 6 News, Guides, Map & Everything Vice City',
  description:
    'Your ultimate GTA 6 resource: latest news, interactive Leonida map, character guides, cheats, and launch details for the November 19, 2026 release.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
  keywords: [
    'GTA 6',
    'GTA VI',
    'Grand Theft Auto 6',
    'GTA 6 news',
    'GTA 6 release date',
    'GTA 6 map',
    'GTA 6 characters',
    'Vice City',
  ],
  authors: [{ name: 'GTA Vi Spot', url: 'https://www.gtavispot.com' }],
  creator: 'GTA Vi Spot',
  publisher: 'GTA Vi Spot',
  metadataBase: new URL('https://www.gtavispot.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.gtavispot.com',
    siteName: 'GTA Vi Spot',
    title: 'GTA Vi Spot — GTA 6 News, Guides, Map & Everything Vice City',
    description:
      'Your ultimate GTA 6 resource — latest news, interactive map, character guides, cheat codes, and everything confirmed for the November 19, 2026 launch.',
    images: [
      {
        url: '/images/og-default.webp',
        width: 1200,
        height: 630,
        alt: 'GTA Vi Spot — GTA 6 News and Guides',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA Vi Spot — GTA 6 News, Guides & Everything Vice City',
    description:
      'Your ultimate GTA 6 resource — latest news, guides, map, and everything confirmed for November 2026.',
    images: ['/images/og-default.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        {/* Core Web Vitals & Lighthouse Best Practices: Protect bfcache & suppress deprecated unload warnings */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (typeof window !== 'undefined' && window.EventTarget) {
                    var origAdd = EventTarget.prototype.addEventListener;
                    EventTarget.prototype.addEventListener = function(type, listener, options) {
                      if (type === 'unload') {
                        return origAdd.call(this, 'pagehide', listener, options);
                      }
                      return origAdd.apply(this, arguments);
                    };
                    try {
                      Object.defineProperty(window, 'onunload', {
                        get: function() { return window.onpagehide; },
                        set: function(fn) { window.onpagehide = fn; },
                        configurable: true,
                        enumerable: true,
                      });
                    } catch (_) {}
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        {/* Grow by Mediavine - Deferred for 100% Core Web Vitals */}
        <script
          data-grow-initializer=""
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (!window.growMe) {
                  window.growMe = function(e) { window.growMe._.push(e); };
                  window.growMe._ = [];
                }
                var initialized = false;
                function initGrow() {
                  if (initialized) return;
                  initialized = true;
                  ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(function(evt) {
                    window.removeEventListener(evt, initGrow);
                  });
                  var e = document.createElement("script");
                  e.type = "text/javascript";
                  e.src = "https://faves.grow.me/main.js";
                  e.defer = true;
                  e.setAttribute("data-grow-faves-site-id", "U2l0ZTo4OGNjNWJhOC02NDZlLTQxMzYtYWIzYS01YzIwMTk0ZTcyMWQ=");
                  var t = document.getElementsByTagName("script")[0];
                  if (t && t.parentNode) {
                    t.parentNode.insertBefore(e, t);
                  } else {
                    document.head.appendChild(e);
                  }
                }
                ['scroll', 'mousemove', 'touchstart', 'click', 'keydown'].forEach(function(evt) {
                  window.addEventListener(evt, initGrow, { passive: true });
                });
              })();
            `,
          }}
        />
      </head>
      <body>
        {/*
          Auto Ads only: the adsbygoogle.js loader with the client ID is all that's
          required. Auto Ads placement is controlled by the AdSense dashboard toggle
          (Ads → By site → Auto ads), NOT by a page-level push({}). A manual push({})
          here is the legacy page-level snippet — unnecessary for Auto Ads and a source
          of "already have ads" TagErrors if manual <ins> units are added later.
        */}
        <Script
          id="adsbygoogle-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7134755750458767"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LYQ8CDZET1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LYQ8CDZET1');
          `}
        </Script>
        {/* OneSignal Web Push SDK - Loaded lazily to preserve 100% Core Web Vitals */}
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="lazyOnload"
        />
        <Script id="onesignal-init" strategy="lazyOnload">
          {`
            window.OneSignalDeferred = window.OneSignalDeferred || [];
            OneSignalDeferred.push(async function(OneSignal) {
              await OneSignal.init({
                appId: "2eab3fe3-4ad2-45fb-846b-2722d53e657d",
                safari_web_id: "web.onesignal.auto.668b47bc-14aa-4b15-bbce-a605ba29fca6",
                notifyButton: {
                  enable: true,
                },
              });
            });
          `}
        </Script>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
