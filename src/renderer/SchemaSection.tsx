import React from 'react';

interface SchemaSectionProps {
  schema: Record<string, any>;
}

export default function SchemaSection({ schema }: SchemaSectionProps) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
