import { BentoCard } from './BentoCard';
import { CopyEmailButton } from './CopyEmailButton';
import { AnimatedSection } from './ui/AnimatedSection';

const TECH_STACK = [
  'Playwright',
  'TypeScript',
  'Cypress',
  'JavaScript',
  'Docker',
  'Jenkins',
  'GitHub Actions',
];

/**
 * BentoGridAbout — a visually dynamic "About Me" section using a Bento Grid layout.
 * Contains 6 cards with varying col/row spans for visual variety.
 *
 * Desktop (md+): 3-column grid with 2 distinct span configurations.
 * Mobile (<768px): Single-column reflow.
 */
export function BentoGridAbout() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          About Me
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Bio + Profile Image — spans 2 cols, 2 rows on desktop */}
        <AnimatedSection delay={0}>
          <BentoCard colSpan="md:col-span-2" rowSpan="md:row-span-2">
            <div className="flex flex-col md:flex-row items-center gap-6 h-full">
              <img
                src="/IMG-20231226-WA0006.jpg"
                alt="Umar Javed profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const placeholder = target.nextElementSibling as HTMLElement | null;
                  if (placeholder) placeholder.style.display = 'flex';
                }}
              />
              <div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 items-center justify-center flex-shrink-0 hidden"
                aria-hidden="true"
              >
                <span className="text-2xl font-bold text-white/60">UJ</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Umar Javed
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  SDET with 8+ years of experience designing scalable automation
                  frameworks using Playwright and TypeScript. Passionate about
                  building reliable test infrastructure that empowers teams to
                  ship with confidence.
                </p>
              </div>
            </div>
          </BentoCard>
        </AnimatedSection>

        {/* Card 2: Collaboration — 1 col */}
        <AnimatedSection delay={0.1}>
          <BentoCard colSpan="md:col-span-1">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-lg font-semibold text-white mb-3">
                🤝 Collaboration
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                I prioritize collaboration, fostering open communication with
                development teams to ensure quality is built into the process
                from day one.
              </p>
            </div>
          </BentoCard>
        </AnimatedSection>

        {/* Card 3: Timezone — 1 col */}
        <AnimatedSection delay={0.15}>
          <BentoCard colSpan="md:col-span-1">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-lg font-semibold text-white mb-3">
                🌍 Timezone
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                I&apos;m flexible with time zones — currently based in Pakistan
                (PKT/UTC+5) and available for international collaboration.
              </p>
            </div>
          </BentoCard>
        </AnimatedSection>

        {/* Card 4: Tech Stack — spans 2 cols */}
        <AnimatedSection delay={0.2}>
          <BentoCard colSpan="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">
              ⚡ Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-sm border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </BentoCard>
        </AnimatedSection>

        {/* Card 5: Quality Passion — 1 col */}
        <AnimatedSection delay={0.25}>
          <BentoCard colSpan="md:col-span-1">
            <div className="flex flex-col justify-center h-full">
              <h3 className="text-lg font-semibold text-white mb-3">
                🎯 Quality First
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Quality enthusiast with a passion for building reliable
                engineering systems that enable fast, confident releases.
              </p>
            </div>
          </BentoCard>
        </AnimatedSection>

        {/* Card 6: Contact CTA — 1 col */}
        <AnimatedSection delay={0.3}>
          <BentoCard colSpan="md:col-span-1">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h3 className="text-lg font-semibold text-white mb-3">
                📬 Get In Touch
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Want to collaborate?
              </p>
              <CopyEmailButton email="umarjaved225@gmail.com" />
            </div>
          </BentoCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
