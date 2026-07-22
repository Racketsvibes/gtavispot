import React, { Suspense } from 'react';
import { Metadata } from 'next';
import AssistantClient from './AssistantClient';

export const metadata: Metadata = {
  title: 'AI Knowledge Assistant | GTA VI Spot',
  description: 'Ask the GTAVISPOT AI Assistant about official GTA VI characters, locations, businesses, and vehicles directly from the Rockstar database.',
  alternates: {
    canonical: 'https://gtavispot.com/assistant',
  },
  openGraph: {
    title: 'AI Knowledge Assistant | GTA VI Spot',
    description: 'Ask questions and receive database-verified GTA VI details.',
    url: 'https://gtavispot.com/assistant',
  },
  robots: {
    index: false, // Do not index the interactive chat assistant page
    follow: true,
  },
};

export default function AssistantPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen w-screen items-center justify-center bg-[#090b0e]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-pink-500 border-t-transparent" />
      </div>
    }>
      <AssistantClient />
    </Suspense>
  );
}
