"use client";

import { useRouter } from "next/navigation";
import { CloseIcon } from "@/ui/icons";
import Image from "next/image";
import Link from "next/link";
import { useRef, UIEventHandler } from "react";

export default function ProjectDetail() {
  const techStack = [
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "Supabase",
    "Postgresql",
  ];

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

  return (
    <div
      className="bg-gray-700 w-full h-full md:w-3/4 flex flex-col gap-4 max-w-3xl p-2 pt-0 overflow-y-scroll relative"
      onScroll={onScroll}
    >
      <div className="sticky top-0 w-full">
        <div className="bg-gray-700 pt-4" ref={headerDiv}>
          <ProjectHeader />
        </div>
        <div
          className="bg-gray-600 w-full h-12 flex-row justify-between items-center pl-2 sticky opacity-0 hidden"
          ref={linkDiv}
        >
          <Links />
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-between">
        <Image
          src="https://picsum.photos/500/500"
          alt="Landing Page"
          width={500}
          height={500}
          className="rounded-lg basis-full m-auto sm:basis-[48%]"
        />
        <div className="p-2 border-4 border-gray-500 rounded-md flex flex-col gap-4 sm:basis-[48%] sm:border-transparent">
          <h3>INFO</h3>
          <div ref={infoDiv}>
            <Links />
          </div>
          <TechStack techStack={techStack} />
        </div>

        <div className="text-lg flex flex-col gap-2">
          <h3>DETAIL</h3>
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
        </div>
        <div>
          <h3>SCREENSHOTS</h3>
          <ul className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, index) => {
              return (
                <li key={index}>
                  <Image
                    src="https://picsum.photos/500/500"
                    alt="Landing Page"
                    width={500}
                    height={500}
                    className="rounded-lg w-20 h-20"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

/**********************
 * Sub-components
 */
const ProjectHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center border-b-4 border-b-gray-300 pb-3">
      <h2>Project Name HERE</h2>
      <button
        className="text-white rounded-lg hover:text-yellow-500 active:text-yellow-700 md:hidden"
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

const Links = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href="https://www.github.com/ledminh/learning-journal"
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href="https://www.github.com/ledminh/learning-journal"
        >
          Demo
        </Link>
      </li>
    </ul>
  );
};

const TechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-white font-bold text-lg">Tech stack:</span>{" "}
      <ul className="flex gap-2 flex-wrap">
        {techStack.map((tech, index) => {
          return (
            <li key={index}>
              <TechTab>{tech}</TechTab>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const TechTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-gray-600 rounded-md font-semibold px-2 py-1 text-sm">
      {children}
    </span>
  );
};
