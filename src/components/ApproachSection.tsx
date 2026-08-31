import { AnimatedSection } from './ui/AnimatedSection';
import type { PhaseInfo } from '../types';

const phases: PhaseInfo[] = [
  {
    number: 1,
    title: 'Planning & Strategy',
    description:
      'We define test objectives, analyze requirements, select frameworks, and plan coverage strategy to align quality with product goals.',
  },
  {
    number: 2,
    title: 'Development & Progress',
    description:
      'I build automation suites, integrate CI/CD pipelines, and iteratively test each feature, keeping you informed throughout.',
  },
  {
    number: 3,
    title: 'Launch & Validation',
    description:
      'Final regression, performance validation, accessibility audits, and release sign-off ensure confident, production-ready deployments.',
  },
];

interface PhaseCardProps {
  key?: number | string;
  phase: PhaseInfo;
  index: number;
}

function PhaseCard({ phase, index }: PhaseCardProps) {
  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center">
          {phase.number}
        </div>
        <h3 className="text-xl font-semibold text-white mt-4">{phase.title}</h3>
        <p className="text-sm text-white/70 mt-2">{phase.description}</p>
      </div>
    </AnimatedSection>
  );
}

export function ApproachSection() {
  return (
    <section id="approach" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-white/50 mb-2">
            How I Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            My Approach
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.number} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
