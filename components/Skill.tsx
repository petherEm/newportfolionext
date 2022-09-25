import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex flex-col items-center cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="flex flex-col items-center"
      >
        <img
          src={urlFor(skill?.image).url()}
          className="rounded-full border border-gray-500 object-cover w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl md:text-3xl text-black font-bold">{skill.progress}%</p>
          </div>
        </div>
        <p className="text-xs uppercase text-gray-500 mt-2">{skill.title}</p>
      </motion.div>
    </div>
  );
}

export default Skill;
