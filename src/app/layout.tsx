import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
