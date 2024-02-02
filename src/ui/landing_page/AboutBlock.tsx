"use client";

import { AboutData } from "@/core/types";
import { useState } from "react";

type Props = {
  about: AboutData;
};

export default function AboutBlock({ about }: Props) {
  const [activeTab, setActiveTab] = useState<"short" | "medium" | "long">(
    "short"
  );

  return (
    <>
      <ul className="flex gap-4 justify-center pb-4">
        {Object.keys(about).map((key) => (
          <li key={key}>
            {activeTab === key && (
              <div className="text-lg font-semibold text-yellow-600 border-b-2 border-b-yellow-600">
                {key}
              </div>
            )}
            {activeTab !== key && (
              <button
                className="text-lg font-semibold text-gray-400 hover:text-yellow-700 hover:border-b-2 hover:border-b-yellow-800"
                onClick={() => setActiveTab(key as any)}
              >
                {key}
              </button>
            )}
          </li>
        ))}
      </ul>
      <div
        className="text-content px-2 md:h-[28rem] md:overflow-y-scroll md:px-4"
        dangerouslySetInnerHTML={{ __html: about[activeTab] }}
      />
    </>
  );
}
