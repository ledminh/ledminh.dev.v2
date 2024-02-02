/****************************
 * Project Types
 */

export type Tech = {
  id: string;
  name: string;
};

export type Screenshot = {
  id: string;
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  featured: boolean;
  name: string;
  slug: string;
  description: string;
  github: string;
  demo: string;
  mainImageUrl: string;
  techStack: Tech[];
  detailHTML: string;
  screenshots: Screenshot[];
};

export type ProjectSummary = {
  id: string;
  name: string;
  slug: string;
  featured: boolean;
  description: string;
  mainImageUrl: string;
};

/****************************
 * Journal Types
 */

export type LearningJournal = {
  id: string;
  title: string;
  date: string;
  link: string;
  description: string;
};
