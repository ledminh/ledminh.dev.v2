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
  name: string;
  slug: string;
  github: string;
  demo: string;
  mainImageUrl: string;
  techStack: Tech[];
  detailHTML: string;
  screenshots: Screenshot[];
};
