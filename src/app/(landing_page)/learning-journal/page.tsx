import LearningJournalCard from "@/ui/landing_page/LearningJournalCard";
import getLearningJournal from "@/core/server/functions/getLearningJournals";
import { LEARNING_JOURNAL_WEBSITE } from "@/core/data/learning_journal";
import Link from "next/link";

export default async function LearningJounralPage() {
  const learningJournals = await getLearningJournal();

  return (
    <section className="with-border">
      <ul className="grid gap-2 mb-4">
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
