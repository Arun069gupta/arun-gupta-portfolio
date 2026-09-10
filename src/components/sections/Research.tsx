import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { research } from '@/data/content';

export default function Research() {
  return (
    <section id="research" className="section-pad relative">
      <SectionHeading index="05" title="Research" subtitle="Peer-reviewed work on SLAM, edge inference, reinforcement learning, and swarm robotics." />

      <div className="flex flex-col gap-4 max-w-4xl">
        {research.map((r, i) => (
          <motion.a
            key={r.title}
            href="#"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
            className="group glass rounded-2xl p-6 flex gap-5 glow-blue-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-5 h-5 text-accent-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display font-semibold text-base text-white group-hover:text-accent-200 transition-colors">
                  {r.title}
                </h3>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-accent-400 transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-xs text-accent-300 font-mono mt-1">{r.venue}</p>
              <p className="text-sm text-gray-400 leading-relaxed mt-2">{r.summary}</p>
              <span className="inline-block mt-3 text-xs text-gray-500 font-mono">{r.year}</span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
