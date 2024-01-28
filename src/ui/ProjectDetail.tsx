"use client";

import { useRouter } from "next/navigation";
import { CloseIcon } from "@/ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail() {
  const techStack = [
    "Next.js",
    "TailwindCSS",
    "Prisma",
    "Supabase",
    "Postgresql",
  ];

  return (
    <div className="bg-gray-700 w-full h-full md:w-3/4 flex flex-col gap-4 max-w-3xl">
      <div className="flex flex-col gap-4 p-2 sm:flex-row sm:flex-wrap sm:justify-between">
        <div className="sm:basis-full">
          <ProjectHeader />
        </div>
        <Image
          src="https://picsum.photos/500/500"
          alt="Landing Page"
          width={500}
          height={500}
          className="rounded-lg basis-full sm:basis-[48%]"
        />
        <div className="p-2 border-4 border-gray-500 rounded-md flex flex-col gap-4 sm:basis-[48%] sm:border-transparent">
          <h3>INFO</h3>
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
    <div className="flex justify-between border-b-4 border-b-gray-300">
      <h2 className="text-2xl font-bold h-full flex items-center justify-start">
        Project Name
      </h2>
      <button
        className="text-white px-4 py-2 rounded-lg hover:text-yellow-500 active:text-yellow-700 md:hidden"
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
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
