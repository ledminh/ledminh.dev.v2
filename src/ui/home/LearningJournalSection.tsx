import Link from "next/link";
import getLearningJournal from "@/core/server/functions/getLearningJournals";
import { LEARNING_JOURNAL_WEBSITE } from "@/core/data/learning_journal";

const LearningJournalSection: React.FC = async () => {
  const learningJournals = await getLearningJournal();

  return (
    <section className="with-border">
      <h2>LEARNING JOURNAL</h2>
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
};

export default LearningJournalSection;

/*************************
 * Components
 */
const LearningJournalCard: React.FC<{
  title: string;
  link: string;
  date: string;
  description: string;
}> = ({ title, link, date, description }) => {
  return (
    <Link href={link} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h4 className="group-hover:text-yellow-700">{title}</h4>
        <span className="italic">{date}</span>
      </div>
      <p className="text-gray-400 group-hover:text-white">{description}</p>
    </Link>
  );
};
