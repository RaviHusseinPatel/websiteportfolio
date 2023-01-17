import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import MotionCircles from "./MotionCircles";

type Props = {};

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hi, welcome to my Next.JS Portfolio`,
      "but [CollaborativeCode] runs faster",
      "<So please leave feedback below/>",
    ],
    loop: true,
    delaySpeed: 1500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <MotionCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://previews.dropbox.com/p/thumb/ABzhiYgGSfS0Aa5stFZVPMJ50EmGXR0Owld3cuz10KaPn_dF_27LvrtUCLLaqiIYn-Tesdif0-cFgFAwnThfqfbA4AaAVistjU7_tYKOBrC1k9WXTEySZaeBYGofF9Gjq13q0cSFzacYpTqXxz5-Mb9iq3yzwZH3KqluxtLifxMMKvE72MONVxVRUUP4iYkp90XqD9JLfgfmG7T5-1cIrXQBzgh4t05Yqj3pKf3iNTPyNqIUtcEVsA6fqHMKt89BfpmnHoqfdvj13N1UVj4C2AoTQkJcvnKi07RuyzHoLhUKku64vhXeqoxklJ3IcUcAFf6uUThgCJW2sd01LbGVRLNaSZhNuosvXFMWMQAzHRoRkgCHyf8b8zo7TL2X90Z4Q2M/p.jpeg"
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
