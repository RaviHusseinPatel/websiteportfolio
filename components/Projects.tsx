import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscSourceControl } from "react-icons/vsc";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      image:
        "https://lh3.googleusercontent.com/ww6QJpySCMrS8r79RCqjob0KSqfcFItcbjV3zaBuZC-py2Jv0411WfMWALVQydiR9yJDiyslRZj7Jj6_W3Ni5Cxha3k5blkchzSI5HoTsEVtr4h6PEnXKxIJNrOSoSbenGbZGihKvGhkkLxOPrWSE6o8xXrfTt2JsBtyPbs1w9gDKGnsZhiJO2qp6cTSN8Y079ebkQy0eiRikKmxQf-CwrViSSMHuHuvgD6f1X6-8vllHgZLvHhyF53ADfY6AHK-OuRX83__ZabO3BsQj-PyrU8AdXxcCEdWDCtwHHsZo4Zxhi2Ed3j7tYXli4bit8XMfBURAhGbvZqGid6hrTw7Xg4lerkk-JbCUXxtQh05A3ZUM3at_ns_tVTcHZYi2wDN_h59OC_-0FuTQhe6D0qxwlbAzZoXdFtv_HGzejclaUio1R-X_TsLBrVh7XuY3dPsWXZZcfPRpMhgibY7HiKX0YoFBPiAfWEGzKL0-vcIiUQPpOgHme5WHUcKOUAJhNXes7iHlK-EiHXAVOz8Lxow3YGIN9VezdNBQJs3PAD0zskl0aeV_97yw5zCz3lxHErakkp8yq5XmU_7D5E2lMtYnIHd7aUulpP9Qmd8lhqfM0kaFLA_5Ysk7zrEBEgYaTFuAlMN9J7EorRJ5yDadLWw9mBQK0Q321eJlL65SzJ9BMBJsHUo76IouNzNbTM6LAVY4I1tPmoZWUEmegZR7LPhKkLA6VAAql2fgCMPqFPQqsW87CKm-04PtN8swspkiZaGfxYAU3Z-ya8OFt0R6fdvzg5oY-HWKtOukJg7oBpEBgYZG1wg7UFy87eBLw-vpZy1NmYvgMIEA9AKmESMTb0MZWphn5hn4NVXryBKNtcAB8h1ZcPKzg5s0gkLKL3PYAawD2U7FwtBxHBmfXwnr0I6VxHwxof9imZkeIO5wTm4ydoJlBo=w792-h383-no?authuser=0",
      title: "WorldPin- React&SpringBoot API",
      github: "https://github.com/bendesousa/bnta_capstone_project",
      description:
        "This project is a collaborative effort that leverages the React library and a Java SpringBoot API to build a web application that allows users to communicate their world travels in the form of photos located on a map. The application integrates with various APIs, including Google Maps, Geolocation, and Google Search, to offer a comprehensive and interactive user experience. It also uses Firebase Storage to store user data and uploaded photos, to be rendered upon page load. This app is designed to be used by travellers and long distance loved ones- where individuals can track each others updates from around the world in the form of pictures, captions and dates.",
    },
    {
      id: 2,
      image: "https://photos.app.goo.gl/8uTyd4SVP3vaChuY7",
      title: "TicTacToe- SpringBoot API",
      github: "https://github.com/RaviHusseinPatel/TicTacToe-2player-",
      description:
        "A RESTful API containing repositories,services, models and controllers; developed using Spring and PostgreSQL. This project is a local 2-player tic-tac-toe game where players take turns trying to place 3 of their counters in a vertical, horizontal, or diagonal sequence. The results are stored in a SQL database, which records the game ID, the players associated with that game, the status of the game, and the winner (if the game is complete). We used Postman to test our code, ensuring that the API allows us to add players to a game and create sequences that result in a winner when any of the winning combinations are satisfied. ",
    },
    {
      id: 3,
      image:
        "https://i.postimg.cc/3RNM6nDg/Screenshot-2023-01-19-at-15-50-57.png",
      title: "Website Portfolio- Next.JS API",
      github: "https://github.com/RaviHusseinPatel/websiteportfolio",
      description:
        "This fully-responsive modern portfolio website is built using Next.JS, a framework for building server-rendered or statically-exported React applications. It is written in TypeScript, helping me catch errors before I run my code. The website is designed using Tailwind CSS, a utility-first CSS framework that makes it easy to style your application with low-specificity, modular styles. It allows me to apply styles directly to my HTML elements using classes, rather than having to define styles in a separate CSS file. It also implements animations and gestures using Framer Motion, a library for creating animations and gestures in React.",
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

      <div className="mt-4 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8A9A5B]/80">
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
                alt="project preview"
                className="md:mb-0 flex-shrink-0 w-66 h-20 rounded-full md:rounded-lg lg:rounded-full lg:pt-12 md:w-94 md:h-56 xl:w-[500px] xl:h-[400px] object-contain"
              />

              <div className="space-y-10 max-w-6xl">
                <h4 className="text-xl  md:text-3xl font-semibold text-center border-b-4  border-[#8A9A5B]">
                  {title}
                </h4>
                <p className="text-center text-xs md:text-left  md:text-lg lg:text-lg ">
                  {description}
                </p>
                <a
                  href={github}
                  className="translate-y-.5 mx-auto w-1/2 flex justify-center
              bg-[#8A9A5B]/70 hover:bg-[#8A9A5B]/90 py-5 px-10 rounded-md text-black font-bold text-lg hover:translate-y-0.5"
                  target="_blank"
                  rel="noreferrer noopener"
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
