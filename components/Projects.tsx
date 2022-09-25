import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>
      <h3 className="absolute text-center top-36 uppercase tracking-[10px] text-gray-400 text-[10px] md:text-md">
        Private projects - web dev only
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#432770e7]">
        {projects?.map((project, i) => (
          <Link href={project.linkToBuild} className="cursor-pointer" target="_blank">
            <div
              key={project._id}
              className="md:w-[900px] flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-4 items-center justify-center px-10 md:p-44 h-[800px] mt-10 cursor-pointer"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
                className="h-[280px] w-[350px] md:h-[600px] md:w-full max-h-[900px] xl:h-[900px] xl:w-full object-contain"
              />

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((tech) => (
                  <img
                    className="h-10 w-10"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <div className="flex items-center w-full justify-center space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl">
                <div className="">
                  <h4 className="text-md md:text-xl font-semibold text-center">
                    <span className="underline decoration-[#c5aaf0]/50">
                      {i + 1} of {projects.length}:
                    </span>{" "}
                    {project?.title}
                  </h4>
                  <div className="p-2 flex flex-wrap w-[300px] md:w-auto">
                    <p className="text-sm md:text-lg text-center md:text-left">
                      {project?.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#9358d6]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
