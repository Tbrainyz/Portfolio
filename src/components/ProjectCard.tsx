import { TiltCard } from "./ui/TiltCard";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { CheckIcon } from "./ui/CheckIcon";
import type { Project } from "../types";

const statusStyles = {
  live: "border-brand-green/25 bg-brand-green/10 text-brand-green",
  build: "border-amber-400/25 bg-amber-400/10 text-amber-400",
};

const statusLabel = {
  live: "Shipped",
  build: "In build",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard
      className={`h-full rounded-2xl border backdrop-blur-lg ${
        project.featured
          ? "border-brand-magenta/30 bg-gradient-to-br from-brand-amber/10 to-brand-magenta/10"
          : "border-surface/10 bg-surface/5"
      }`}
    >
      <div className="relative aspect-video bg-gradient-to-br from-brand-amber/15 to-brand-magenta/10">
        <ImageWithFallback src={project.image} alt={`${project.name} screenshot`} label="Add project screenshot" />
        {project.featured && (
          <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-gradient-to-br from-brand-amber to-brand-magenta px-3 py-1 font-mono text-[10.5px] font-semibold text-black">
            ★ Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-start justify-between gap-2.5">
          <span className="font-display text-xl font-bold tracking-tight">{project.name}</span>
          <span
            className={`flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] ${statusStyles[project.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {statusLabel[project.status]}
          </span>
        </div>

        <p className="mb-4 text-[14.5px] leading-relaxed text-dim">{project.description}</p>

        {project.features && (
          <ul className="mb-4 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-[13px] text-fg">
                <CheckIcon className="mt-0.5 text-brand-green" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-surface/10 px-2.5 py-1 font-mono text-[11px] text-dim">
              {tag}
            </span>
          ))}
        </div>

        {(project.demoUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gradient-to-br from-brand-amber to-brand-magenta px-4 py-2 text-[13px] font-semibold text-black"
              >
                Live Demo ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-surface/15 px-4 py-2 text-[13px] font-semibold"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </TiltCard>
  );
}
