import getProjects from "@/core/server/projects/getProjects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="w-full min-h-screen gap-4 flex flex-col p-2">
      <h1>Projects</h1>
      <p>
        All the projects I consider notable are already featured on the
        homepage. I aim to make this page as exhaustive list of all the projects
        I've ever created.
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
