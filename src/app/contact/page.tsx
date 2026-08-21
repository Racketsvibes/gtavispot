'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../utility.module.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Feedback');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setLoading(true);
    setError('');
    setSubmitted(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact Form Submission Error:', err);
      setError('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
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
            Last Updated: July 25, 2026. Have a question, feedback on a guide, advertising inquiry, or a verified leak tip? Drop our editorial team a message.
          </p>
        </div>
      </header>

      <main className={`container ${styles.content}`}>
        <div className={styles.richText} style={{ marginBottom: '40px' }}>
          <h2>Get In Touch With Our Team</h2>
          <p>
            Welcome to the official contact hub for GTA Vi Spot. Whether you are a dedicated reader looking to suggest a correction to one of our massive interactive maps, a community member with a verified news tip, or a brand representative seeking advertising partnerships, we want to hear from you. Our mission is to build the most comprehensive and accurate GTA 6 resource, and community feedback is an essential part of that process. Before reaching out, you might find instant answers to common inquiries on our <Link href="/faq/">FAQ page</Link>.
          </p>

          <h2>Email Us Directly</h2>
          <p>
            If you prefer to bypass the contact form below and use your own email client, you can reach our editorial and support staff directly at the following address. We route all inquiries through a central inbox to ensure the right team member handles your request promptly.
          </p>
          <ul>
            <li><strong>All Inquiries (Support, Business, Tips):</strong> <code>gtavispot@gmail.com</code></li>
          </ul>

          <h2>Connect on Social Media</h2>
          <p>
            We maintain an active presence across multiple social media platforms to keep you updated with the latest GTA 6 news, trailer breakdowns, and site announcements. Follow us, join our community discussions, or send us a direct message on your preferred platform:
          </p>
          <ul>
            <li><strong>Twitter / X:</strong> <a href="https://x.com/GTAVISPOT" target="_blank" rel="noopener noreferrer">@GTAVISPOT</a> (Best for breaking news and live updates)</li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@GTAVISpot" target="_blank" rel="noopener noreferrer">GTA Vi Spot Channel</a> (For deep-dive video essays and trailer analysis)</li>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/gtavispot/" target="_blank" rel="noopener noreferrer">@gtavispot</a></li>
            <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@gtavispot" target="_blank" rel="noopener noreferrer">@gtavispot</a></li>
            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/GTAViSpot/" target="_blank" rel="noopener noreferrer">GTA Vi Spot Page</a></li>
            <li><strong>Threads:</strong> <a href="https://www.threads.com/@gtavispot" target="_blank" rel="noopener noreferrer">@gtavispot</a></li>
            <li><strong>Discord:</strong> <a href="https://discord.gg/dbjHxg7zUW" target="_blank" rel="noopener noreferrer">Join our Community Server</a></li>
            <li><strong>Pinterest:</strong> <a href="https://www.pinterest.com/gtavispot/" target="_blank" rel="noopener noreferrer">GTA Vi Spot Boards</a></li>
            <li><strong>Medium:</strong> <a href="https://medium.com/@gtavispot" target="_blank" rel="noopener noreferrer">Our Blog</a></li>
            <li><strong>Tumblr:</strong> <a href="https://www.tumblr.com/blog/gtavispot" target="_blank" rel="noopener noreferrer">GTA Vi Spot Blog</a></li>
          </ul>

          <h2>Editorial Guidelines for Submissions</h2>
          <p>
            If you are submitting a news tip, leak, or rumor to our editorial team (led by Qamar Farooq, as detailed on our <Link href="/about/">About page</Link>), please ensure you provide as much context and source material as possible. We adhere to strict verification standards. Unverified claims without supporting evidence (such as credible screenshots, official documentation, or reliable source history) will not be published. We guarantee absolute anonymity for all valid industry sources.
          </p>

          <h2>Response Times & Legal</h2>
          <p>
            Our team strives to read every single legitimate message we receive. Due to the high volume of correspondence, our typical response time is within 48 to 72 hours for business and support inquiries. Please note that abusive language, spam, and unsolicited promotional spam will be automatically filtered and ignored. By contacting us, you agree to our <Link href="/privacy-policy/">Privacy Policy</Link> and <Link href="/disclaimer/">Disclaimer</Link> regarding how we handle user data and communications.
          </p>

          <h2>Send a Message</h2>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <strong>Message Received!</strong> We've got your message and will read it soon. Our team typically replies within 48 hours. Thanks for reaching out to GTA Vi Spot!
          </div>
        ) : null}

        {error ? (
          <div className={styles.errorMessage}>
            <strong>Submission Error:</strong> {error}
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
