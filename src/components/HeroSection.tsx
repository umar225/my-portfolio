import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import profileImg from '../assets/profile.jpg';

/**
 * HeroSection — Full-viewport introductory section with animated name,
 * typewriter title, tagline, profile image, CTA buttons, and bouncing chevron.
 *
 * Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 9.7
 */
export function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleShowWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetInTouch = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        {/* Profile Image with onError fallback to gradient placeholder */}
        {imageError ? (
          <div className="w-40 h-40 md:w-48 md:h-48 min-w-[150px] min-h-[150px] rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-2 border-white/10">
            <span className="text-2xl md:text-3xl font-bold text-white/80">
              UJ
            </span>
          </div>
        ) : (
          <img
            src={profileImg}
            alt="Umar Javed"
            className="w-40 h-40 md:w-48 md:h-48 min-w-[150px] min-h-[150px] rounded-full object-cover border-2 border-white/10"
            onError={() => setImageError(true)}
          />
        )}

        {/* Name with fade-in + slide-up animation (duration 0.8s) */}
        {prefersReducedMotion ? (
          <h1 className="text-4xl md:text-6xl font-bold text-white min-text-[24px]">
            Umar Javed
          </h1>
        ) : (
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Umar Javed
          </motion.h1>
        )}

        {/* Title with typewriter clip/reveal animation over 2s */}
        {prefersReducedMotion ? (
          <p className="text-base md:text-xl text-purple-300 font-medium">
            Senior Software Engineer in Test
          </p>
        ) : (
          <motion.p
            className="text-base md:text-xl text-purple-300 font-medium overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 0.8, ease: 'easeInOut' }}
          >
            Senior Software Engineer in Test
          </motion.p>
        )}

        {/* Tagline with fade-in (delay 0.4s) — under 150 chars */}
        {prefersReducedMotion ? (
          <p className="text-base md:text-lg text-gray-400 max-w-md">
            Delivering reliable software through scalable automation frameworks
            and rigorous quality engineering.
          </p>
        ) : (
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Delivering reliable software through scalable automation frameworks
            and rigorous quality engineering.
          </motion.p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={handleShowWork}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200 min-h-[44px] min-w-[44px]"
          >
            Show My Work
          </button>
          <button
            onClick={handleGetInTouch}
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-white/50 transition-colors duration-200 min-h-[44px] min-w-[44px]"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Bouncing Chevron at bottom with infinite y animation */}
      {prefersReducedMotion ? (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      ) : (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      )}
    </section>
  );
}
