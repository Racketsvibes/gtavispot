import React from 'react';

interface InfoRowProps {
  label: string;
  value: string | number | null | undefined;
}

function InfoRow({ label, value }: InfoRowProps) {
  if (value === null || value === undefined || value === '') return null;
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/5 text-sm">
      <span className="text-gray-400 font-medium">{label}</span>
      <span className="font-semibold text-gray-200 capitalize">{value}</span>
    </div>
  );
}

interface SidebarSectionProps {
  entityType: string;
  data: any;
}

export default function SidebarSection({ entityType, data }: SidebarSectionProps) {
  const getAttributes = () => {
    switch (entityType.toLowerCase()) {
      case 'character':
        return [
          { label: 'Role', value: data.role },
          { label: 'Status', value: data.status },
          { label: 'Is Official', value: data.isOfficial ? 'Yes' : 'No' },
        ];
      case 'location':
        return [
          { label: 'Region / Type', value: data.locationType || 'District' },
          { label: 'Status', value: data.status },
          { label: 'Official Leonida', value: data.isOfficial ? 'Yes' : 'No' },
        ];
      case 'vehicle':
        return [
          { label: 'Brand', value: data.brand || 'Vapid' },
          { label: 'Vehicle Class', value: data.vehicleClass || 'Sedan' },
          { label: 'Official Release', value: data.isOfficial ? 'Yes' : 'No' },
        ];
      case 'weapon':
        return [
          { label: 'Weapon Class', value: data.weaponClass || 'Pistol' },
          { label: 'Official Rockstar', value: data.isOfficial ? 'Yes' : 'No' },
          { label: 'Status', value: data.status },
        ];
      case 'business':
        return [
          { label: 'Business Type', value: data.businessType || 'Store' },
          { label: 'Official Catalog', value: data.isOfficial ? 'Yes' : 'No' },
          { label: 'Status', value: data.status },
        ];
      default:
        return [];
    }
  };

  const attributes = getAttributes();

  if (attributes.length === 0) return null;

  return (
    <div className="rounded-2xl border border-white/5 bg-[#12141c]/60 p-6 backdrop-blur-md space-y-4">
      <h3 className="text-sm font-bold text-gray-400 tracking-wider uppercase">Entity Catalog Metadata</h3>
      <div className="divide-y divide-white/5">
        {attributes.map((attr) => (
          <InfoRow key={attr.label} label={attr.label} value={attr.value} />
        ))}
      </div>
    </div>
  );
}
