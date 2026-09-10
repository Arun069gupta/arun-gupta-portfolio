import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';
import { skills } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-ink-800/40">
      <SectionHeading index="02" title="Skills" subtitle="A toolkit honed across the full robotics and IoT stack — from bare-metal firmware to cloud-scale telemetry." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: gi * 0.1, duration: 0.55 }}
            className="glass rounded-2xl p-6 flex flex-col gap-4 glow-blue-hover"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-500/10 flex items-center justify-center">
                <group.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="font-display font-semibold text-sm text-white">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs text-gray-300 bg-white/5 border border-white/5 hover:border-accent-500/40 hover:text-accent-200 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
