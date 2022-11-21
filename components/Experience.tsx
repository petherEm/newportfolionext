import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

function Experience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-2 md:px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 md:top-20 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl xl:text-4xl xl:top-40">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#432770e7]">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
