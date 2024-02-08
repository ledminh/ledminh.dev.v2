import { sanityClient, toProjectSummary } from "@/core/utils/sanity";
import { ProjectSummary } from "@/core/types";

export default async function getFeaturedProjects(): Promise<ProjectSummary[]> {
  const projectsSanity = await sanityClient.fetch(
    `*[_type == "project" && featured == true] | order(priority) {_id, name, slug, featured, description, mainImage}`
  );

  const projects = projectsSanity.map(toProjectSummary);

  return Promise.resolve(projects);
}
