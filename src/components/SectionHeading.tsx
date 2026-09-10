import { motion } from 'framer-motion';

type SectionHeadingProps = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-xs text-accent-400 tracking-widest">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent-500 to-transparent" />
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base md:text-lg text-gray-400 max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
