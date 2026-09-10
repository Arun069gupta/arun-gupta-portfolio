import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { profile } from '@/data/content';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  return (
    <section id="contact" className="section-pad relative">
      <SectionHeading index="07" title="Contact" subtitle="Have a robotics or IoT challenge in mind? Let's talk about building it right." />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="glass rounded-2xl p-6 flex items-center gap-4 glow-blue-hover">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
              <a href={`mailto:${profile.email}`} className="text-sm text-gray-200 hover:text-accent-300 transition-colors">
                {profile.email}
              </a>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex items-center gap-4 glow-blue-hover">
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
              <p className="text-sm text-gray-200">{profile.location}</p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 glow-blue-hover">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Find me on</p>
            <div className="flex gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-gray-300 hover:text-accent-300 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-wider">Name</label>
            <input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-ink-700/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-wider">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-ink-700/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs text-gray-400 uppercase tracking-wider">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-ink-700/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent-500/50 transition-colors resize-none"
              placeholder="Tell me about your project…"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent-500 text-white font-medium text-sm hover:bg-accent-400 transition-colors duration-300 glow-blue disabled:opacity-70"
          >
            {sent ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Message sent
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
