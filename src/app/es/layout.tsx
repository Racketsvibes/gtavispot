import React from 'react';
import LanguageSetter from '@/components/layout/LanguageSetter';

export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LanguageSetter lang="es-ES" />
      {children}
    </>
  );
}
