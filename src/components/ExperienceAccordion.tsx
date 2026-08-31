import { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import { experience } from '../data/experience';
import { AnimatedSection } from './ui/AnimatedSection';

/**
 * ExperienceAccordion — displays work history entries in an expandable accordion.
 * Only one item can be expanded at a time (single-expansion invariant).
 * All items start collapsed on initial render.
 * Entries are displayed in reverse chronological order (most recent first).
 */
export function ExperienceAccordion() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function handleToggle(id: string) {
    setExpandedId((current) => (current === id ? null : id));
  }

  return (
    <section id="experience" className="py-20">
      <AnimatedSection className="max-w-3xl mx-auto px-4">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          My Journey
        </p>
        <h2 className="text-3xl font-bold text-white mb-8">Work Experience</h2>

        <div>
          {experience.map((entry) => (
            <AccordionItem
              key={entry.id}
              entry={entry}
              isExpanded={expandedId === entry.id}
              onToggle={() => handleToggle(entry.id)}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
