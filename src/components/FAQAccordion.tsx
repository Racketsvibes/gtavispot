'use client';

import { useState } from 'react';
import styles from '../app/page.module.css';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={faq.q}
            className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faqHeader}>
              <span>{faq.q}</span>
              <svg
                className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                width="16"
                height="16"
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
  );
}
