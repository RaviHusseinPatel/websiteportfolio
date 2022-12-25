import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <motion.div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="data:image/jpeg;base64,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"
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                WorldPin
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                eius veniam nulla eos similique, beatae quasi cupiditate
                repellat aliquid modi, animi ratione id aut atque nobis dicta
                rerum ad.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
