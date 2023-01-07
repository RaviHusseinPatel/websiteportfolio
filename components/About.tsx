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
        src="https://previews.dropbox.com/p/thumb/ABzmWELgJytRyGpL_sBUdqpAH4kaVhiv3BhHQpi-kHAy1GWmDmrRWlH26Ja-Ze5lY4qU7aW58bpKvZ_bMf63EAiMOL2wPmWL1WerDuByi88Dl0ukuhLT5LOZt8V2hXNmhT_kh4ttg6QZxOdIqLqG7rb0J2zMrEBbXwr3X3hN-PnQ0uCldI1_IBPmRGQ2SgxU4ZEMYnn1ilyH4s19tu-cJFHZaKEHdUNfr1ASPEfteNbtejh9Bz9ZZyysk2ypgYjKNMxiwtwtPcnKCu1ufVozHN2j1IWPOZ7fGzEYZe7Fs8hCQixp9wjHxN0jHVnyBF-zuWtvUVZNibZnvYoAJ2-rWjrAt_xv3pad679Ka1k5Ap4im_86p7jNK4sPtlpdNcxFtOSir9WbBwSWrA80nJDIwt5HFewyXFvg-vUnQ3T4DEFYEJeTNUZOYDh42IclgIkRfwqpvASPA9u63durMLXhXz5dBdR8_H2Lgbbof7MZnQTiXZ3eJwMIiguEQIQWDivU9rLugSyHIpveE2r1e0BHBK48ikKgrLDJWpQ-JnvjNTx0qn9AuVWAeCUd1o-lYOMZjNo/p.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] object-cover"
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="decoration-[#8A9A5B]/50 underline">little</span>{" "}
          background
        </h4>
        <p className="text-sm xl:text-lg">As an aspiring React developer with a year of experience building backend and frontend APIs, I have strong communication skills and a deep understanding of how to work with others. My experience in client-facing roles and as a tutor has given me the ability to ask the right questions and learn from others, which is a crucial skill for any developer.
            I was able to demonstrate these skills during the BrightNetwork Technology Academy, where our group's final projects received recognition for being both creative and efficient.
            <br></br> <br></br>
            <b>Programming is important because it allows us to harness the power of engineering to improve the lives of people on a daily basis. 
                This is what inspires me to code. The ability to be creative and collaborate with like-minded individuals from around the world to solve complex problems using technology however, is what excites me.</b>
            </p>
      </div>
    </motion.div>
  );
}

export default About;
