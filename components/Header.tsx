import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="z-50 sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-start"
      >
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-green-500 h-4 w-4 rounded-full animate-pulse" />
          <p className="text-[8px] uppercase">Open for projects</p>
        </div>
        <div className="flex flex-row items-center">
          {/* Social Icons */}
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
        </div>
        
      </motion.div>

      <div className="flex items-center justify-center">
        <Link href="https://blog.piotrmaciejewski.com">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              network="rss"
              className="cursor-pointer"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Blog
            </p>
          </motion.div>
        </Link>
        <Link href="#contact">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer"
          >
            <SocialIcon
              network="email"
              className="cursor-pointer"
              fgColor="gray"
              bgColor="transparent"
            />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
