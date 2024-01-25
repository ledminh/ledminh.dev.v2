import Link from "next/link";
import HOME_MENU from "@/core/data/home_menu";

type Props = {
  currentPage: string;
};

export default function Menu({ currentPage }: Props) {
  return (
    <ul className="flex gap-4 justify-start border-b-2 mb-8">
      {HOME_MENU.map((item) => (
        <li
          key={item.id}
          className={
            currentPage !== item.title
              ? "hover:opacity-40 opacity-20"
              : "hover:opacity-100"
          }
        >
          {currentPage === item.title ? (
            <h3>{item.title}</h3>
          ) : (
            <Link href={item.link}>
              <h3>{item.title}</h3>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
