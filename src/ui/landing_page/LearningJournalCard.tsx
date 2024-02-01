import Link from "next/link";

const LearningJournalCard: React.FC<{
  title: string;
  link: string;
  date: string;
  description: string;
}> = ({ title, link, date, description }) => {
  return (
    <Link href={link} className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <h4 className="group-hover:text-yellow-700">{title}</h4>
        <span className="italic">{date}</span>
      </div>
      <p className="text-gray-400 group-hover:text-white">{description}</p>
    </Link>
  );
};

export default LearningJournalCard;
