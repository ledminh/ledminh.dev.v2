"use client";

import ProjectDetail from "@/ui/ProjectDetail";
import { CloseIcon } from "@/ui/icons";
import { useEffect, useState } from "react";

import { Project as ProjectType } from "@/core/types";

import getProjectBySlugAction from "@/core/server/projects/getProjectBySlugAction";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectModalPage({ params }: Props) {
  const { slug } = params;

  const [project, setProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    (async () => {
      const project = await getProjectBySlugAction(slug);

      setProject(project);
    })();
  }, [slug]);

  return project ? (
    <ProjectDetail BackIcon={<CloseIcon />} project={project} />
  ) : null;
}
