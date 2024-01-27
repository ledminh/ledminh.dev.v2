"use client";

import { useRouter } from "next/navigation";
import { CloseIcon } from "@/ui/icons";
import Image from "next/image";

export default function ProjectDetail() {
  return (
    <div className="bg-gray-700 w-full h-full md:w-3/4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 p-2">
        <ProjectHeader />
        <Image
          src="https://picsum.photos/500/500"
          alt="Landing Page"
          width={500}
          height={500}
          className="rounded-lg w-full"
        />
        <div className="p-2 border border-gray-">
          <h4>INFO</h4>
          <p>Gihub</p>
          <p>Demo</p>
          <p>Tech stack: Next.js, TailwindCSS, Prisma, Supabase, Postgresql</p>
        </div>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
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
    <div className="flex justify-between items-center border-b-4 border-b-gray-300 pb-4">
      <h2 className="text-2xl font-bold h-full flex items-center justify-start">
        Project Name
      </h2>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg md:hidden"
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
