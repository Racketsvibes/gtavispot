import ArticlePage, { generateMetadata as generateArticleMetadata } from '../news/[slug]/page';

const SLUG = 'gta-6-everything-we-know';

export function generateMetadata() {
  return generateArticleMetadata({ params: Promise.resolve({ slug: SLUG }) });
}

export default function Gta6EverythingWeKnowPage() {
  return <ArticlePage params={Promise.resolve({ slug: SLUG })} />;
}
