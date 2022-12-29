import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
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
        
          <SocialIcon className=" hover:skew-y-12 hover:translate-y-2" 
           url="https://www.linkedin.com/in/ravihussein-patel/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
       <SocialIcon className=" hover:skew-y-12 hover:translate-y-2"
           url="https://github.com/RaviHusseinPatel"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
      </motion.div>

      
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
          <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            href="#contact"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
          </Link>
        </motion.div>
      
    </header>
  );
};

export default Header;
