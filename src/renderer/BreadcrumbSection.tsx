import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSectionProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbSection({ items }: BreadcrumbSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 py-4" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={item.url}>
            {index > 0 && <span className="text-gray-600">/</span>}
            {isLast ? (
              <span className="font-semibold text-gray-200 truncate">{item.name}</span>
            ) : (
              <Link href={item.url} className="hover:text-pink-500 transition-colors">
                {item.name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
