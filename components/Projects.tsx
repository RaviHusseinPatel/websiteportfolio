import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscSourceControl } from "react-icons/vsc";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      image:
        "https://previews.dropbox.com/p/thumb/ABw0S_jSeaRY3pr37p9apoge7AP4_e9XnEulGQwHi6Mhgx69XzCbGwxwXgMszRASYeFZDp8d-pC1mMVjx_R7Zs36Ua0EIPgIsK1R4WzJlEJ0po59P-KyOnTIQSA1muKy1h6dKPa5tZ_sM8VcabmGBngTpNp1y6XkTBkc4vO2DBs64bCA3INMxiiKaYALJP_X4HgXY2Xk3_HdGTp9Tw3ubvxGIW2gQ-X5xwNYhSZnvdEcVhm5-4WCggj-Pzve53zjHRmFoK3tCyzlnw9ngeqkrkqhK5KMDxCrTi9VnQpKKb58Wpb6JKX8DkpJ-MHN_gHMtfpHuG3CwepYBpVT_h3fnA_dZVYa5hmVwRQJ7I8MpAsOHoZgo0JsPwaaTilkS37872c/p.png",
      title: "WorldPin- React&SpringBoot API",
      github: "https://github.com/bendesousa/bnta_capstone_project",
      description:
        "This project is a collaborative effort that leverages the React library and a Java SpringBoot API to build a web application that allows users to communicate their world travels in the form of photos located on a map. The application integrates with various APIs, including Google Maps, Geolocation, and Google Search, to offer a comprehensive and interactive user experience. It also uses Firebase Storage to store user data and uploaded photos, to be rendered upon page load. This app is designed to be used by travellers and long distance loved ones- where individuals can track each others updates from around the world in the form of pictures, captions and dates.",
    },
    {
      id: 2,
      image:
        "https://previews.dropbox.com/p/thumb/ABy5-MqNW_TrukbOuFPpWDCuSBrjNlUHG1sdMqIBmKIe2IHIP8SzYgVi3goFMngbtUodh4BlLad-7CmrM2aWHTjXnds5zNWafDz7Qs2MERwbt4hlO4XA7jS7H22CwLng2Xkr8mTEuGdFLR1-vUgJ8o2UOCUR-OIYExRix8l6mnjAQyNV2Vq5MXqXEzrD7W12OVVaY_swPIuMwuv8AJwzn6qhHkUllOjs3Rr86sKMYAnPHxlB3kvFBFfdUA0chy0VSijp8aTRAPRJl4wtxvJiAZFs4N_PZXOUX9CVjCwAaU-F555TXp5eqKvwNjNStPWoVT27x_kqGxeaERdDpwcE_FiIVQH79HmVI8AKjEWColBUvWwrnLJVKplSUl4OdKPVL5Q/p.png",
      title: "TicTacToe- SpringBoot API",
      github: "https://github.com/RaviHusseinPatel/TicTacToe-2player-",
      description:
        "A RESTful API containing repositories,services, models and controllers; developed using Spring and PostgreSQL. This project is a local 2-player tic-tac-toe game where players take turns trying to place 3 of their counters in a vertical, horizontal, or diagonal sequence. The results are stored in a SQL database, which records the game ID, the players associated with that game, the status of the game, and the winner (if the game is complete). We used Postman to test our code, ensuring that the API allows us to add players to a game and create sequences that result in a winner when any of the winning combinations are satisfied. ",
    },
    {
      id: 3,
      image:
        "https://previews.dropbox.com/p/thumb/AByKWHsJtZkyq1oR-Qg-RuVeZbr6vRXXkb-g9NaN1VpDvXMV_SnSOurbyJuK1k9wC7oO1dyM5G0cfedtqGWbBCWZGE41-yYpWdno-oZ28oOpTMd0J7bh8Otx_iTMR9V3tr2_QgzgdthI5MIjQd3jwwOM5dOMddtZ_LCaLjbE00-aFW_Em-lSqNzeeTrBz7xxOZ_r4C7X0U94evhw2A3OgqLEqQ3nCH384gWB8TXdXsN3Q9wDCXq2fLbvjK8otVOXejatH8OUEESKoX02pfpzIH0z4aPuMnBSvHVsGGJTKOVIloS7AHxGLurq7WmUgL2FAKPVIXGA1SUoO8FLPTOhdWDnpiEuqb_Xj2xfmpNvQNW_jGuXdLSgTrTrapPcfwJgUlE/p.png",
      title: "Website Portfolio- Next.JS API",
      github: "https://github.com/RaviHusseinPatel/websiteportfolio",
      description:
        "This fully-responsive modern portfolio website is built using Next.JS, a framework for building server-rendered or statically-exported React applications. It is written in TypeScript, a typed superset of JavaScript that adds type checking to your code, helping me catch errors before I run my code. The website is designed using Tailwind CSS, a utility-first CSS framework that makes it easy to style your application with low-specificity, modular styles. It allows me to apply styles directly to my HTML elements using classes, rather than having to define styles in a separate CSS file. It also implements animations and gestures using Framer Motion, a library for creating animations and gestures in React.",
      demo: "www.google.com",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute mb-1 top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <br></br>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8A9A5B]/80">
        {projects.map(({ id, image, title, github, description }) => (
          <div key={id}>
          <motion.div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={image}
              className="md:mb-0 flex-shrink-0 w-46 h-26 rounded-full md:rounded-lg lg:rounded-full md:w-64 md:h-96 xl:w-[500px] xl:h-[200px] object-contain cursor-pointer"
            />

            <div className="space-y-10  md:px-1 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center border-b-4  border-[#8A9A5B]">
                {title}
              </h4>
              <p className="text-center md:text-left  md:text-xl lg:text-xl ">
                {description}
              </p>
              <a
                href={github}
                className=" mb-3 mx-auto w-1/2 flex justify-center
              bg-[#8A9A5B]/70 hover:bg-[#8A9A5B]/90 py-5 px-10 rounded-md text-black font-bold text-lg hover:translate-y-0.5"
              target="_blank" rel="noreferrer noopener"
              >
                <VscSourceControl />
                Source Code
              </a>{" "}
            </div>
          </motion.div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#8A9A5B]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
