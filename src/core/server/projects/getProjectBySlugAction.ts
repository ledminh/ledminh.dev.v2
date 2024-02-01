"use server";

import getProjectBySlug from "./getProjectBySlug";

export default async function getProjectBySlugAction(slug: string) {
  return await getProjectBySlug(slug);
}
