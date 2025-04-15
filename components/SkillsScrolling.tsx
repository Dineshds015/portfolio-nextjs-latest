"use client";

import { ReactNode, useEffect, useState } from "react";

import { InfiniteMovingCards } from "@/components/index";
import { STACKS } from "@/data/stacks";

export default function SkillsScrolling() {
  const [shuffledSkillsChunks, setShuffledSkillsChunks] = useState<
    Array<Array<[string, ReactNode]>>
  >([]);

  useEffect(() => {
    const skillsArr = Object.entries(STACKS);
    const shuffledArray = [...skillsArr].sort(() => Math.random() - 0.5);
    const chunkSize = Math.ceil(shuffledArray.length / 4); // Divide into 4 rows
    const chunkedArray = Array.from({ length: 4 }, (_, index) =>
      shuffledArray.slice(index * chunkSize, (index + 1) * chunkSize)
    );
    setShuffledSkillsChunks(chunkedArray);
  }, []);

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative p-6">
      <div className="w-full max-w-6xl h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-transparent pr-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {shuffledSkillsChunks.flat().map(([title, icon], index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white border border-neutral-300 dark:border-neutral-700 shadow-sm transition-transform hover:scale-105 font-outfit"
            >
              {icon}
              <span className="text-sm font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
