import { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface BentoCardProps {
  /** Additional CSS classes */
  className?: string;
  /** Card content */
  children: ReactNode;
  /** Tailwind column span class, e.g. "md:col-span-2" */
  colSpan?: string;
  /** Tailwind row span class, e.g. "md:row-span-2" */
  rowSpan?: string;
}

/**
 * BentoCard — a presentational wrapper component for the Bento Grid layout.
 * Provides hover scale + border-glow effect within 300ms using Motion's whileHover.
 * colSpan/rowSpan accept Tailwind class strings for flexible grid placement.
 */
export function BentoCard({
  className = '',
  children,
  colSpan = '',
  rowSpan = '',
}: BentoCardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl bg-white/5 border border-white/10 p-6 overflow-hidden
        transition-colors duration-300 hover:border-white/20
        ${colSpan} ${rowSpan} ${className}
      `.trim().replace(/\s+/g, ' ')}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
