import ArticlePage, { generateMetadata as generateArticleMetadata } from '../news/[slug]/page';

const SLUG = 'gta-6-gameplay';

export function generateMetadata() {
  return generateArticleMetadata({ params: Promise.resolve({ slug: SLUG }) });
}

export default function Gta6GameplayEsPage() {
  return <ArticlePage params={Promise.resolve({ slug: SLUG })} />;
}
