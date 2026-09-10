import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { certificates } from '@/data/content';

export default function Certificates() {
  return (
    <section id="certificates" className="section-pad relative bg-ink-800/40">
      <SectionHeading index="06" title="Certificates" subtitle="Industry certifications across AI, cloud, embedded systems, and orchestration." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certificates.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            className="group glass rounded-2xl p-6 flex items-center gap-4 glow-blue-hover hover:-translate-y-1 transition-all duration-400"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-700/10 flex items-center justify-center shrink-0 group-hover:from-accent-500/30 transition-colors">
              <c.icon className="w-7 h-7 text-accent-400" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-semibold text-sm text-white leading-snug">{c.title}</h3>
              <p className="text-xs text-gray-400 mt-1">
                {c.issuer} · {c.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
