# Implementation Plan: Portfolio Redesign

## Overview

This plan transforms the monolithic `App.tsx` into a component-based architecture with dedicated components for each section, shared UI primitives, typed data files, and custom hooks. The implementation follows a bottom-up approach: types and data first, then shared utilities and hooks, then individual section components, and finally wiring everything together in the root layout.

## Tasks

- [x] 1. Set up project structure, types, and data layer
  - [x] 1.1 Create TypeScript interfaces and types
    - Create `src/types/index.ts` with all shared interfaces: `NavLink`, `Project`, `Testimonial`, `ExperienceEntry`, `Certification`, `PhaseInfo`, `SkillCategory`
    - _Requirements: 4.2, 5.2, 6.2, 7.5, 11.2_

  - [x] 1.2 Create static data files
    - Create `src/data/projects.ts` — extract and type the 7 projects from existing `PROJECTS` array
    - Create `src/data/testimonials.ts` — 8 testimonial entries with name, title, quote
    - Create `src/data/experience.ts` — work experience entries in reverse chronological order
    - Create `src/data/certifications.ts` — certification entries in reverse chronological order
    - Create `src/data/skills.ts` — tech stack categories with Lucide icon names
    - _Requirements: 4.1, 5.1, 6.1, 7.1, 7.2, 7.3, 7.4, 11.1_

  - [x] 1.3 Create custom hooks
    - Create `src/hooks/useClipboard.ts` — copy-to-clipboard with idle/copied/error state machine and 2s auto-revert
    - Create `src/hooks/useReducedMotion.ts` — detects `prefers-reduced-motion: reduce` media query
    - Create `src/hooks/useActiveSection.ts` — IntersectionObserver-based active nav link detection with graceful fallback
    - _Requirements: 8.3, 8.4, 8.5, 9.6, 2.5_

- [x] 2. Implement shared UI components
  - [x] 2.1 Create AnimatedSection component
    - Create `src/components/ui/AnimatedSection.tsx` with Motion `whileInView` wrapper
    - Props: `delay`, `direction` (up/left/right), `className`, `children`
    - Respect `useReducedMotion` — render final state without transitions when active
    - Constrain positional offset to max 30px, duration 200–800ms
    - Use `viewport={{ once: true }}` for one-time trigger
    - _Requirements: 9.1, 9.4, 9.5, 9.6_

  - [x] 2.2 Create StaggerContainer component
    - Create `src/components/ui/StaggerContainer.tsx` with Motion `staggerChildren` variant
    - Configurable `staggerDelay` prop (default 0.1s, constrained to 50–150ms)
    - Respect reduced motion preferences
    - _Requirements: 9.3, 9.6_

  - [ ]* 2.3 Write property tests for AnimatedSection and StaggerContainer
    - **Property 10: Animation positional offset within bounds**
    - **Property 11: Reduced motion suppresses all animations**
    - **Validates: Requirements 9.1, 9.4, 9.6**

- [x] 3. Implement Navbar and Hero section
  - [x] 3.1 Create Navbar component
    - Create `src/components/Navbar.tsx` with fixed positioning, backdrop-blur on scroll > 50px
    - Desktop: horizontal link list with active section highlighting via `useActiveSection`
    - Mobile: hamburger icon → full-screen overlay with AnimatePresence
    - Smooth-scroll on link click via `scrollIntoView({ behavior: 'smooth' })`
    - Links: About, Projects, Testimonials, Experience, Certifications, Contact
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

  - [x] 3.2 Create HeroSection component
    - Create `src/components/HeroSection.tsx` with animated name, typewriter title, tagline
    - Profile image with `onError` fallback to gradient placeholder
    - "Show My Work" CTA smooth-scrolls to `#projects`
    - Bouncing chevron indicator at bottom
    - Responsive: stacked layout below 768px, min font sizes enforced
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 9.7_

