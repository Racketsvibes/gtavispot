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

export const metadata: Metadata = {
  title: {
    default: 'GTA Vi Spot — GTA 6 News, Guides, Map & Everything Vice City',
    template: '%s | GTA Vi Spot',
  },
  description:
    'Your ultimate GTA 6 resource: latest news, interactive Leonida map, character guides, cheats, and launch details for the November 19, 2026 release.',
  icons: {
    icon: '/icon.png',
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
  authors: [{ name: 'GTA Vi Spot', url: 'https://gtavispot.com' }],
  creator: 'GTA Vi Spot',
  publisher: 'GTA Vi Spot',
  metadataBase: new URL('https://gtavispot.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gtavispot.com',
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
      </head>
      <body>
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
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
