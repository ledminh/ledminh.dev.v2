import Image from "next/image";

export default function Screenshots() {
  return (
    <div className="flex flex-col gap-2 p-2 basis-full">
      <h3 className="border-b-2 border-gray-300">SCREENSHOTS</h3>
      <ul className="flex flex-wrap gap-3">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <li key={index}>
              <Image
                src="https://picsum.photos/500/500"
                alt="Landing Page"
                width={500}
                height={500}
                className="rounded-lg w-20 h-20"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
