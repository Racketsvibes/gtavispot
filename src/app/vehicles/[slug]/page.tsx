import EntityRenderer, { generateStaticParamsFor, generateMetadataFor } from '../../../renderer/EntityRenderer';

interface Props {
  params: Promise<{ slug: string }>;
}

// Next.js ISR settings: Revalidate static pages cache daily
export const revalidate = 86400;

export async function generateStaticParams() {
  return generateStaticParamsFor('vehicle');
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return generateMetadataFor('vehicle', slug);
}

export default async function VehiclePage({ params }: Props) {
  const { slug } = await params;
  return <EntityRenderer entityType="vehicle" slug={slug} />;
}
