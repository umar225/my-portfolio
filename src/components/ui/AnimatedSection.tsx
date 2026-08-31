import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type Direction = 'up' | 'left' | 'right';

interface AnimatedSectionProps {
  /** Delay before animation starts (in seconds). Default: 0 */
  delay?: number;
  /** Direction of entrance animation. Default: 'up' */
  direction?: Direction;
  /** Additional CSS classes */
  className?: string;
  /** Content to animate */
  children: ReactNode;
}

function getInitialOffset(direction: Direction): { x?: number; y?: number } {
  switch (direction) {
    case 'up':
      return { y: 20 };
    case 'left':
      return { x: -20 };
    case 'right':
      return { x: 20 };
  }
}

/**
 * A generic wrapper that animates children into view using Motion's `whileInView`.
 * Respects `prefers-reduced-motion` — renders content in its final state without
 * transitions when active.
 *
 * Constraints:
 * - Positional offset: max 30px (uses 20px)
 * - Duration: 0.5s (within 200–800ms range)
 * - Triggers once via `viewport={{ once: true }}`
 */
export function AnimatedSection({
  delay = 0,
  direction = 'up',
  className,
  children,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = getInitialOffset(direction);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
}
