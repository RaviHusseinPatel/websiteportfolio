import React from "react";
import { motion } from "framer-motion";


type Props = {
 
};

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmGkX2UMeuIauZ1oyEOaWbavdFxuhA3q3O18ZMMta4Bj7V_BXkB6nrQ37P12f9VQ5QoiQ&usqp=CAU"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#0a79f7]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-base">lorem ipsum</p>
      </div>
    </motion.div>
  );
}

export default About;
