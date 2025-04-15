"use client";

import { cn } from "@/lib/utils/cn";
import React, { ReactNode } from "react";

export const InfiniteMovingCards = ({
  skills,
  className,
}: {
  skills: Array<[string, ReactNode]>;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 w-full max-w-5xl px-4",
        className
      )}
    >
      <ul
        className="flex flex-wrap justify-center gap-4 py-4"
      >
        {skills.map(([title, icon], index) => (
          <li
            key={index}
            className="flex items-center gap-2 rounded-full py-2 px-5 bg-neutral-50 dark:bg-neutral-800 text-black dark:text-neutral-50 shadow-sm border border-neutral-300 dark:border-neutral-700 font-outfit"
          >
            {icon}
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
