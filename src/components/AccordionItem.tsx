import type { KeyboardEvent, Key } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import type { ExperienceEntry } from '../types';

interface AccordionItemProps {
  /** React key for list rendering */
  key?: Key;
  /** The experience entry data to display */
  entry: ExperienceEntry;
  /** Whether this item is currently expanded */
  isExpanded: boolean;
  /** Callback to toggle this item's expanded state */
  onToggle: () => void;
}

/**
 * AccordionItem — an expandable/collapsible row displaying work experience.
 * Collapsed: shows company name, job title, and date range.
 * Expanded: reveals bullet-point responsibilities with animated height transition.
 * Supports keyboard activation (Enter/Space) and proper ARIA attributes.
 */
export function AccordionItem({ entry, isExpanded, onToggle }: AccordionItemProps) {
  const contentId = `accordion-content-${entry.id}`;

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  }

  return (
    <div className="border-b border-white/10 py-4">
      {/* Header — always visible */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="flex items-center justify-between w-full cursor-pointer select-none"
      >
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-white">{entry.company}</span>
          <span className="text-gray-400">{entry.jobTitle}</span>
          <span className="text-sm text-gray-500">{entry.dateRange}</span>
        </div>

        {/* Chevron indicator — rotates 180° when expanded */}
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 text-gray-400"
        >
          <ChevronDown size={20} />
        </motion.span>
      </div>

      {/* Expanded content — responsibilities list */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={contentId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-3 ml-4 space-y-1 list-disc text-gray-300 text-sm">
              {entry.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
