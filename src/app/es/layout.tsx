import React from 'react';

// The <html lang> attribute is set on the server by the root layout
// (it reads the x-pathname header set in middleware), so Spanish pages
// are served with lang="es" in the initial HTML. No client-side patch
// is needed here anymore.
export default function SpanishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
