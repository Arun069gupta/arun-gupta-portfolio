import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { experience } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative bg-ink-800/40">
      <SectionHeading index="04" title="Experience" subtitle="Six years building production robotics and IoT systems across startups and enterprise teams." />

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-500/60 via-accent-500/20 to-transparent md:-translate-x-1/2" />

        {experience.map((exp, i) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            className={`relative pl-10 md:pl-0 mb-10 md:mb-14 ${
              i % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
            }`}
          >
            {/* Node */}
            <span
              className={`absolute left-3 md:left-1/2 top-2 w-3 h-3 rounded-full bg-accent-400 ring-4 ring-accent-500/20 md:-translate-x-1/2 -translate-x-1/2`}
            />

            <div className="glass rounded-2xl p-6 glow-blue-hover">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display font-semibold text-base text-white">{exp.role}</h3>
                <span className="text-xs font-mono text-accent-300">{exp.period}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                <span className="font-medium text-gray-200">{exp.company}</span>
                <span className="text-gray-600">·</span>
                <span>{exp.location}</span>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                    <span className="text-accent-500 mt-1.5 shrink-0">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
