"use client";

import MessageMe from "@/ui/landing_page/MessageMe";
import CloseModalButton from "@/ui/landing_page/CloseModalButton";
import { useEffect } from "react";

export default function MessageModal() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full h-full bg-black z-50 flex justify-center items-center">
      <div className="absolute top-5 right-5">
        <CloseModalButton />
      </div>
      <MessageMe />
    </section>
  );
}
