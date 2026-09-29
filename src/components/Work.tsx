import { Reveal } from "./ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { OpenSlotCard } from "./OpenSlotCard";
import { projects } from "../data/projects";

export function Work() {
  return (
    <section id="work" className="relative z-[3] px-7 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="mb-2.5 block font-mono text-xs tracking-wide text-brand-magenta">SELECTED WORK</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Things I've shipped</h2>
          <p className="mt-3 max-w-lg text-dim">
            Production apps built end to end, from database schema to payments to deploy.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 gap-5">
          {projects.map((project) => (
            <Reveal
              key={project.id}
              className={project.size === "large" ? "col-span-3 lg:col-span-2" : "col-span-3 lg:col-span-1"}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}

          <Reveal className="col-span-3 lg:col-span-1">
            <OpenSlotCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
