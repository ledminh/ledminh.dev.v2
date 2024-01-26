import SKILLS from "@/core/data/skills";

const SkillSection = () => {
  return (
    <section className="with-border flex gap-4 flex-col">
      <h2>SKILLS</h2>
      <ul className="flex gap-4 flex-wrap">
        {SKILLS.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;

/*************************
 * Components
 */

const bgColors = [
  "bg-gray-200",
  "bg-gray-300",
  "bg-gray-400",
  "bg-red-200",
  "bg-red-300",
  "bg-orange-200",
  "bg-orange-300",
  "bg-yellow-200",
  "bg-yellow-300",
  "bg-green-200",
  "bg-green-300",
  "bg-teal-200",
  "bg-teal-300",
  "bg-blue-200",
  "bg-blue-300",
  "bg-indigo-200",
  "bg-indigo-300",
  "bg-purple-200",
  "bg-purple-300",
  "bg-pink-200",
  "bg-pink-300",
  "bg-rose-200",
  "bg-rose-300",
  "bg-fuchsia-200",
  "bg-fuchsia-300",
  "bg-violet-200",
  "bg-violet-300",
  "bg-sky-200",
  "bg-sky-300",
  "bg-cyan-200",
  "bg-cyan-300",
];

function randomBgColor() {
  return bgColors[Math.floor(Math.random() * bgColors.length)];
}

// return tailwindcss for random rotation
const rotateClasses = [
  "rotate-0",
  "rotate-1",
  "rotate-2",
  "rotate-3",
  "rotate-6",
  "rotate-12",
  "-rotate-1",
  "-rotate-2",
  "-rotate-3",
  "-rotate-6",
  "-rotate-12",
];

function randomRotate() {
  return rotateClasses[Math.floor(Math.random() * rotateClasses.length)];
}

const SkillCard: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <li
      className={`${randomRotate()} ${randomBgColor()} text-black p-2 font-semibold rounded-3xl md:text-sm lg:text-lg z-0`}
    >
      {skill}
    </li>
  );
};
