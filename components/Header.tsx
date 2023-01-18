import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineFilePdf } from "react-icons/ai";

type Props = {};

const Header = () => {
  return (
    <header className="border-b-2 border-green-500 top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
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
        transition={{ duration: 2 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="hover:translate-y-1 "
          url="https://www.linkedin.com/in/ravihussein-patel/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:translate-y-1"
          url="https://github.com/RaviHusseinPatel"
          fgColor="gray"
          bgColor="transparent"
        />
        <SiLeetcode
          className="hover:translate-y-1  opacity-70 text-gray-400 text-2xl  ml-5 cursor-pointer"
          href="https://leetcode.com/ratekkers/"
        />
      </motion.div>
      <div className="flex">
        <b className="justify-center ml-2 mr-3 lg:text-3xl">
          <span className="text-white">Ravi </span>
          <span className="text-gray-400">Hussein-Patel</span>
        </b>
        <a
          href="https://drive.google.com/file/d/1YQsgLcuVcC5sHjlitfNOtyHnPpQ7sxTO/view?usp=sharing"
          target="_blank"
        >
          <AiOutlineFilePdf className="hover:translate-y-1  opacity-95 text-gray-400 text-3xl cursor-pointer animate-pulse" />
        </a>
      </div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 2 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
       <Link href="#contact" as="#contact">
   <p className="text-gray-500 hover:translate-y-1">GET IN TOUCH ✉</p>

</Link>
      
      </motion.div>
    </header>
  );
};

export default Header;
