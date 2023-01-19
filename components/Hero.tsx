import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import dp from "../public/dp.png"

import MotionCircles from "./MotionCircles";

type Props = {};

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hi and welcome to a Next.JS Portfolio`,
      "but [CollaborativeCode] inspires innovation",
      "<So leave feedback below :) />",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <MotionCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
src=""
        alt="A display picture of me"
      />
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#8A9A5B" />
        </h1>

        <div className="pt-5 mt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
