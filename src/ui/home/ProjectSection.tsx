import getProjects from "@/core/server_actions/getProjects";
import Link from "next/link";

const ProjectSection: React.FC = async () => {
  const projects = await getProjects();

  return (
    <section className="">
      <h2 className="border-b-2 pb-2">PROJECTS</h2>
      <ul className="flex gap-2 flex-wrap justify-between">
        {projects.map((project) => (
          <li key={project.id} className="basis-full sm:basis-[48%]">
            <ProjectCard {...project} />
          </li>
        ))}
        <li key="more" className="basis-full sm:basis-[48%]">
          <div className="border border-gray-400 p-4 rounded-lg">
            <h4 className="text-yellow-700">More Projects</h4>
            <p className="mb-3">
              See more projects on my{" "}
              <Link
                href="/projects"
                className="border-b-4 border-b-yellow-800 hover:border-b-yellow-500"
              >
                Projects Page
              </Link>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ProjectSection;

/***********************
 * Components
 */
const ProjectCard: React.FC<{
  name: string;
  description: string;
  github: string;
  demo: string;
  imgUrl: string;
}> = ({ name, description, github, demo, imgUrl }) => {
  return (
    <div className="border border-gray-400 p-4 rounded-lg">
      <h4 className="text-yellow-700">{name}</h4>
      <p className="mb-3">{description}</p>
      <div className="flex justify-start gap-4">
        <Link
          href={github}
          className="border-b-4 border-b-yellow-800 hover:border-b-yellow-500"
        >
          Github
        </Link>
        <Link
          href={demo}
          className="border-b-4 border-b-yellow-800 hover:border-b-yellow-500"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};
