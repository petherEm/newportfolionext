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
    <div className="group relative flex flex-col justify-center items-center cursor-pointer">
      <motion.div
        initial={{
          x: 0,
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
          className="rounded-full border border-gray-500 object-cover w-12 h-12 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 md:w-20 md:h-20 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-xl md:text-3xl text-black font-bold">
              {skill.progress}%
            </p>
          </div>
        </div>
        <p className="text-[8px] md:text-xs uppercase text-gray-500 mt-2">
          {skill.title}
        </p>
      </motion.div>
    </div>
  );
}

export default Skill;
