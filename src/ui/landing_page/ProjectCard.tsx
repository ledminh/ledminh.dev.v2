import Link from "next/link";

const ProjectCard: React.FC<{
  name: string;
  slug: string;
  description: string;
}> = ({ name, slug, description }) => {
  return (
    <Link
      className="grid grid-rows-6 border border-gray-400 p-4 rounded-lg hover:border-yellow-700 hover:ring-2 hover:ring-yellow-700 hover:ring-opacity-50 hover:shadow-md hover:shadow-yellow-700 group md:h-[9.36rem]"
      href={`/projects/${slug}`}
    >
      <h4 className="row-span-3 sm:row-span-2 group-hover:text-yellow-700 basis-full">
        {name}
      </h4>
      <p className="row-span-3 sm:row-span-4 basis-full mb-3 group-hover:text-gray-200 md:text-sm">
        {description}
      </p>
    </Link>
  );
};

export default ProjectCard;
