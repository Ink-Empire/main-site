import { useState } from 'react';
import SectionHeader from './SectionHeader';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container">
      <section className="contact" id="contact">
        <SectionHeader label="Contact" />
        <div className="contact-layout">
          <div className="contact-grid">
            <div className="contact-cell">
              <div className="contact-cell-label">General Enquiries</div>
              <div className="contact-cell-value">
                <a href="mailto:hello@inkempire.net">hello@inkempire.net</a>
              </div>
            </div>
            <div className="contact-cell">
              <div className="contact-cell-label">Press &amp; Partnerships</div>
              <div className="contact-cell-value">
                <a href="mailto:partnerships@inkempire.net">partnerships@inkempire.net</a>
              </div>
            </div>
            <div className="contact-cell">
              <div className="contact-cell-label">Registered</div>
              <div className="contact-cell-value">
                Ink Empire Limited<br />
                New Zealand
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-label">Send us a message</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="contact-form-success">Message sent. We'll be in touch.</p>
            )}
            {status === 'error' && (
              <p className="contact-form-error">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
