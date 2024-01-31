import { useEffect, useState } from "react";
import Image from "next/image";
import { Screenshot as ScreenshotType } from "@/core/types";

type Props = {
  screenshots: ScreenshotType[];
};

export default function Screenshots({ screenshots }: Props) {
  return (
    <div className="flex flex-col gap-2 p-2 basis-full">
      <h3 className="border-b-2 border-gray-300">SCREENSHOTS</h3>
      <ul className="flex flex-wrap gap-3">
        {screenshots.map((screenshot) => (
          <li key={screenshot.id}>
            <ScreenshotItem src={screenshot.src} alt={screenshot.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/***************************
 * Sub-component
 */

const ScreenshotItem = (props: { src: string; alt: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      });
    };
  }, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <Image
          src={props.src}
          alt={props.alt}
          width={500}
          height={500}
          className="rounded-lg w-20 h-20 hover:transform hover:scale-110 transition-transform"
        />
      </button>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={props.src}
            alt={props.alt}
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}
    </>
  );
};
