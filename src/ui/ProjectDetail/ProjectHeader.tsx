import { useRouter } from "next/navigation";

type Props = {
  name: string;
  BackIcon: React.ReactNode;
};
const ProjectHeader = ({ name, BackIcon }: Props) => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center border-b-4 border-b-gray-300 pb-3">
      <h2>{name}</h2>
      <button
        className="text-white rounded-lg hover:text-yellow-500 active:text-yellow-700 md:hidden"
        onClick={() => {
          router.back();
        }}
      >
        {BackIcon}
      </button>
    </div>
  );
};

export default ProjectHeader;
