import Link from "next/link";
import { HomeIcon } from "@/ui/icons";
import MessageMe from "@/ui/landing_page/MessageMe";

export default function MessagePage() {
  return (
    <>
      <Link
        className="absolute top-5 right-5 text-white p-2 rounded-lg border border-gray-500 hover:border-yellow-600 active:border-yellow-400 hover:text-yellow-600 active:text-yellow-400"
        href="/"
      >
        <HomeIcon />
      </Link>
      <MessageMe />
    </>
  );
}
