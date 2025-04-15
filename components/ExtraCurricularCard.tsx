import React from "react";
import { motion } from "framer-motion";

type ExpCardProps = {
  clogo: string;
  title: string;
  company: string;
  point1?: string;
  point2?: string;
  startDate: string;
  endDate: string;
};

export default function ExtraCurricularCard({
  clogo,
  title,
  company,
  point1,
  point2,
  startDate,
  endDate,
}: ExpCardProps) {
  return (
    <article className="flex flex-col justify-center items-start w-full md:max-w-2xl px-4 py-2 mx-auto snap-center rounded-lg backdrop-blur-sm font-outfit bg-slate-200/20 dark:bg-[#141414] border-l-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-transform duration-200">

      {/* Left: Logo and Title */}
      <div className="flex items-start space-x-4 min-w-[150px]">
        <motion.img
          initial={{ opacity: 0, x: -5 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src={clogo}
          className="object-cover h-20 w-20 rounded-full object-center"
          alt=""
          loading="lazy"
        />


        <div className="text-left">
          <h4 className="text-base font-semibold text-black dark:text-white">
            {title}
          </h4>
          <p className="text-sm text-gray-800 dark:text-gray-300">{company}</p>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
            {startDate} - {endDate}
          </p>
        </div>
      </div>

      {/* Right: Points */}
      <div className="ml-6 flex-1">
        <ul className="list-disc space-y-1 pl-4 text-sm text-black dark:text-gray-200">
          <li>{point1}</li>
          {/* <li>{point2}</li> */}
        </ul>
      </div>
    </article>


  );
}
