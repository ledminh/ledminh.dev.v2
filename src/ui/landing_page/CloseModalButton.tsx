import { useRouter } from "next/navigation";
import { CloseIcon } from "@/ui/icons";

export default function CloseModalButton() {
  const router = useRouter();

  function closeModal() {
    router.back();
  }

  return (
    <button
      className="text-white p-2 rounded-lg border border-gray-500 hover:border-yellow-600 active:border-yellow-400 hover:text-yellow-600 active:text-yellow-400"
      onClick={closeModal}
    >
      <CloseIcon />
    </button>
  );
}
