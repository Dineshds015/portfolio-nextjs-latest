import React from "react";
import { motion } from "framer-motion";

import extraCurricularData from "../data/extracurricular.json";
import ExtraCurricularCard from "./ExtraCurricularCard";

type Props = {};

export default function ExtraCurricular({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="flex flex-col h-screen justify-center items-center text-center max-w-7xl mx-auto px-4"
    >
      <h3 className="mb-16 uppercase tracking-[15px] text-gray-400 text-xl">
        Extra Curricular
      </h3>

      <div className="w-full h-[50vh] overflow-y-scroll snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-300/20 scrollbar-track-transparent dark:scrollbar-track-transparent">
        {extraCurricularData.experience?.map((curricular) => (
          <div
            key={curricular.company}
            className="h-full w-full flex justify-center items-center snap-center"
          >
            <ExtraCurricularCard
              clogo={curricular.clogo}
              title={curricular.title}
              company={curricular.company}
              point1={curricular.point1}
              point2={curricular.point2}
              startDate={curricular.startDate}
              endDate={curricular.endDate}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
