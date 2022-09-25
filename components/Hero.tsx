import React from "react";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "Full Stack Developer",
      "Senior Leader in Finance Industry",
      "Python and JS programmer",
      "Warwick MBA alumnus",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile"
        className="relative rounded-full mx-auto h-52 w-52 object-cover"
      />

      <div className="z-20">
        
        <h2 className="text-md font-semibold uppercase text-gray-400 pb-4 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl md:text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#6e2fd2" />
        </h1>

        <div className="pt-5 space-x-2 space-y-1">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Stack</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Dev Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
