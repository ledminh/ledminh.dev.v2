import Link from "next/link";

import ContactSection from "@/ui/landing_page/ContactSection";
import Header from "@/ui/landing_page/Header";
import SkillSection from "@/ui/landing_page/SkillSection";
import EducationSection from "@/ui/landing_page/EducationSection";
import HOME_MENU from "@/core/data/home_menu";
import Menu from "@/ui/landing_page/Menu";

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-3 gap-12 m-4 md:p-6 md:border md:border-gray-500 md:rounded-lg md:shadow-md md:shadow-gray-500 max-w-6xl">
      <div className="flex flex-col gap-12 col-span-3 md:col-span-2">
        <div className="flex flex-col gap-4">
          <ContactSection />
          <Header />
        </div>

        {children}
      </div>
      <div className="flex flex-col gap-8 col-span-3 md:col-span-1">
        <EducationSection />
        <SkillSection />
        <div className="basis-full flex justify-end items-end">
          <span className="text-lg font-bold bg-gray-400 text-black px-4">
            Minh Le © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </main>
  );
}
