import React from 'react';

interface EntityLayoutProps {
  breadcrumbs: React.ReactNode;
  hero: React.ReactNode;
  statistics?: React.ReactNode;
  mainContent: React.ReactNode;
  sidebar?: React.ReactNode;
  navigation: React.ReactNode;
}

export default function EntityLayout({
  breadcrumbs,
  hero,
  statistics,
  mainContent,
  sidebar,
  navigation,
}: EntityLayoutProps) {
  return (
    <div className="min-h-screen bg-[#090b0e] text-white px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Breadcrumb row */}
        {breadcrumbs}

        {/* Hero banner banner */}
        {hero}

        {/* Dynamic content wrapper */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main profile contents */}
          <div className={`space-y-10 lg:col-span-8 ${!sidebar ? 'lg:col-span-12' : ''}`}>
            {statistics && statistics}
            {mainContent}
          </div>

          {/* Sidebar parameters cards */}
          {sidebar && (
            <aside className="lg:col-span-4 space-y-6">
              {sidebar}
            </aside>
          )}
        </div>

        {/* Bottom index navigation */}
        {navigation}
      </div>
    </div>
  );
}
