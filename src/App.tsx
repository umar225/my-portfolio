import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { BentoGridAbout } from "./components/BentoGridAbout";
import { ProjectsSection } from "./components/ProjectsSection";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import { ExperienceAccordion } from "./components/ExperienceAccordion";
import { ApproachSection } from "./components/ApproachSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <BentoGridAbout />
        <ProjectsSection />
        <TestimonialsMarquee />
        <ExperienceAccordion />
        <ApproachSection />
        <CertificationsSection />
        <Footer />
      </main>
    </div>
  );
}
