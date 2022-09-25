import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-left h-screen md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="hidden absolute top-16 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="hidden md:block xl:block -mb-20 md:mb-0 flex-shrink-0 w-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="hidden text-md md:block text-4xl font-semibold">
          <span className="underline decoration-[#6e2fd2]">Professional</span>{" "}
          background
        </h4>
        <p className="text-[13px] md:text-[16px]">
          {pageInfo?.backgroundInformation}
        </p>
        <h4 className="hidden md:block text-4xl font-semibold">
          <span className="underline decoration-[#6e2fd2]">
           Interests
          </span>{" "}
          and Education
        </h4>
        <p className="text-[14px] md:text-[16px]">
          Since I was 8, I have been passionate about programming and computer
          science. It all began with{" "}
          <b>Amstrad CPC 6128</b> and a very simple BASIC code. Later, I
          discovered the power of <b>Javascript and Python</b> which I
          extensively mastered and applied at day to day work. I graduated from{" "}
          <b>Warsaw School of Economics</b> (Master in Banking & Finance).{" "}
          <br />I am also <b>Warwick Business School alumnus with &apos;Merit&apos;</b>,
          my thesis explores AI adoption across Financial Institutions.
          <br />
          <span className="hidden md:block">
            My other passion is learning foreign languages, I am fluent in
            English, French and C1 in Spanish.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
