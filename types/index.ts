export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup =
  | "Backend"
  | "Frontend"
  | "Database"
  | "Architecture"
  | "Cloud & DevOps"
  | "Tools"
  | "AI"
  | "Professional";

export type Skill = {
  name: string;
  group: SkillGroup;
};

export type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  project: string;
  team: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  accent: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  team: string;
  duration: string;
  badge?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar?: string;
};
