import type { Project as ProjectType } from "@/core/types";

export default async function getProjectBySlug(
  slug: string
): Promise<ProjectType> {
  const project: ProjectType = {
    id: "project-1",
    priority: 1,
    name: "Project Name",
    slug: "project-name",
    featured: false,
    description:
      "This is a project named Project Name. It is a very interesting project.",
    github: "https://www.github.com/ledminh/learning-journal",
    demo: "https://www.github.com/ledminh/learning-journal",
    mainImageUrl: "https://picsum.photos/500/500",
    techStack: [
      { id: "tech-1", name: "React" },
      { id: "tech-2", name: "Tailwind" },
      { id: "tech-3", name: "TypeScript" },
      { id: "tech-4", name: "Next.js" },
      { id: "tech-5", name: "Vercel" },
    ],
    detailHTML: `
  <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
        voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam.
      </p>
  `,
    screenshots: Array.from({ length: 6 }).map((_, index) => ({
      id: "screen-" + index,
      src: "https://picsum.photos/500/500",
      alt: "Landing Page",
    })),
  };

  return Promise.resolve(project);
}
