# Requirements Document

## Introduction

This document defines the requirements for redesigning Umar Javed's portfolio website. The redesign transforms the existing React + Vite + Tailwind + Motion portfolio into a modern, dark-themed single-page application inspired by the Awais Portfolio reference. The new design introduces a Bento Grid layout, animated hero section, testimonial marquee, expandable work experience accordion, a 3-phase approach section, and an enhanced footer with email copy functionality.

## Glossary

- **Portfolio_App**: The single-page React application serving as Umar Javed's personal portfolio website
- **Hero_Section**: The full-viewport introductory section displayed at the top of the page containing animated text, profile introduction, and call-to-action buttons
- **Bento_Grid**: A flexible CSS grid layout where cards have varying column and row spans to create a visually dynamic mosaic arrangement
- **Project_Card**: A UI component displaying project information including title, description, technology icons, and an external link
- **Testimonial_Marquee**: A continuously scrolling horizontal carousel displaying client recommendation quotes
- **Experience_Accordion**: A vertically stacked list of work history items that expand and collapse to show details
- **Approach_Section**: A section displaying a 3-phase process describing Umar's working methodology
- **Footer**: The bottom section of the page containing a call-to-action heading, email copy button, and social links
- **Motion_Animation**: Entrance and interaction animations implemented using the Motion (Framer Motion) library
- **Copy_Email_Button**: A button that copies the email address to the user's clipboard and provides visual feedback
- **Navigation_Bar**: The fixed header component providing links to page sections
- **Visitor**: Any person viewing the portfolio website in a web browser

## Requirements

### Requirement 1: Hero Section Display

**User Story:** As a Visitor, I want to see an engaging animated introduction when I land on the portfolio, so that I immediately understand who Umar Javed is and what he does.

#### Acceptance Criteria

1. WHEN the page loads, THE Hero_Section SHALL display the name "Umar Javed" with a fade-in and upward slide animation that completes within 1000 milliseconds
2. WHEN the page loads, THE Hero_Section SHALL display the title "Senior Software Engineer in Test" with a typewriter animation effect that completes within 2000 milliseconds
3. WHEN the page loads, THE Hero_Section SHALL display a tagline of no more than 150 characters describing Umar's expertise in automation and quality engineering
4. THE Hero_Section SHALL display a circular profile image of at least 150px diameter with a border accent
5. IF the profile image fails to load, THEN THE Hero_Section SHALL display a fallback placeholder indicating the image is unavailable
6. WHEN a Visitor clicks the "Show My Work" call-to-action button, THE Hero_Section SHALL smooth-scroll the viewport to the Projects section
7. WHEN a Visitor views the Hero_Section on a viewport width below 768px, THE Hero_Section SHALL stack elements vertically with font sizes no smaller than 14px for body text and 24px for the name heading

### Requirement 2: Navigation Bar

**User Story:** As a Visitor, I want a persistent navigation bar, so that I can quickly jump to any section of the portfolio.

#### Acceptance Criteria

1. THE Navigation_Bar SHALL remain fixed at the top of the viewport during scrolling
2. WHEN the Visitor scrolls past 50px from the top, THE Navigation_Bar SHALL apply a backdrop blur background effect
3. THE Navigation_Bar SHALL display links to About, Projects, Testimonials, Experience, Certifications, and Contact sections
4. WHEN a Visitor clicks a navigation link, THE Portfolio_App SHALL smooth-scroll to the corresponding section over a duration between 300ms and 800ms
5. THE Navigation_Bar SHALL visually highlight the link corresponding to the section currently in the viewport
6. WHEN a Visitor views the page on a viewport width below 768px, THE Navigation_Bar SHALL collapse links into a hamburger menu
7. WHEN a Visitor clicks the hamburger menu icon, THE Navigation_Bar SHALL display a full-screen overlay with navigation links
8. WHEN a Visitor clicks a navigation link within the mobile overlay, THE Navigation_Bar SHALL dismiss the overlay and smooth-scroll to the target section

### Requirement 3: Bento Grid About Section

**User Story:** As a Visitor, I want to see a visually dynamic grid of information cards, so that I can quickly learn about Umar's background, skills, and availability.

#### Acceptance Criteria

1. THE Bento_Grid SHALL display a minimum of 5 cards arranged in a flexible grid with at least 2 distinct column/row span configurations to create visual variety
2. THE Bento_Grid SHALL include a card displaying Umar's collaboration approach and willingness to work with teams
3. THE Bento_Grid SHALL include a card displaying timezone flexibility information
4. THE Bento_Grid SHALL include a card displaying the primary tech stack with recognizable technology icons for Playwright, TypeScript, Cypress, JavaScript, Docker, and CI/CD tools
5. THE Bento_Grid SHALL include a card displaying a passion statement about quality engineering
6. THE Bento_Grid SHALL include a card displaying a bio summary with the profile image
7. THE Bento_Grid SHALL include a card displaying a contact call-to-action with a copy email button
8. WHEN a Visitor views the Bento_Grid on a viewport width below 768px, THE Bento_Grid SHALL reflow cards into a single-column layout
9. WHEN a Visitor hovers over a Bento_Grid card, THE card SHALL apply a scale transform between 1.01 and 1.05 or a border-glow effect within 300ms

