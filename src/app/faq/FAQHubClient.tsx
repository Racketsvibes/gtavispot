'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface FAQItem {
  id: string;
  category: string;
  q: string;
  a: string;
}

interface FAQHubClientProps {
  faqs: FAQItem[];
}

const categoryMeta = {
  general: { heading: 'GTA 6 Release Date & General FAQs' },
  story: { heading: 'GTA 6 Story & Character FAQs' },
  world: { heading: 'GTA 6 Gameplay & Leonida Map FAQs' },
  tech: { heading: 'GTA 6 Tech & Console Specs FAQs' },
};

export default function FAQHubClient({ faqs }: FAQHubClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const categoriesList = ['general', 'story', 'world', 'tech'];

  return (
    <div>
      {/* Search Input */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search FAQs (e.g. storage, Jason, Vice City)..."
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <svg
          className={styles.searchIcon}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* FAQs List grouped under H2 Headings */}
      <section className={styles.faqSection}>
        {filteredFaqs.length > 0 ? (
          categoriesList.map((catKey) => {
            const catFaqs = filteredFaqs.filter((f) => f.category === catKey);
            if (catFaqs.length === 0) return null;

            return (
              <div key={catKey} className={styles.categoryGroup}>
                <h2 className={styles.categoryHeading}>
                  {categoryMeta[catKey as keyof typeof categoryMeta].heading}
                </h2>
                <div className={styles.faqList}>
                  {catFaqs.map((faq) => (
                    <div key={faq.id} id={faq.id} className={styles.faqCard}>
                      <h3 className={styles.faqQuestion}>{faq.q}</h3>
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.noResults}>
            No FAQs found matching &quot;{searchQuery}&quot;. Try adjusting your search keywords.
          </div>
        )}
      </section>
    </div>
  );
}
