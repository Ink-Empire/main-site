import { useState } from 'react';
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
    <section className="contact" id="contact">
      <div className="side contact-side">
        <span className="side-num">03</span>
        <span className="side-label">Contact</span>
      </div>
      <div className="contact-body">
        <h2>
          <span className="h2-talk">Let's Talk.</span>
        </h2>
        <a className="contact-email" href="mailto:hello@inkempire.net">
          hello@inkempire.net
        </a>
        <a className="contact-email" href="mailto:partnerships@inkempire.net">
          partnerships@inkempire.net
        </a>
        <p className="contact-note">
          For product inquiries, press, or partnership discussions. We read
          everything and respond to things that fit what we're building.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-label">Send a message</div>
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
  );
}