- [x] 4. Implement Bento Grid About section
  - [x] 4.1 Create BentoCard component
    - Create `src/components/BentoCard.tsx` — wrapper with hover scale/border-glow effect
    - Props: `className`, `children`, `colSpan`, `rowSpan`
    - Hover: scale 1.01–1.05 or border-glow within 300ms
    - _Requirements: 3.9_

  - [x] 4.2 Create BentoGridAbout component
    - Create `src/components/BentoGridAbout.tsx` with minimum 5 cards in flexible grid
    - Cards: bio+image (spans 2 cols), collaboration, timezone, tech stack (spans 2 cols), quality passion, contact CTA with CopyEmailButton
    - Desktop: 2+ distinct col/row span configurations
    - Mobile: single-column reflow below 768px
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 5. Implement Projects section
  - [x] 5.1 Create ProjectCard component
    - Create `src/components/ProjectCard.tsx` with fade-up entrance, hover translateY + border color change
    - Conditional "Check Live Site" button only when `project.link` exists
    - External links use `target="_blank"` and `rel="noopener noreferrer"`
    - Tags rendered as pill badges
    - _Requirements: 4.2, 4.3, 4.4, 4.5, 4.7_

  - [x] 5.2 Create ProjectsSection component
    - Create `src/components/ProjectsSection.tsx` with responsive grid (1 col < 768px, 2 cols md, 3 cols lg)
    - Renders all 7 projects using ProjectCard with staggered entrance
    - _Requirements: 4.1, 4.5, 4.6_

  - [ ]* 5.3 Write property tests for ProjectCard
    - **Property 1: Data field character limits**
    - **Property 2: External links have security attributes**
    - **Property 3: Conditional button rendering based on link presence**
    - **Validates: Requirements 4.2, 4.3, 4.7**

- [x] 6. Checkpoint - Verify core sections render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Implement Testimonials Marquee
  - [x] 7.1 Create TestimonialCard component
    - Create `src/components/TestimonialCard.tsx` displaying name, job title, and quote
    - Min-width 280px on mobile
    - _Requirements: 5.2, 5.6_

  - [x] 7.2 Create TestimonialsMarquee component
    - Create `src/components/TestimonialsMarquee.tsx` with CSS-only infinite scroll animation
    - Duplicate testimonial list for seamless loop
    - `@keyframes marquee` with `translateX(0)` → `translateX(-50%)`
    - Pause on hover via `animation-play-state: paused`
    - _Requirements: 5.1, 5.3, 5.4, 5.5, 5.6_

  - [ ]* 7.3 Write property test for TestimonialCard
    - **Property 4: Testimonial card displays all required fields**
    - **Validates: Requirements 5.2**

- [x] 8. Implement Experience Accordion
  - [x] 8.1 Create AccordionItem component
    - Create `src/components/AccordionItem.tsx` with expand/collapse behavior
    - Displays company name, job title, date range when collapsed
    - Reveals responsibilities on expand
    - Animated height via Motion `animate={{ height: 'auto' }}`
    - Chevron rotates 180° on expand
    - `role="button"`, `aria-expanded`, `aria-controls` attributes
    - Enter/Space keyboard toggle support
    - _Requirements: 6.2, 6.3, 6.4, 6.5, 6.8, 6.9_

  - [x] 8.2 Create ExperienceAccordion component
    - Create `src/components/ExperienceAccordion.tsx` with single-expansion state management
    - `expandedId: string | null` — only one item open at a time
    - All items collapsed on initial render
    - Entries displayed in reverse chronological order
    - _Requirements: 6.1, 6.6, 6.7_

  - [ ]* 8.3 Write property tests for ExperienceAccordion
    - **Property 6: Accordion single-expansion invariant**
    - **Property 7: Accordion keyboard-click equivalence**
    - **Property 8: Collapsed accordion item displays required fields**
    - **Validates: Requirements 6.2, 6.6, 6.9**

- [ ] 9. Implement Approach and Certifications sections
  - [x] 9.1 Create ApproachSection component
    - Create `src/components/ApproachSection.tsx` with 3 PhaseCard components
    - Phase 1: "Planning & Strategy", Phase 2: "Development & Progress", Phase 3: "Launch & Validation"
    - Staggered entrance: 100–200ms delay between cards
    - Number badge, title, description (max 200 chars) per card
    - Single-column on mobile
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7_

  - [x] 9.2 Create CertificationsSection component
    - Create `src/components/CertificationsSection.tsx` with grid layout
    - Entries in reverse chronological order
    - Each entry: name, organization, date in "Month Year" format
    - Fade-up entrance animation (300–500ms)
    - Mobile: single-column, Desktop: multi-column grid (max 3 per row)
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

  - [ ]* 9.3 Write property tests for Approach and Certifications
    - **Property 5: Time-ordered lists maintain reverse chronological order**
    - **Property 12: Certification entry displays required information**
    - **Validates: Requirements 6.1, 11.1, 11.2**

