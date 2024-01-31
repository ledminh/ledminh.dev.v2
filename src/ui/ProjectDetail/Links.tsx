import Link from "next/link";

type Props = {
  github: string;
  demo: string;
};

const Links = ({ github, demo }: Props) => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href={github}
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href={demo}
        >
          Demo
        </Link>
      </li>
    </ul>
  );
};

export default Links;
