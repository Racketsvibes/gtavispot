import React from 'react';
import { PageStatisticsV1 } from '@/backend/application/page-contracts';

interface StatisticsSectionProps {
  statistics: PageStatisticsV1;
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  const statsList = [
    { label: 'Screenshots & Media', value: statistics.imagesCount },
    { label: 'Direct Relationships', value: statistics.relationshipsCount },
    ...(statistics.locationsCount !== undefined ? [{ label: 'Mapped Locations', value: statistics.locationsCount }] : []),
    ...(statistics.vehiclesCount !== undefined ? [{ label: 'Mapped Vehicles', value: statistics.vehiclesCount }] : []),
    ...(statistics.businessesCount !== undefined ? [{ label: 'Mapped Businesses', value: statistics.businessesCount }] : []),
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold text-gray-400 tracking-wider uppercase">Database Metrics</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {statsList.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/5 bg-[#12141c]/40 p-4 text-center backdrop-blur-sm"
          >
            <span className="block text-2xl font-black text-white">{stat.value}</span>
            <span className="mt-1 block text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
