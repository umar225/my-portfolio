import { certifications } from "../data/certifications";
import { AnimatedSection } from "./ui/AnimatedSection";
import { motion } from "motion/react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection>
          <p className="text-sm uppercase tracking-widest text-purple-400 mb-2">
            Professional Development
          </p>
          <h2 className="text-3xl font-bold text-white mb-10">
            Certifications
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <h3 className="font-medium text-white">{cert.name}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {cert.organization}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {cert.dateObtained}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
