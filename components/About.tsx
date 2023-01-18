import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      //   viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://previews.dropbox.com/p/thumb/ABwrdBLt6x7GCGlCMIcDs21Y8EOFrIKsnZs2WZmMlrsuWUEKKpbf6xhbTOkQkvmQTTo0tOpz54QdG5J59awZSqTOOWKRz5zDnA5DCuN-GgYEQsgVVwvxpiDTdBe0hWoFEIDcx971zOBkRGeI16pH-DTf42MB7jF68DGcOPscMpDETjtmR4rI0ujux55Razr5G9EA82PkeLm7ezTYprNqyRKfV2vKrMPcT1qKIbcNP14mz_IcvPuLiapxL3q4JmIx-e1Vuqy-3LvQH7H4GrSCClqgYoctyq0z8hQBHoS0DIq30JYrIYfgfd89VbxK_pPt3I4wbUmPRfH7wm4DvE573fMTx2DoMu_ZsL7eWFvffohRSYrm-I2-e19yqhPs_q9m0h2d0mG0rtVMtmXKQfwvCHWskkF1oKpgyO5ltpewyjUVQzjFQ8kGWjQyLrx_cgb5P6xmUs8aXNaEaIWgMQoWrPeRXYT_igMDM15KG7Uhuwu4wBlld5eoFK6BuMrC_8uoPYpxGTijcOd7ZwQ3BCtC2CrAmXGLoje_OQhBonNQ4yexniHKzW9zGDSZW5Sd8aTzA8U/p.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#8A9A5B]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-sm xl:text-lg">
          An aspiring Frontend Developer with a year of experience building
          fullstack and frontend APIs, I have strong communication skills and a
          deep understanding of how to work with others. My experience in
          client-facing roles and as a tutor has given me the ability to ask the
          right questions and learn from others, which is a crucial skill for
          any developer. I was able to demonstrate these skills during the
          BrightNetwork Technology Academy, where our group's final projects
          received recognition for being both creative and efficient.
          <br></br> <br></br>
          <b>
            Programming is important because it allows us to harness the power
            of engineering to improve the lives of people on a daily basis. This
            is what inspires me to code. The ability to be creative and
            collaborate with like-minded individuals from around the world to
            solve complex problems using technology however, is what excites me.
          </b>
        </p>
      </div>
    </motion.div>
  );
}

export default About;
