import Link from "next/link";
import getProjects from "@/core/server/projects/getProjects";

import Image from "next/image";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="absolute top-0 left-0 w-full h-screen bg-black z-50 flex justify-center">
      <div className="w-full h-full flex flex-col gap-8 max-w-5xl lg:border lg:border-gray-200 lg:mx-2 rounded-lg">
        <header className="flex flex-col gap-4 lg:pt-4 sticky top-0 z-50 bg-black rounded-t-lg">
          <h1 className="sm:text-6xl md:text-6xl lg:text-6xl px-2">Projects</h1>
          <p className="text-sm font-semibold border-y border-y-gray-300 bg-gray-800 p-4">
            All the projects I consider notable are already featured on the
            homepage. I aim to make this page as exhaustive list of all the
            projects I've ever created.
          </p>
        </header>
        <main className="px-4 pb-4 overflow-y-scroll">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project) => (
              <li key={project.id} className="h-full">
                <Link
                  className="grid h-full border border-gray-400 p-4 rounded-lg hover:border-yellow-700 hover:ring-2 hover:ring-yellow-700 hover:ring-opacity-50 hover:shadow-md hover:shadow-yellow-700 group relative overflow-hidden"
                  href={`/projects/${project.slug}`}
                >
                  <Image
                    src={project.mainImageUrl}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="absolute top-0 left-0 w-full h-full rounded-lg -z-10 hidden md:block opacity-60"
                  />
                  <div className="bg-black/60 group-hover:bg-black/90 p-4 rounded-lg grid">
                    <h2 className="group-hover:text-yellow-500">
                      {project.name}
                    </h2>
                    <p className="group-hover:text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </section>
  );
}
