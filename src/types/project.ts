export interface ProjectSection {
  title: string;
  description: string;
  content: string[];
  imageUrl?: string;
}

export interface ProjectReview {
  rating: number; // 1-5 stars
  reviewerName: string;
  comment: string;
  imageUrl?: string;
}

export interface Project {
  starred?: boolean; // Optional field to indicate if the project is starred
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
  review?: ProjectReview;
  logo?: string;
}
