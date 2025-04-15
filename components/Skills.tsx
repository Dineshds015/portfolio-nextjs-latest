import { motion } from "framer-motion";
import { Skillscrolling as SkillsScrolling } from "@/components/index";

type Props = {};

export default function Skills({ }: Props) {
  return (
    <motion.div className="flex flex-col text-center md:text-left xl:flex-col max-w-[2000px] xl:px-10 min-h-screen justify-start items-center mx-auto py-24 space-y-12">
      {/* Heading */}
      <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl">
        Skills
      </h3>

      {/* Skills Scrolling */}
      <div className="w-full">
        <SkillsScrolling />
      </div>
    </motion.div>
  );
}
