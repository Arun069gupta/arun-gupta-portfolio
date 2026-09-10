import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import Counter from '@/components/Counter';
import { about, stats } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px accent-line opacity-30" />
      <SectionHeading index="01" title="About" subtitle={about.heading} />

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
        {/* Narrative */}
        <div className="lg:col-span-3 flex flex-col gap-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-gray-300 leading-relaxed text-lg"
            >
              {p}
            </motion.p>
          ))}

          {/* Highlights */}
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
                className="glass rounded-2xl p-5 glow-blue-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center mb-3">
                  <h.icon className="w-5 h-5 text-accent-400" />
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">{h.label}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 flex flex-col gap-1 glow-blue-hover"
            >
              <span className="font-display text-4xl md:text-5xl font-semibold gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