### Requirement 4: Projects Section

**User Story:** As a Visitor, I want to browse Umar's project portfolio, so that I can evaluate his professional experience and the types of projects he has tested.

#### Acceptance Criteria

1. THE Projects section SHALL display all 7 projects as individual Project_Card components arranged in a multi-column grid (2 columns at 768px and above, 3 columns at 1024px and above)
2. EACH Project_Card SHALL display the project title (maximum 60 characters), a description (maximum 150 characters), and between 1 and 5 technology skill tags
3. WHEN a project has an external link, THE Project_Card SHALL display a "Check Live Site" button that opens the link in a new browser tab using target="_blank" with rel="noopener noreferrer"
4. WHEN a Visitor hovers over a Project_Card, THE Project_Card SHALL apply a vertical translate of at least 2px upward and a visible border color change within 300ms
5. WHEN a Project_Card enters the viewport during scrolling, THE Project_Card SHALL animate in with a fade-up entrance effect having a duration between 200ms and 600ms, triggered once per card
6. WHEN a Visitor views the Projects section on a viewport width below 768px, THE Projects section SHALL display cards in a single-column layout
7. IF a project does not have an external link, THEN THE Project_Card SHALL omit the "Check Live Site" button and display only the project title, description, and tags

### Requirement 5: Testimonials Marquee

**User Story:** As a Visitor, I want to see peer recommendations in a scrolling format, so that I can understand how colleagues perceive Umar's work quality and collaboration.

#### Acceptance Criteria

1. THE Testimonial_Marquee SHALL display all 8 testimonial quotes in a continuously scrolling right-to-left horizontal animation
2. EACH testimonial item SHALL display the recommender's name, their job title, and the quote text
3. THE Testimonial_Marquee SHALL scroll automatically without requiring Visitor interaction
4. WHEN a Visitor hovers over the Testimonial_Marquee, THE scrolling animation SHALL pause, and WHEN the Visitor moves the pointer away, THE scrolling animation SHALL resume from the paused position
5. THE Testimonial_Marquee SHALL loop seamlessly without visible gaps or jump resets
6. WHEN a Visitor views the section on a viewport width below 768px, THE Testimonial_Marquee SHALL maintain horizontal scrolling with each testimonial card rendered at a minimum width of 280px

### Requirement 6: Work Experience Accordion

**User Story:** As a Visitor, I want to review Umar's work history in a compact expandable format, so that I can explore relevant experience without excessive scrolling.

#### Acceptance Criteria

1. THE Experience_Accordion SHALL list all work experience entries in reverse chronological order
2. EACH accordion item SHALL display the company name, job title, and date range in the collapsed state
3. WHEN a Visitor clicks an accordion item, THE Experience_Accordion SHALL expand that item to reveal bullet-point responsibilities and achievements
4. WHEN a Visitor clicks an already expanded accordion item, THE Experience_Accordion SHALL collapse that item
5. WHEN an accordion item expands or collapses, THE Experience_Accordion SHALL animate the height transition over a duration between 200ms and 400ms
6. THE Experience_Accordion SHALL allow only one item to be expanded at a time, collapsing any previously open item
7. WHEN the page first loads, THE Experience_Accordion SHALL render all items in the collapsed state
8. EACH accordion item SHALL display a visual indicator (chevron or plus/minus icon) showing whether it is expanded or collapsed
9. WHEN a Visitor presses Enter or Space on a focused accordion item, THE Experience_Accordion SHALL toggle that item's expanded state

### Requirement 7: Approach Section

**User Story:** As a Visitor, I want to understand Umar's working methodology, so that I can evaluate his process for delivering quality assurance.

#### Acceptance Criteria

1. THE Approach_Section SHALL display exactly 3 phases in a numbered card layout
2. THE Approach_Section SHALL display Phase 1 titled "Planning & Strategy" describing test planning, requirement analysis, and framework selection
3. THE Approach_Section SHALL display Phase 2 titled "Development & Progress" describing automation development, CI/CD integration, and iterative testing
4. THE Approach_Section SHALL display Phase 3 titled "Launch & Validation" describing final regression, performance validation, and release sign-off
5. EACH phase card SHALL display a phase number badge, a heading title, and a descriptive paragraph of no more than 200 characters
6. WHEN a phase card enters the viewport during scrolling, THE phase card SHALL animate in with a staggered entrance effect where each subsequent card is delayed by 100ms to 200ms relative to the previous card
7. WHEN a Visitor views the Approach_Section on a viewport width below 768px, THE phase cards SHALL stack vertically in a single-column layout

### Requirement 8: Footer with Contact Actions

