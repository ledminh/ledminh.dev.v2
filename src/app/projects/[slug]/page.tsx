"use client";

import { useRouter } from "next/navigation";
import { HomeIcon } from "@/ui/icons";
import ProjectDetail from "@/ui/ProjectDetail";

export default function ProjectPage() {
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="absolute top-5 right-5 hidden md:block">
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            router.back();
          }}
        >
          <HomeIcon />
        </button>
      </div>
      <ProjectDetail />
    </div>
  );
}
