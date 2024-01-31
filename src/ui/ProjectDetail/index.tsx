"use client";

import Image from "next/image";
import { useRef, UIEventHandler } from "react";

import Wrapper from "./Wrapper";
import TechStack from "./TechStack";
import Links from "./Links";
import ProjectHeader from "./ProjectHeader";
import Detail from "./Detail";
import Screenshots from "./Screenshots";

import { Project as ProjectType } from "@/core/types";

type Props = {
  BackIcon: React.ReactNode;
};

export default function ProjectDetail({ BackIcon }: Props) {
  const linkDiv = useRef<HTMLDivElement>(null);
  const infoDiv = useRef<HTMLDivElement>(null);
  const headerDiv = useRef<HTMLDivElement>(null);

  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    if (linkDiv.current && infoDiv.current && headerDiv.current) {
      const infoTop = infoDiv.current.getBoundingClientRect().top;
      const headerBottom = headerDiv.current.getBoundingClientRect().bottom;

      if (infoTop < headerBottom) {
        linkDiv.current.style.opacity = (headerBottom - infoTop) / 100 + "";
        linkDiv.current.style.display = "flex";
      } else {
        linkDiv.current.style.opacity = "0";
        linkDiv.current.style.display = "none";
      }
    }
  };

  const project: ProjectType = {
    id: "project-1",
    name: "Project Name",
    slug: "project-name",
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

  return (
    <Wrapper BackIcon={BackIcon}>
      <div
        className="bg-gray-700 w-full h-full md:w-3/4 flex flex-col gap-4 max-w-3xl p-2 pt-0 overflow-y-scroll relative"
        onScroll={onScroll}
      >
        <div className="sticky top-0 w-full">
          <div className="bg-gray-700 pt-4" ref={headerDiv}>
            <ProjectHeader name={project.name} />
          </div>
          <div
            className="bg-gray-800 w-full h-12 flex-row justify-between items-center pl-2 sticky opacity-0 hidden"
            ref={linkDiv}
          >
            <Links github={project.github} demo={project.demo} />
          </div>
        </div>
        <div className="flex flex-col gap-8 sm:gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
          <Image
            src={project.mainImageUrl}
            alt={project.name}
            width={500}
            height={500}
            className="rounded-lg basis-full m-auto sm:basis-[48%]"
          />
          <div className="p-2 border-4 border-gray-500 rounded-md flex flex-col gap-4 sm:basis-[48%] sm:border-transparent">
            <h3>INFO</h3>
            <div ref={infoDiv}>
              <Links github={project.github} demo={project.demo} />
            </div>
            <TechStack techStack={project.techStack} />
          </div>
          <Detail detailHTML={project.detailHTML} />
          <Screenshots screenshots={project.screenshots} />
        </div>
      </div>
    </Wrapper>
  );
}
