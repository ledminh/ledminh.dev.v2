import { useRouter } from "next/navigation";
import { CloseIcon } from "@/ui/icons";

const ProjectHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center border-b-4 border-b-gray-300 pb-3">
      <h2>Project Name HERE</h2>
      <button
        className="text-white rounded-lg hover:text-yellow-500 active:text-yellow-700 md:hidden"
        onClick={() => {
          router.back();
        }}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default ProjectHeader;