- [x] 10. Implement Footer and CopyEmailButton
  - [x] 10.1 Create CopyEmailButton component
    - Create `src/components/CopyEmailButton.tsx` using `useClipboard` hook
    - State machine: idle → copied (2s) → idle, idle → error (2s) → idle
    - Uses `navigator.clipboard.writeText()` with `document.execCommand('copy')` fallback
    - _Requirements: 8.2, 8.3, 8.4, 8.5_

  - [x] 10.2 Create Footer component
    - Create `src/components/Footer.tsx` with CTA heading containing "collaborate"
    - CopyEmailButton for "umarjaved225@gmail.com"
    - Social links (GitHub, LinkedIn) with `target="_blank"` and `rel="noopener noreferrer"`
    - Copyright notice with © symbol, current year, "Umar Javed"
    - _Requirements: 8.1, 8.2, 8.6, 8.7_

  - [ ]* 10.3 Write property test for CopyEmailButton
    - **Property 9: Copy-to-clipboard state machine transitions**
    - **Validates: Requirements 8.3, 8.4, 8.5**

- [x] 11. Wire components together and update root layout
  - [x] 11.1 Refactor App.tsx as layout shell
    - Replace monolithic content with imported section components
    - Component ordering: Navbar → HeroSection → BentoGridAbout → ProjectsSection → TestimonialsMarquee → ExperienceAccordion → ApproachSection → CertificationsSection → Footer
    - Remove old inline data arrays (PROJECTS, SKILLS) since they're now in data files
    - Ensure dark theme base styles are preserved in `index.css`
    - _Requirements: 10.1, 10.2, 10.3_

  - [x] 11.2 Update index.css with marquee keyframes and theme tokens
    - Add `@keyframes marquee` CSS animation
    - Verify Tailwind CSS 4 theme configuration with font fallback stack
    - Ensure `font-display: swap` on Google Fonts import
    - _Requirements: 5.5, 10.1, 10.4, 10.7_

- [x] 12. Checkpoint - Full integration verification
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Accessibility and responsive polish
  - [x] 13.1 Add accessibility attributes and responsive fixes
    - Verify all interactive elements have 44x44px min touch targets on mobile
    - Ensure WCAG AA contrast (4.5:1 normal text, 3:1 large text) on dark background
    - Add ARIA attributes to accordion, nav, and interactive components
    - Verify no content overflow or horizontal scrollbar at 320px, 768px, 1024px, 1440px
    - _Requirements: 10.2, 10.5, 10.6, 6.9_

  - [ ]* 13.2 Write integration tests for accessibility and responsiveness
    - Test keyboard navigation through accordion and nav
    - Verify responsive layout classes at all breakpoints
    - _Requirements: 10.2, 10.5, 10.6_

- [x] 14. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The existing `App.tsx` data (PROJECTS, SKILLS) is preserved and retyped in the data layer
- All animations respect `prefers-reduced-motion` via the `useReducedMotion` hook
- External links consistently use `target="_blank"` with `rel="noopener noreferrer"`

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["2.1", "2.2"] },
    { "id": 3, "tasks": ["2.3", "3.1", "3.2", "4.1"] },
    { "id": 4, "tasks": ["4.2", "5.1", "7.1", "8.1", "10.1"] },
    { "id": 5, "tasks": ["5.2", "7.2", "8.2", "9.1", "9.2", "10.2"] },
    { "id": 6, "tasks": ["5.3", "7.3", "8.3", "9.3", "10.3"] },
    { "id": 7, "tasks": ["11.1", "11.2"] },
    { "id": 8, "tasks": ["13.1"] },
    { "id": 9, "tasks": ["13.2"] }
  ]
}
```
