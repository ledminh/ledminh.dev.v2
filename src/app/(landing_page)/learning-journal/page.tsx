import LearningJournalCard from "@/ui/landing_page/LearningJournalCard";
import getLearningJournal from "@/core/server/functions/getLearningJournals";
import { LEARNING_JOURNAL_WEBSITE } from "@/core/data/learning_journal";
import Link from "next/link";
import Menu from "@/ui/landing_page/Menu";

export default async function LearningJounralPage() {
  const learningJournals = await getLearningJournal();

  return (
    <section>
      <Menu currentPage="LEARNING JOURNAL" />
      <p className="mb-4">
        I built this journal to help with my study.{" "}
        <Link
          href={"https://www.github.com/ledminh/learning-journal"}
          className="underline bold text-yellow-700 hover:text-yellow-500"
        >
          More info here
        </Link>
      </p>
      <ul className="grid gap-2 mb-6 md:max-h-[390px] md:overflow-y-scroll p-2">
        {learningJournals.map((learningJournal) => (
          <li
            key={learningJournal.id}
            className="border-b-2 border-dashed border-gray-400 p-4 hover:border-solid hover:border-yellow-700 group"
          >
            <LearningJournalCard {...learningJournal} />
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <Link
          href={LEARNING_JOURNAL_WEBSITE}
          className="border p-2 hover:border-yellow-500 hover:text-yellow-500"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
