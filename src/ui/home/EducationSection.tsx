import EDUCATION from "@/core/data/education";

const EducationSection: React.FC = () => {
  return (
    <section>
      <h2 className="bg-gray-800 text-gray-100 px-4 py-2">EDUCATION</h2>
      <ul className="grid gap-4">
        {EDUCATION.map((edu) => (
          <li key={edu.id}>
            <EducationCard {...edu} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EducationSection;

/*************************
 * Components
 */
const EducationCard: React.FC<{
  school: string;
  degree: string;
  duration: string;
}> = ({ school, degree, duration }) => {
  return (
    <div className="border-2 border-dashed border-gray-400 p-4">
      <h3 className="text-xl font-semibold">{school}</h3>
      <p>{degree}</p>
      <p>{duration}</p>
    </div>
  );
};
