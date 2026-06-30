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

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Release' },
  { id: 'story', label: 'Story & Characters' },
  { id: 'world', label: 'Leonida World' },
  { id: 'tech', label: 'Tech & Performance' },
];

export default function FAQHubClient({ faqs }: FAQHubClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItemIds, setOpenItemIds] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenItemIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Category Tabs */}
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeCategory === cat.id ? styles.tabActive : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* FAQs List */}
      <section className={styles.faqSection}>
        {filteredFaqs.length > 0 ? (
          <div className={styles.faqList}>
            {filteredFaqs.map((faq) => {
              const isOpen = !!openItemIds[faq.id];
              return (
                <div
                  key={faq.id}
                  id={faq.id}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <div className={styles.faqHeader}>
                    <h3 className={styles.faqQuestion}>{faq.q}</h3>
                    <svg
                      className={styles.faqChevron}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.noResults}>
            No FAQs found matching &quot;{searchQuery}&quot;. Try adjusting your search keywords.
          </div>
        )}
      </section>
    </div>
  );
}
