import { createClient, SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import SANITY_PROJECTS_ID from "../data/sanity";
import { ProjectSummary } from "../types";

/********************
 * SANITY CLIENT
 */

let client: SanityClient | null = null;

if (!client) {
  client = createClient({
    projectId: SANITY_PROJECTS_ID,
    dataset: "production",
    apiVersion: getCurrentDate(),
    useCdn: false,
  });
}

export const sanityClient = client;

/********************
 * PROJECTS
 */

export function toProjectSummary(project: any): ProjectSummary {
  return {
    id: project._id,
    name: project.name,
    slug: project.slug.current,
    featured: project.featured,
    description: project.description,
    mainImageUrl: urlFor(project.mainImage).width(500).url(),
  };
}

/********************
 * IMAGE URL BUILDER
 */

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

/********************
 * HELPERS
 */

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}
