'use client';

import { useEffect } from 'react';

export default function LanguageSetter({ lang }: { lang: string }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
