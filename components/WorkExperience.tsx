import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {
};

function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-1 uppercase tracking-[20px] text-gray-500 text-2xl pt-4 pb-2">
        Experience
      </h3>
      <br></br>

      <div className="pt-10 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8A9A5B]/80 hover:scrollbar-thumb-[#8A9A5B]">
          <ExpCard />
          

    
      </div>
    </motion.div>
  );
}

export default WorkExperience;
