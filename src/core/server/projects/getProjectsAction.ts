"use server";

import getProjects from "./getProjects";

export default async function getProjectsAction() {
  return await getProjects();
}