**User Story:** As a Visitor, I want a clear way to contact Umar and connect on social platforms, so that I can reach out for collaboration.

#### Acceptance Criteria

1. THE Footer SHALL display a call-to-action heading that contains the word "collaborate" or "contact" and is rendered as a heading element visible without scrolling within the footer section
2. THE Footer SHALL display a Copy_Email_Button showing the email address "umarjaved225@gmail.com"
3. WHEN a Visitor clicks the Copy_Email_Button, THE Portfolio_App SHALL copy the email address "umarjaved225@gmail.com" to the system clipboard
4. IF the clipboard copy operation fails, THEN THE Copy_Email_Button SHALL display an error indication for 2 seconds before reverting to displaying the email address
5. WHEN the email is successfully copied, THE Copy_Email_Button SHALL display a "Copied!" confirmation text for 2 seconds before reverting to displaying the email address
6. THE Footer SHALL display social links for GitHub (https://github.com/umar225) and LinkedIn (https://www.linkedin.com/in/umar-javed/) that open in new browser tabs
7. THE Footer SHALL display a copyright notice containing the symbol "©", the current four-digit year, and the name "Umar Javed"

### Requirement 9: Motion Animations and Transitions

**User Story:** As a Visitor, I want smooth animations throughout the portfolio, so that the browsing experience feels polished and professional.

#### Acceptance Criteria

1. WHEN a major section (Hero, About, Projects, Testimonials, Experience, Certifications, or Contact) enters the viewport, THE Portfolio_App SHALL play an entrance animation using the Motion library that transitions the section from an invisible state (opacity 0) to a visible state (opacity 1) with a positional shift of no more than 30 pixels
2. THE Portfolio_App SHALL implement hover animations on interactive elements (buttons, cards, and links) that produce a visible change in at least one CSS property (such as scale, background-color, opacity, or border-color) within 300ms of the pointer entering the element
3. THE Portfolio_App SHALL apply a staggered animation delay of 50ms to 150ms per item to list items and grid children so that each subsequent sibling begins its entrance animation after the preceding sibling
4. WHEN a Motion_Animation plays, THE animation duration SHALL remain between 200ms and 800ms to maintain perceived responsiveness
5. THE Portfolio_App SHALL use the viewport intersection observer with a `once: true` configuration to trigger entrance animations only the first time elements scroll into view
6. IF a Visitor has enabled the `prefers-reduced-motion: reduce` media query in their operating system, THEN THE Portfolio_App SHALL suppress all transform and opacity transition animations and display content in its final state without motion
7. WHEN the page initially loads, THE Portfolio_App SHALL play entrance animations for above-the-fold content (Hero section and navigation) immediately without requiring a scroll event

### Requirement 10: Responsive Design and Dark Theme

**User Story:** As a Visitor, I want the portfolio to display correctly on all device sizes with a consistent dark aesthetic, so that I have a comfortable viewing experience.

#### Acceptance Criteria

1. THE Portfolio_App SHALL use a dark color scheme with a near-black background (#0a0a0a or similar) and light text as the default theme
2. THE Portfolio_App SHALL be fully functional and visually correct at viewport widths of 320px, 768px, 1024px, and 1440px, where visually correct means no content overflow or horizontal scrollbar, no overlapping elements, no text truncation that hides information, and all interactive elements remaining accessible and operable
3. THE Portfolio_App SHALL use Tailwind CSS utility classes for all responsive breakpoint adaptations
4. THE Portfolio_App SHALL load custom fonts and render the initial viewport content within 3 seconds on a simulated 4G connection (9 Mbps download, 1.5 Mbps upload, 50ms RTT)
5. WHILE the viewport width is below 768px, THE Portfolio_App SHALL ensure all interactive elements have a minimum touch target size of 44x44 pixels
6. THE Portfolio_App SHALL maintain a minimum color contrast ratio of 4.5:1 between normal-size text and background elements, and 3:1 between large text (18pt or 14pt bold and above) and background elements, for WCAG AA compliance
7. IF custom fonts fail to load within 3 seconds, THEN THE Portfolio_App SHALL render all text using a system fallback font stack without blocking the display of content

### Requirement 11: Certifications Display

**User Story:** As a Visitor, I want to see Umar's professional certifications, so that I can verify his continued investment in professional development.

#### Acceptance Criteria

1. THE Portfolio_App SHALL display a certifications section listing all professional certifications in reverse chronological order (most recently obtained first)
2. EACH certification entry SHALL display the certification name (up to 100 characters), issuing organization, and date obtained in "Month Year" format (e.g., "April 2026")
3. WHEN a certification entry enters the viewport, THE entry SHALL animate in with a fade-up effect over a duration between 300ms and 500ms
4. WHILE the viewport width is below 768px, THE certifications section SHALL display entries in a single-column stacked layout
5. WHILE the viewport width is 768px or above, THE certifications section SHALL display entries in a multi-column grid layout with no more than 3 entries per row
