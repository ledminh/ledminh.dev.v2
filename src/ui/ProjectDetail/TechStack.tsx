import { Tech } from "@/core/types";

type Props = {
  techStack: Tech[];
};

const TechStack = ({ techStack }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-white font-bold text-lg">Tech stack:</span>{" "}
      <ul className="flex gap-2 flex-wrap">
        {techStack.map((tech) => {
          return (
            <li key={tech.id}>
              <TechTab>{tech.name}</TechTab>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechStack;

const TechTab = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="bg-gray-600 rounded-md font-semibold px-2 py-1 text-sm">
      {children}
    </span>
  );
};
