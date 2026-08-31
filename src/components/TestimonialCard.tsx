import { Quote } from "lucide-react";
import type { Testimonial } from "../types";

interface TestimonialCardProps {
  key?: string;
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="min-w-[280px] md:min-w-[350px] p-6 bg-white/5 border border-white/10 rounded-2xl flex-shrink-0">
      <Quote className="w-5 h-5 text-purple-400 mb-3 opacity-60" />
      <p className="text-sm text-gray-300 italic mb-4 leading-relaxed">
        "{testimonial.quote}"
      </p>
      <div className="mt-auto">
        <p className="font-medium text-white">{testimonial.name}</p>
        <p className="text-xs text-gray-400">{testimonial.title}</p>
      </div>
    </div>
  );
}
