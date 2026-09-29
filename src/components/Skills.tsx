import { Reveal } from "./ui/Reveal";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative z-[3] px-7 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12">
          <span className="mb-2.5 block font-mono text-xs tracking-wide text-brand-magenta">SKILLS</span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Technologies I work with</h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <Reveal key={category.name}>
              <div className="h-full rounded-2xl border border-surface/10 bg-surface/5 p-7 backdrop-blur-lg">
                <div className="mb-4 font-display text-lg font-bold text-brand-magenta">{category.name}</div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-surface/10 bg-surface/5 px-3 py-1.5 text-[13.5px] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
