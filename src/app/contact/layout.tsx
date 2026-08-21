import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the GTA Vi Spot team. Contact Qamar Farooq, Marcus Vance, and our editorial staff for press inquiries, feedback, corrections, or verified GTA 6 tips.',
  alternates: {
    canonical: 'https://gtavispot.com/contact/',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
