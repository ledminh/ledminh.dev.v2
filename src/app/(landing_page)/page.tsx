import Link from "next/link";
import ProjectCard from "@/ui/landing_page/ProjectCard";
import getProjects from "@/core/server/functions/getProjects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <ul className="flex gap-4 flex-wrap justify-between items-stretch">
      {projects.map((project) => (
        <li key={project.id} className="basis-full sm:basis-[48%]">
          <ProjectCard {...project} />
        </li>
      ))}
      <li key="more" className="basis-full sm:basis-[48%]">
        <Link
          href="/projects"
          className="border border-gray-400 p-4 rounded-lg flex justify-center items-center h-full hover:border-yellow-800 hover:ring-2 hover:ring-yellow-800 hover:ring-opacity-50 hover:shadow-md hover:shadow-yellow-800"
        >
          <h4 className="text-yellow-700">More Projects</h4>
        </Link>
      </li>
    </ul>
  );
}
