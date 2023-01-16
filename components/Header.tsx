import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiLeetcode } from "react-icons/si";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsFileEarmarkWord } from "react-icons/bs";
// import {pdf} from '../docs'


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
        transition={{ duration: 1.5 }}
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
        
        {/* <a href="https://docs.google.com/document/d/17vvdCHDkx_GaZnbwFEbPbRCij2Gu-pUD/edit?usp=sharing&ouid=111550726084411970003&rtpof=true&sd=true" target="_blank">
 <BsFileEarmarkWord  className="hover:translate-y-1  opacity-95 text-gray-400 text-3xl cursor-pointer " />
</a> */}
        <b className="text-gray-400 justify-center ml-3 mr-3 lg:text-2xl">
          Ravi Hussein-Patel
        </b>
        <a href="https://drive.google.com/file/d/1YQsgLcuVcC5sHjlitfNOtyHnPpQ7sxTO/view?usp=sharing" target="_blank">
 <AiOutlineFilePdf className="hover:translate-y-1  opacity-95 text-gray-400 text-3xl cursor-pointer " />
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
        transition={{ duration: 1 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* <Link href="#contact">  */}

        <SocialIcon
          className="cursor-pointer hover:translate-y-1 "
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 hover:translate-y-">
          Get In Touch
        </p>
        {/* </Link> */}
      </motion.div>
    </header>
  );
};

export default Header;
