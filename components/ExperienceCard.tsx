import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 h-[550px] flex-shrink-0 w-[400px] md:w-[600px] md:max-h-[700px] xl:w-[900px] xl:max-h-[700px] snap-center p-4 md:p-10 bg-[#201f1f] hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="px-0 md:px-10">
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center space-x-4"
        >
          <Image
            className="rounded-full md:rounded-full  object-center"
            src={urlFor(experience?.companyImage?.asset).url()}
            alt="logo"
            height="80px"
            width="80px"
            objectFit="contain"
          />
          <div>
            <h4 className="text-md md:text-2xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-md md:text-xl mt-1">{experience.company}</p>
          </div>
        </motion.div>

        <div className="flex items-center space-x-2 my-2">
          <p className="text-sm font-light uppercase">Key Tech:</p>
          {experience.technologies.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
            />
          ))}
        </div>
        <p className="text-sm uppercase py-5 text-gray-300">
          <>
            {new Date(experience.dateStarted).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
            })}{" "}
            -{" "}
            {experience.isCurrentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toLocaleDateString("en-us", {
                  year: "numeric",
                  month: "short",
                })}
          </>
        </p>
        
        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A/80]">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
