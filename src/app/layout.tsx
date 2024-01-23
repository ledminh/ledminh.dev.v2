import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ContactSection from "@/ui/home/ContactSection";

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
          " bg-black text-gray-400 flex justify-start items-start flex-col p-4 text-xl"
        }
      >
        <header className="flex flex-col gap-4 mb-12">
          <ContactSection />
          <div className="flex flex-col gap-4">
            <h1>MINH LE</h1>
            <p className="subtitle">
              A web developer, a life-long learner, a writer-to-be
            </p>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
