import Link from "next/link";
import ProjectCard from "@/ui/landing_page/ProjectCard";
import getFeaturedProjects from "@/core/server/projects/getFeaturedProjects";
import Menu from "@/ui/landing_page/Menu";
import PROJECT_WEBSITE from "@/core/data/projects";

export const revalidate = 10;

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <section>
      <Menu currentPage="PROJECTS" />
      <ul className="grid gap-[1.45rem] md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
        <li key="more">
          <Link
            href={PROJECT_WEBSITE}
            className="border border-gray-400 p-4 rounded-lg flex justify-center items-center h-full hover:border-yellow-700 hover:ring-2 hover:ring-yellow-700 hover:ring-opacity-50 hover:shadow-md hover:shadow-yellow-700 group"
          >
            <h4 className="text-gray-400 group-hover:text-yellow-700">
              More Projects
            </h4>
          </Link>
        </li>
      </ul>
    </section>
  );
}
