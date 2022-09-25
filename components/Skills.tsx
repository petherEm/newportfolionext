import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      
      className="flex relative flex-col text-center md:text-left xl:flex-row w-screen max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-2 items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Stack
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="md:mt-32 xl:mt-32 grid grid-cols-4 md:grid-cols-4 gap-1 md:gap-5 items-center">
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        
      </div>
    </motion.div>
  );
};

export default Skills;
