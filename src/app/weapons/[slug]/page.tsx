import EntityRenderer, { generateStaticParamsFor, generateMetadataFor } from '../../../renderer/EntityRenderer';

interface Props {
  params: Promise<{ slug: string }>;
}

// Next.js ISR settings: Revalidate static pages cache daily
export const revalidate = 86400;

export async function generateStaticParams() {
  return generateStaticParamsFor('weapon');
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return generateMetadataFor('weapon', slug);
}

export default async function WeaponPage({ params }: Props) {
  const { slug } = await params;
  return <EntityRenderer entityType="weapon" slug={slug} />;
}
