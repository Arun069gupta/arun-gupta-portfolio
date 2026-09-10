import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <SectionHeading index="03" title="Projects" subtitle="Selected work across autonomous robots, industrial IoT, computer vision, and human-machine interfaces." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
            className="group glass rounded-2xl overflow-hidden glow-blue-hover hover:-translate-y-2 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-mono text-accent-200 glass-strong">
                {p.metric}
              </span>
            </div>

            {/* Body */}
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-base text-white group-hover:text-accent-200 transition-colors">
                  {p.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent-400 transition-colors shrink-0" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono text-gray-400 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
