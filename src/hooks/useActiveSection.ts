import { useState, useEffect, useRef } from 'react';

/**
 * Hook that uses IntersectionObserver to detect which section is currently
 * most visible in the viewport, for active nav link highlighting.
 *
 * Falls back to returning the first section id if IntersectionObserver
 * is not available.
 *
 * @param sectionIds - Array of section element ids (e.g., ['about', 'projects', 'testimonials'])
 * @returns The id of the currently active (most visible) section
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? '');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Graceful fallback if IntersectionObserver is not available
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setActiveSection(sectionIds[0] ?? '');
      return;
    }

    // Track visibility ratios for each section
    const visibilityMap = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest visibility ratio
        let maxRatio = 0;
        let mostVisibleSection = sectionIds[0] ?? '';

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        if (maxRatio > 0) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px 0px -10% 0px',
      }
    );

    // Observe all section elements
    const elements: Element[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && observerRef.current) {
        observerRef.current.observe(element);
        elements.push(element);
      }
    });

    return () => {
      // Clean up observer on unmount
      if (observerRef.current) {
        elements.forEach((element) => {
          observerRef.current?.unobserve(element);
        });
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [sectionIds]);

  return activeSection;
}
