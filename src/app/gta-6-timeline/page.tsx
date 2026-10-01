import ArticlePage, { generateMetadata as generateArticleMetadata } from '../news/[slug]/page';

const SLUG = 'gta-6-timeline';

export function generateMetadata() {
  return generateArticleMetadata({ params: Promise.resolve({ slug: SLUG }) });
}

export default function Gta6TimelinePage() {
  return <ArticlePage params={Promise.resolve({ slug: SLUG })} />;
}
