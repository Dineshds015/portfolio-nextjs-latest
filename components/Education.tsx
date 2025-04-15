import React from "react";
import { motion } from "framer-motion";

import { EducationCard, ExperienceCard } from "@/components/index";
import educationData from "../data/education.json";

type Props = {};

export default function Experience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl pl-6">
        Education
      </h3>

      <div className="w-full mt-20 flex space-x-10 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-transparent scrollbar-thin xl:space-x-14 dark:scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-300/20 scrollbar-thumb-rounded-full">
        {educationData.experience?.map((education) => (
          <EducationCard
            key={education.company}
            clogo={education.clogo}
            title={education.title}
            company={education.company}
            point1={education.point1}
            point2={education.point2}
            startDate={education.startDate}
            endDate={education.endDate}
          />
        ))}
      </div>
    </motion.div>
  );
}
