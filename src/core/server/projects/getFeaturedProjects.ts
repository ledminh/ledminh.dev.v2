import { ProjectSummary } from "@/core/types";

export default function getFeaturedProjects(): Promise<ProjectSummary[]> {
  const projects = [
    createRandomProjectSummary(),
    createRandomProjectSummary(),
    createRandomProjectSummary(),
    createRandomProjectSummary(),
    createRandomProjectSummary(),
  ];

  return Promise.resolve(projects);
}

// create random ProjectSummary data with name is something like "Project 122"
function createRandomProjectSummary(): ProjectSummary {
  const name = `Project ${Math.floor(Math.random() * 1000)}`;
  const slug = name.toLowerCase().replace(/\s/g, "-");

  const description = `This is a project named ${name}. It is a very interesting project.`;

  return {
    id: `p-${Math.random()}`,
    name,
    slug,
    featured: true,
    description,
    mainImageUrl: `https://picsum.photos/300/300?random=${Math.random()}`,
  };
}
