import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Link from "next/link";

import "./globals.css";

import ContactSection from "@/ui/home/ContactSection";
import Header from "@/ui/Header";
import SkillSection from "@/ui/home/SkillSection";
import EducationSection from "@/ui/home/EducationSection";
import HOME_MENU from "@/core/data/home_menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MINH LE",
  description: "A web developer, a life-long learner, a writer-to-be",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          " bg-black text-gray-400 flex justify-center items-center min-h-screen text-xl"
        }
      >
        <main className="grid grid-cols-3 gap-12 m-4 md:p-6 md:border md:border-gray-500 md:rounded-lg md:shadow-md md:shadow-gray-500 max-w-6xl">
          <div className="flex flex-col gap-12 col-span-3 md:col-span-2">
            <Header />
            <section>
              <ul className="flex gap-4 justify-start border-b-2 mb-8">
                {HOME_MENU.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <h2>{item.title}</h2>
                    </Link>
                  </li>
                ))}
              </ul>
              {children}
            </section>
          </div>
          <div className="flex flex-col gap-8 col-span-3 md:col-span-1">
            <SkillSection />
            <EducationSection />
            <ContactSection />
          </div>
        </main>
      </body>
    </html>
  );
}
