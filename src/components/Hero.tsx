import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { profile } from '@/data/content';
import RobotScene from '@/components/RobotScene';
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-accent-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-500/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 grid min-h-screen items-center gap-8 px-6 pb-16 pt-28 md:px-12 lg:grid-cols-2 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="inline-flex items-center gap-2 self-start rounded-full px-4 py-1.5 text-xs text-gray-300 glass"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Available for select engagements
          </motion.div>

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              <span className="block text-white">Arun</span>
              <span className="block gradient-text">Gupta</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 max-w-md text-lg font-light text-gray-400 md:text-xl"
            >
              {profile.role}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-md text-balance leading-relaxed text-gray-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-full bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-accent-400 glow-blue"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-gray-200 glass glow-blue-hover hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <MapPin className="h-4 w-4 text-accent-400" />
            {profile.location}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
          className="relative h-[420px] w-full sm:h-[520px] lg:h-[640px]"
        >
          <div className="absolute inset-0 overflow-visible">
            
            <div className="absolute inset-0 w-full h-full z-10 flex items-center justify-center opacity-90 transition-opacity duration-700 hover:opacity-100 cursor-grab active:cursor-grabbing">
              <RobotScene />
            </div>

            <div className="absolute inset-x-8 bottom-8 grid grid-cols-3 gap-4 text-[11px] uppercase tracking-[0.28em] text-gray-400 pointer-events-none z-20">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">AI</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">ML</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">Cloud</div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-8 left-1/2 h-24 w-2/3 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-accent-400"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
