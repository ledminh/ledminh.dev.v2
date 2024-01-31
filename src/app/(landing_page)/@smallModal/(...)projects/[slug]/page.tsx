"use client";

import ProjectDetail from "@/ui/ProjectDetail";
import { CloseIcon } from "@/ui/icons";
import { useEffect } from "react";

export default function ProjectModalPage() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return <ProjectDetail BackIcon={<CloseIcon />} />;
}
