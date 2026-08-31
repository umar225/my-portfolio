import { CopyEmailButton } from './CopyEmailButton';
import { Github, Linkedin } from 'lucide-react';
import { AnimatedSection } from './ui/AnimatedSection';

/**
 * Footer — Contact section with CTA heading, copy-email button,
 * social links (GitHub & LinkedIn), and copyright notice.
 *
 * Validates: Requirements 8.1, 8.2, 8.6, 8.7
 */
export function Footer() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-zinc-950 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's collaborate on your next project
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Have a project in mind or want to discuss quality engineering? Reach out
            and let's build something great together.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-10">
            <CopyEmailButton email="umarjaved225@gmail.com" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com/umar225"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/60 hover:text-white transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/umar-javed/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/60 hover:text-white transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] inline-flex items-center justify-center"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </AnimatedSection>

        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Umar Javed. All rights reserved.
        </p>
      </div>
    </section>
  );
}
