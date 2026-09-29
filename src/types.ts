export type ProjectStatus = "live" | "build";
export type ProjectSize = "large" | "small";

export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  image?: string;
  size: ProjectSize;
  /** Marks this as the flagship project — gets a bigger visual treatment. */
  featured?: boolean;
  /** Shown as a checklist above the tags, only on featured projects. */
  features?: string[];
  /** Leave undefined until you have a real URL — the button just won't render. */
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
