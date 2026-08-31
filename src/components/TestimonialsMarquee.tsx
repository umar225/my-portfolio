import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../data/testimonials";
import { AnimatedSection } from "./ui/AnimatedSection";

export default function TestimonialsMarquee() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <AnimatedSection className="max-w-7xl mx-auto mb-12">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Kind Words
        </h2>
      </AnimatedSection>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
