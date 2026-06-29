import fs from 'fs';
import path from 'path';

// Helper to convert human dates (e.g. "June 17, 2026") into ISO 8601 strings
export function parseDateToISO(dateStr: string): string {
  try {
    const dateObj = new Date(dateStr);
    if (!isNaN(dateObj.getTime())) {
      return dateObj.toISOString();
    }
  } catch (error) {
    // Ignore and fallback
  }
  // If parsing fails, default to June 17, 2026 base or current date
  return new Date(dateStr.includes('2026') ? '2026-06-17T00:00:00Z' : new Date()).toISOString();
}

// 1. Organization Schema
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://gtavispot.com/#organization",
    "name": "GTA Vi Spot",
    "url": "https://gtavispot.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gtavispot.com/logo.png",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://twitter.com/",
      "https://youtube.com/",
      "https://instagram.com/",
      "https://tiktok.com/",
      "https://discord.gg/",
      "https://reddit.com/"
    ]
  };
}

// 2. WebSite Schema
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://gtavispot.com/#website",
    "name": "GTA Vi Spot",
    "url": "https://gtavispot.com",
    "description": "Your ultimate GTA 6 resource — latest news, interactive map, character guides, and launch coverage."
  };
}

// 3. Breadcrumbs Schema
export function getBreadcrumbsSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// 4. FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// 5. Article Schema
export interface ArticleSchemaInput {
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  url: string;
}

export function getArticleSchema(input: ArticleSchemaInput) {
  const isoPublished = parseDateToISO(input.datePublished);
  const isoModified = parseDateToISO(input.dateModified);

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": input.url
    },
    "headline": input.headline,
    "description": input.description,
    "image": [input.imageUrl],
    "datePublished": isoPublished,
    "dateModified": isoModified,
    "author": {
      "@type": "Person",
      "name": input.authorName,
      "url": "https://gtavispot.com/about/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GTA Vi Spot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gtavispot.com/logo.png"
      }
    }
  };
}

// 6. Build-Time FAQ Parser
export function getFaqsFromFile(slug: string, category: 'news' | 'map' | 'story' | 'tech'): { question: string; answer: string }[] {
  try {
    const filePath = path.join(process.cwd(), 'src/data', category, `${slug}.tsx`);
    if (!fs.existsSync(filePath)) {
      return [];
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Regular expression to match FAQ sections and individual items
    const faqItemRegex = /<div className=\{styles\.faqItem\}>[\s\S]*?<h3 className=\{styles\.faqQuestion\}>([\s\S]*?)<\/h3>[\s\S]*?<p className=\{styles\.faqAnswer\}>([\s\S]*?)<\/p>[\s\S]*?<\/div>/g;
    
    const faqs: { question: string; answer: string }[] = [];
    let match;
    while ((match = faqItemRegex.exec(fileContent)) !== null) {
      const question = match[1].trim();
      const answer = match[2]
        .trim()
        .replace(/\s+/g, ' ')
        // Remove JSX elements like <Link>, <strong>, etc., to get plain text for search indexing
        .replace(/<Link[^>]*>([\s\S]*?)<\/Link>/g, '$1')
        .replace(/<strong>([\s\S]*?)<\/strong>/g, '$1')
        .replace(/<a[^>]*>([\s\S]*?)<\/a>/g, '$1')
        .replace(/<code[^>]*>([\s\S]*?)<\/code>/g, '$1')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
      faqs.push({ question, answer });
    }
    return faqs;
  } catch (error) {
    console.error(`Failed to parse FAQs for ${category}/${slug}:`, error);
    return [];
  }
}

export function getSEOTitle(baseTitle: string): string {
  // Strip any hardcoded suffix to prevent Next.js layout metadata template from double-appending it
  return baseTitle.replace(' | GTA Vi Spot', '');
}
