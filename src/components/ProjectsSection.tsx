import { ProjectCard } from "./ProjectCard";
import { projects } from "../data/projects";
import { AnimatedSection } from "./ui/AnimatedSection";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
            Selected Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
