import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiJquery,
} from "@icons-pack/react-simple-icons";
import Image from "next/image";
export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} color="default" />,
  TypeScript: <SiTypescript size={iconSize} color="default" />,
  "Next.js": <SiNextdotjs size={iconSize} color="default" />,
  "React.js": <SiReact size={iconSize} color="default" />,
  TailwindCSS: <SiTailwindcss size={iconSize} color="default" />,
  MongoDB: <SiMongodb size={iconSize} color="default" />,
  C: <SiC size={iconSize} color="default" />,
  "C++": <SiCplusplus size={iconSize} color="default" />,
  MySQL: <SiMysql size={iconSize} color="default" />,
  Prisma: <SiPrisma size={iconSize} color="default" />,
  "Node.js": <SiNodedotjs size={iconSize} color="default" />,
  Redux: <SiRedux size={iconSize} color="default" />,
  Postman: <SiPostman size={iconSize} color="default" />,
  HTML5: <SiHtml5 size={iconSize} color="default" />,
  CSS: <SiCss3 size={iconSize} color="default" />,
  Bootstrap: <SiBootstrap size={iconSize} color="default" />,
  Express: <SiExpress size={iconSize} color="default" />,
  Git: <SiGit size={iconSize} color="default" />,
  Github: <SiGithub size={iconSize} color="default" />,
  Jquery: <SiJquery size={iconSize} color="default" />,
  Python: <SiPython size={iconSize} color="default" />,
  Shadcn: <SiShadcnui size={iconSize} color="default" />,
  "Data Structures": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/dsa.png"
        alt="Data Structures"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
  "Algorithms": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/algo.png"
        alt="Algorithms"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
  "DBMS": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/dbms.png"
        alt="DBMS"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
  "Object-Oriented Programming": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/oops.png"
        alt="oops"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
  "Operating System": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/os.png"
        alt="os"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
  "Java": (
    <div className="flex items-center">
      <Image
        src="/skillsLogos/java.png"
        alt="java"
        width={iconSize}
        height={iconSize}
      />
    </div>
  ),
};
