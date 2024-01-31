import { useEffect, useState } from "react";
import Image from "next/image";

export default function Screenshots() {
  return (
    <div className="flex flex-col gap-2 p-2 basis-full">
      <h3 className="border-b-2 border-gray-300">SCREENSHOTS</h3>
      <ul className="flex flex-wrap gap-3">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <li key={index}>
              <ScreenshotItem
                src="https://picsum.photos/500/500"
                alt="Landing Page"
              />
            </li>
          );
        })}
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
