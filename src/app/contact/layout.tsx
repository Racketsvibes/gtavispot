import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | GTA Vi Spot',
  description: 'Get in touch with GTA Vi Spot. Contact our editorial team for press inquiries, feedback, corrections, or questions about our GTA 6 coverage.',
  alternates: {
    canonical: 'https://gtavispot.com/contact/',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
