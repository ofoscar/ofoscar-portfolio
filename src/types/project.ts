export interface ProjectSection {
  title: string;
  description: string;
  content: string[];
  imageUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
  sections?: ProjectSection[];
}
