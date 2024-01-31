import Link from "next/link";

const Links = () => {
  return (
    <ul className="flex gap-4">
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href="https://www.github.com/ledminh/learning-journal"
        >
          Github
        </Link>
      </li>
      <li>
        <Link
          className="text-white text-lg font-bold border-b-2 border-gray-200 hover:border-yellow-500 active:border-yellow-700 hover:text-yellow-500 active:text-yellow-700"
          href="https://www.github.com/ledminh/learning-journal"
        >
          Demo
        </Link>
      </li>
    </ul>
  );
};

export default Links;
