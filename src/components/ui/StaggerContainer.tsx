import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface StaggerContainerProps {
  /** Delay between each child's entrance animation (in seconds). Default: 0.1 (constrained to 0.05–0.15) */
  staggerDelay?: number;
  /** Additional CSS classes */
  className?: string;
  /** Content to stagger */
  children: ReactNode;
}

/** Clamp stagger delay to the 50–150ms range per requirement 9.3 */
function clampDelay(delay: number): number {
  return Math.min(0.15, Math.max(0.05, delay));
}

const containerVariants = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: clampDelay(staggerDelay),
    },
  },
});

/**
 * Variants that children of StaggerContainer should use for their entrance animation.
 * Apply via `<motion.div variants={staggerItemVariants}>`.
 */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

/**
 * A Motion container that staggers children's entrance animations.
 * Uses Motion variants pattern with `whileInView` and `viewport={{ once: true }}`.
 *
 * Respects `prefers-reduced-motion` — renders children immediately without
 * stagger when active.
 *
 * Children should use the exported `staggerItemVariants` for their entrance:
 * ```tsx
 * <StaggerContainer>
 *   <motion.div variants={staggerItemVariants}>Item 1</motion.div>
 *   <motion.div variants={staggerItemVariants}>Item 2</motion.div>
 * </StaggerContainer>
 * ```
 */
export function StaggerContainer({
  staggerDelay = 0.1,
  className,
  children,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(staggerDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
