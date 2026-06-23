'use client';

import React, { useState } from 'react';
import styles from '../utility.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <span className={styles.categoryLabel}>GET IN TOUCH</span>
          <h1 className={styles.title}>
            Contact <span className="text-gradient">GTA Vi Spot</span>
          </h1>
          <p className={styles.desc}>
            Have a question, feedback on a guide, advertising inquiry, or a verified leak tip? Drop us a message.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content}`}>
        <div className={styles.richText} style={{ marginBottom: '32px' }}>
          <h2>Direct Contacts</h2>
          <p>
            Prefer direct email? Reach our team at:
          </p>
          <ul>
            <li><strong>All Inquiries:</strong> <code>gtavispot@gmail.com</code></li>
          </ul>
        </div>

        <div className={styles.richText}>
          <h2>Send a Message</h2>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <strong>Message Received!</strong> We've got your message and will read it soon. Our team typically replies within 48 hours. Thanks for reaching out to GTA Vi Spot!
          </div>
        ) : null}

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-name">Your Name</label>
            <input
              id="contact-name"
              type="text"
              required
              className={styles.formInput}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              required
              className={styles.formInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. name@domain.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-subject">Inquiry Subject</label>
            <select
              id="contact-subject"
              className={styles.formInput}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="General Feedback">General Feedback</option>
              <option value="Editorial Correction">Editorial Correction / Guide Fix</option>
              <option value="News Tip / Leak">Submit a News Tip or Leak</option>
              <option value="Advertising">Advertising / Partnership Inquiry</option>
              <option value="Other">Other Inquiry</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="contact-message">Message Details</label>
            <textarea
              id="contact-message"
              required
              className={styles.formTextarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
            />
          </div>

          <button type="submit" disabled={loading} className={styles.submitBtn}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </main>
    </div>
  );
}
