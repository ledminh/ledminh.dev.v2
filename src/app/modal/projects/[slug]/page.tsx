import { HomeIcon } from "@/ui/icons";
import ProjectDetail from "@/ui/ProjectDetail";
import getProjectBySlug from "@/core/server/projects/getProjectBySlug";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = params;

  const project = await getProjectBySlug(slug);

  return <ProjectDetail BackIcon={<HomeIcon />} project={project} />;
}
