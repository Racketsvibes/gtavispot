'use client';

import { useState } from 'react';
import styles from '@/app/page.module.css';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('Thank you! You have been successfully subscribed to our newsletter.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('An error occurred. Please check your connection and try again.');
    }
  };

  return (
    <div className={styles.newsletterFormWrapper}>
      <form onSubmit={handleSubmit} className={styles.newsletterForm}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.newsletterInput}
          aria-label="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
        />
        <button
          className={styles.newsletterBtn}
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className={styles.newsletterSuccess}>{message}</p>
      )}
      {status === 'error' && (
        <p className={styles.newsletterError}>{message}</p>
      )}
    </div>
  );
}
