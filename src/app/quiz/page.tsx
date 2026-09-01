import { Metadata } from 'next';
import KnowledgeQuiz from '@/components/quiz/KnowledgeQuiz';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'GTA 6 Knowledge Quiz: Test Your GTA VI Trivia Skills 2026',
  description: 'Take the ultimate GTA 6 knowledge quiz! Test your trivia on Leonida, Vice City, Lucia, Jason, release dates, and trailer details. 10 interactive questions.',
  alternates: {
    canonical: 'https://www.gtavispot.com/quiz/',
  },
  openGraph: {
    title: 'GTA 6 Knowledge Quiz: Test Your GTA VI Trivia Skills 2026',
    description: 'Take the ultimate GTA 6 knowledge quiz! Test your trivia on Leonida, Vice City, Lucia, Jason, release dates, and trailer details.',
    url: 'https://www.gtavispot.com/quiz/',
    type: 'website',
    images: [
      {
        url: 'https://www.gtavispot.com/images/GTAVI_Screenshots/Places/Vice_City/Vice_City_01.webp',
        width: 1200,
        height: 630,
        alt: 'GTA 6 Knowledge Quiz Vice City Trivia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Knowledge Quiz: Test Your GTA VI Trivia Skills 2026',
    description: 'Take the ultimate GTA 6 knowledge quiz! 10 interactive trivia questions on Leonida, Lucia, Jason, and release dates.',
    images: ['https://www.gtavispot.com/images/GTAVI_Screenshots/Places/Vice_City/Vice_City_01.webp'],
  },
};

export default function QuizPage() {
  const quizSchema = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    'name': 'Grand Theft Auto VI (GTA 6) Knowledge Quiz',
    'description': 'Test your knowledge on GTA 6 setting, characters, release date, and trailer lore with 10 interactive trivia questions.',
    'educationalLevel': 'Beginner to Advanced',
    'about': {
      '@type': 'VideoGame',
      'name': 'Grand Theft Auto VI',
    },
  };

  return (
    <main className={styles.mainWrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizSchema) }}
      />
      <KnowledgeQuiz />
    </main>
  );
}
