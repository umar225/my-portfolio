import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  key?: string;
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-white/25 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      {/* Image area */}
      <div className="aspect-[4/3] overflow-hidden rounded-2xl m-2">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = "none";
            const placeholder = target.nextElementSibling as HTMLElement;
            if (placeholder) placeholder.style.display = "flex";
          }}
        />
        <div
          className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 items-center justify-center hidden"
          aria-hidden="true"
        >
          <span className="text-white/50 text-sm font-medium text-center px-4">
            {project.title}
          </span>
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-xl font-medium text-white">{project.title}</h3>

        <p className="text-sm text-white/60 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Conditional "Check Live Site" link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mt-2 transition-colors duration-200"
          >
            Check Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
