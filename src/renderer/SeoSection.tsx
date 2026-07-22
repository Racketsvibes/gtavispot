import React from 'react';

interface SeoSectionProps {
  canonicalUrl?: string | null;
}

export default function SeoSection({ canonicalUrl }: SeoSectionProps) {
  if (!canonicalUrl) return null;
  return (
    <head>
      <link rel="canonical" href={canonicalUrl} />
    </head>
  );
}
