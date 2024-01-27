import Link from "next/link";

const ProjectCard: React.FC<{
  name: string;
  slug: string;
  description: string;
}> = ({ name, slug, description }) => {
  return (
    <Link
      className="block border border-gray-400 p-4 rounded-lg hover:border-yellow-700 hover:ring-2 hover:ring-yellow-700 hover:ring-opacity-50 hover:shadow-md hover:shadow-yellow-700 group"
      href={`/projects/${slug}`}
    >
      <h4 className="group-hover:text-yellow-700">{name}</h4>
      <p className="mb-3 group-hover:text-gray-200 md:text-sm lg:text-base">
        {description}
      </p>
    </Link>
  );
};

export default ProjectCard;
