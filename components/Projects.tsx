import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {VscSourceControl} from 'react-icons/vsc'
import WorldPin from '../public/WorldPin.jpg'
import tictactoe from '../public/tictactoe.jpg'


import Link from "next/link";
import { stringify } from "querystring";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERIREhESERESEhESERISEhcREhESFxQbGBgXFRcbICwkGx0pHhcXJTYlKS4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHRISHTMpJCoyMjIyMjQyMjIyMjIyMjIyMDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAOYA2wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAgMFAQQHBgj/xAA1EAABAwEECAYCAQQDAQAAAAABAAIRAwQSITEFE0FRUnGRsQYUMmGBoSLBByNCYtFykvDx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EADARAAIBAwMBBgUDBQAAAAAAAAABAgMEERIhMUEFE1FhcYEiMsHR8JGx4QYjQkOh/9oADAMBAAIRAxEAPwDrvnGcX0UecZxfRVQBlyHZEIC384zi+ijzjOL6KqIRCAt/OM4voo84zi+iqiEQgLfzjOL6KPOM4voqohEIC384zi+ijzjOL6KqIRCAt/OM4voo84zi+iqiEQgLfzjOL6KPOM4voqphYhAW/nGcX0UecZxfRVRCIQFv5xnF9FHnGcX0VUQiEBb+cZxfRR5xnF9FVEIhAW/nGcX0UecZxfRVRCIQFv5xnF9FHnGcX0VUQiEBb+cZxfRR5xnF9FVEIhAW/nGcX0Uedp8X0VUQkeMenZAThuXIdkXU4GXIdlm6gI7qLqkuouoCO6i6pLqLqAjuouqS6iEBHdRCkuouoBIWIUVtt1OiJqPA3Nzc7kFQ2rxM4mKbA0cT/wAndMlLToznwipcX1C3+eW/gt2ekuoLV4irpKtU9VR/IG6OgUMk5knmZVlWT6yMmp/UEV8tNv1ePue9u80XV4anM/jn7EyrChabQzJ7+TiHD7XkrNriQp/1BF/NTfs8/Y9TCIVNZ9NuECqyP8m4fRVxZ67KgvMcHDbvHMKtOlOHKNa2vqFxtTlv4PZhdRdUsLEKMtkd1F1SQi6gI7qLqkuouoCO6i6pLqLqAjuqN7cenZbF1Rvbj07ICcNy5DsFm6nAwHIdgswgI7qLqkhEICO6i6pIRCAjuouqSEQgI7q85pvxEKZNOhDnjB1TNtM7m73fQSeK9O6ubNSdDyP6rxmwEegHiOZ3BeJNpaN8bDGB6q3RpwS11H6GJ2j2hKL7qjz1f0RvVKrnOLnOJccS5xxJ9ygFa1GqHZHLZtCmaVpQkpJOPB8zNPO5M0p2lQhO0roiaLiysDWA7TiStgLUsdS8wb24H9LZBVd8l2KWlYHzwOIUYpuYb9Nxa4bj/wC6JwmC8TOXFPfr49S10ZpUVTcfDKmzc7luPsrS6vIWmnIvD1DHdKu9B6T1o1b8KjRhOBc39lU69FL4om72Z2nKcu5rPfo/H18/zktLqLqkhEKqbxHdRdUkIhAR3UXVJCIQEd1Rvbj07LYhRPbj07ICcDAch2WbqdowHIdlm6gI7qLqkuouoCO6i6pLqLqAjuqs8Q6TFks76uF8wymOKo7Lpn8K3url/wDIOlBUtYoSblmYMNjqrwC6eTS0fJXsVl4K91V7qk5LnoUNWsSSXOvOeXOkmLziccd+JSPbcbLsdzZiOe9QirdfBwZlIAIlb+BwIBCvqCq533Wx8pJ6cGiKxwgxBwAwTmqXRJK1b2PtJjkna5ZcpPjJ24m/ZrQGnb8GZO6FYscYxEHdMqosbv6g+fdWoK1LFycMt7FS4STNuz1ix07MiN4VkLSyJDr2eDfydh7DFUzSgUxeDueGUk4TOcqzWjLHwEVOenZnoGPkA4id4g9FhzZ24bhgZ3ytaha2wASQRhLjen52rZbUBycOq4afDJ1JPga8GgSYEhonaTkOarbXUdSc17Ddex8tP65KerVaKrSTN1hLGjiLoJ5wqy3ViSQRtvT7KvXnilPPovUhqfMscrc6Ro21tr0mVW5OGI4XDBw+Ctm6vHeBrb+b6BODhfZ/yEh31HRe1urPg8rJ9rZ1+/oxn16+pHdRdUl1F1dFojuouqS6i6gI7qR7cenZT3VE8Y9OyAnYMByHZZhZYMByHZNCASEQnhEIBIRCeEQgI3EAEnAASeQzXALTVdaa1asZOsqPed/5OJAHxHRd202+5ZrQ/hoVSOdwrg2jHi6W7c+YgKSjBTmoyMvtOTUVgltBAY2mJkkHER8z8rco1JZOLYBzxiO60aT9YXNecGkFpyIxiFv/ALCv0IttzXGML2/Pcw6uy0srHOEmMpw2J2ScgTyCWy0S90HIertCtqTAwQ3AKjRtXV3eyOqs1DYxYGFrZIxOWBBHVbrStOpUqTDWAjeTmthpWpRSitCzt5FKom3lkzSmLwBJIA91G0rTt9pHoBB4iMfhK9VUoORFCnqeDZdpEA/i2RhicPpTU7dTMZgneMvkKqqMDWNJ9TsY3N2JqNpLARgdokSQfZZivKsZfE/+E8qEGti0r2wNwAl2UEen/wCrUFcnMzgQPaVql84zJ90ByrVq86jy2eKko8F1oC1aq1UX5f1Lp5OwXWCFxSi+HNO4tPQhdsomWtO9oP0uaXU+g7GfwTj5oxCITwiFKbQkIhPCIQCQoXjHp2WzC1q3qPx2QGwzIch2TJWZDkOyZACEIQAhCEBp6Yp37NaGZl1Gq0cywwvnWzVLpB9vuF9LQvnDTdkNmtdooHDV1ntHuybzD8tLSmcNMo3sMpMgDtvyryhVD2hw25jcVU2SkXDFktnE/wB/tHsrGg27Iuhrc2wZ6+6vWcZR36MxbjD2NpoEkwJOZ2nmpGlQApwVo4wUJInBWX1A0FxyGajaUlVjiW4i4JvN4sMlxNtR25OYxTe5tTeaYMXm4HmFV1KBYBiCZukDGDEhNRthY1zXD8gfxbOzcTuGCgNrfeLgbpPCsy5q06kU3z+30LFOnKDfgWlqeGtYXBjnxH5A48oVffk7vYYD4ULqrnGXEk+6A5Va9XvJZXB7GnpWDYDk4ctcOThygPHE26AvPY0ZuLW9XALuNJsNaNwA+lx3wnZddbaDMw1+sdyaJ/0uyqSmjb7JhiEpeL/YEIQpDWBCEIAWrW9R+Oy2lrVvUfjsgJ2ZDkOyZKz0jkOyZACEIQAhCEALkH8q6HLbWy0tyr0odhnUpYYneWFv/VdfXnPHOizabFUuialL+tTG8tzHy0kLqONS1cENxByptLk4/Qwa0TIAEKUFa1F8gGIBEj/XNTgrbhwsHy847smaU4KgaVICuiKSJWlJarWKd2RMztiFkFaWkLUBDBdJ2yJu8vdQ3E9EG84FKGqWMBSo65znNFxsj/IzGxTusTWC8432x6T+Lp/x3n2Va+1VHCC8xu9I6BbFit+rF0tvAmZnFZkJ0W/iXv8Awi1OFRbr9P5JjY33y0brwJGzcSMAVFqn3bxY4NG0ggKd+lnSbrRd2Xs/pJaLW+o2ZhoLQWjecifbBc1I0MPS3k4XedUiIOTByWg5km/MRgWnEH9rer2C6GXCXOc4NAIgyRhAUEaUpJuPQSaTwz238YWGTWtJGUUmH3zd+l0NVnh3RostlpURm1svPE92Lj1Ks10lhYPpban3dKMQQhC9JwQhCAFrVvUfjstlatb1H47IDZp+kch2TJafpbyHZMgBCEIAQhCAFgtnA4hZQgOFeKNE+TtlWlH9Kob7NwDsRHtMj2IVcxwjAyOcrqP8k6I1tmbaWiX2ckvwxNF3q/6mHcgVxUPdTqGNhOByIK0IXChBSfo/IxLm2/uNe6L4FM0rVs9pa8SDiMwcwtgFXlJSWVwZkoOLwx3uN1131XTHNUIcr3PDeCOqoalMscWuwI+xsIWffx3iyxa9UMHJw5QgpgVnFhxJgVv2Jl9lYDO4CBvIMqsBWxZWvc8NYSHHaDEDaeS9pvEltkjnHYt9H2CCH1M82t/bv9L13hPR+vtTXOEsoDWH/mcv/ey8/TbdAEzA24krqHhPR+oszS4RUqfm7eAfSOi0qkY0aWmPLILGk7i4y+Fv9i9CEIWefUghCEAIQhAC1a3qPx2W0tWt6j8dkBsU/S3kOyZLT9I5DsnQGELKEBhCyhAYQsoQEVWmHtc1wBa4EOBxBBEEL5+8ZaFdZbTUZBhhlp4qR9J+MvhfQsLxX8k6F11n8wxsvoA3hxUj6umfVTUWm9D4f79CtdU3KOpcr8aOI2auabrwE7CN4V3Z7Sx/pcJ4dqo69K44t2ZtO8bEWd0PYf8AId13SrSovS/EzKlKNRZPRgrLmNf6mh3PYkBTArWaT2ZmbrcyKFOLurbG6P2qJxxOEYnDd7K/aVRWsjWPjK8VnX0ElFos2rbbTEBXo9HWYU2Y+twBcd25qorFTv1GjYDeduAGOK9Ex94AjI5e42Lmxgm3J+31ObyTwoo9B4W0b5m0tBE06cPq7iAfxb8n6BXVYVF4R0V5azC8P6lWHv3iRg34H7V9CiuKmue3CNrs+27mlvy939v0BCFlQF4whZQgMIWUIDC1a3qPx2W2tWsPyPx2QE9P0jkOydRsP4jkOyaUAyEsolAMhLKJQDISyiUAyjewOBBAIIIIOIIOYKaUSgOBeNtBGyWh9IA3ATUoO4qTj6Z3txHwDtXl6AJc2MTIyXf/ABzoLzllJaJrUZfT3uEfkz5H2Fwem006wbl+X0VZlippl54f0Zl1Kfdtpccr6ouJTtKiBTArXMdomBXnzmZzkq+a5VFioaypJ9Axd745LPvYObil5li3elSbN2yWU3A2MapBed1IbPle38FaJ8zaA5w/pUYe7cXf2t/fwvNUWue5rGguc9wa1o2uJgBdl8O6KFks7aWBefzqO4qhz+BgB7Be1cUIaY8vb2JLSk7irqlwt/fp+eRbBZSyiVnH0AyEsolAMhLKJQDISyiUAy1ax/I/HZbErWreo/HZASsOA5DssykYcByHZEoB5RKSUSgHlEpJRKAeUSklEoB5RKSUSgHlca/krw/5W1MtVMXaNVxJgYMfm5vI4uHzuXY5Vfp7RdO2WapZ35Pb+Lsyx49LhyK7py0sirU9ccHCQU4KWtZn0HPoVBFSk4seN8ZEexCUFbcZalk+enFxeCYFOyAIAAG4BQtKstC6Ofa67KDMC8/k7gYPU88h9kBG0llkag5PC6nsf480LecbW8YNJbRB2uyc/wCMuq6JK1rJZ2UmMpsF1jGhrR7Df7qaVi1ajqS1H0lCiqMFFDSiUkolRkw8olJKJQDyiUkolAPKJSSiUA8qF5x6dk8qN5x6dkAzTgOQ7LMqMHAch2CzKAeUSklEoB5RKSUSgHlEpJRKAeUSklEoB5RKSUSgPB/yVoO80W1jfyYAyvG1k/i/4Jg81zhfQNVjXtcx7Q5j2lr2nJzSIIPwVxPxHod1itL6Jks9dF5/vpk4T7jI8vdaVnVytD9jJv6GH3i9ysDl1rwHoTy1DWvbFauA4zmynm1v7K8T4H0J5u033iaNAtfUnJ782M/Z9h7rrsrm8q/4L3OrCh/sft9xpWZSSiVnmoPKJSSiUA8olJKJQDyiUkolAPKJSSiUA8qF5x6dk8qN5x6dkAA4DkOyzKQHLkOyzKAaUSllEoBpRKWUSgGlEpZWC5APKJWu55UL3uQG7KzeG9VL6lTYtapVrbAgL7WDeqDxhoYW2zwyNfTN6kSYBP8AcwncR2ULq1fcl11fcvYzcXlHk4KScWWvh/RrLHZ2UGkEj8qj8r9R3qd2A9gFZawb15jXV9ydtavuRybeWexiksI9LI3rEqhZVrbQtmnUqbQvAW0olaTXuUzHFATyiUgKzKAaUSllEoBpRKWUSgGlRvOPTsmlRvOPTsgAHLkOyzKjBy5DssygHlEpJRKAeUSklEoB5RKSUSgGlCWUSgMwNyxcG5EolAFxu5Y1bdyzKJQGNW3cs3G7kSiUAXBuWYCxKJQDLMpJRKAeUSklEoB5RKSUSgHlEpJRKAeUjzj07IlI849OyAttS3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGqbwjohCANU3hHRGpbwjohCA//Z",
      title:'WorldPin- React&SpringBoot API',
      github: "https://github.com/bendesousa/bnta_capstone_project" ,
      description: "This project is a collaborative effort that leverages the React library and a Java SpringBoot API to build a web application that keeps users informed about global updates. The application integrates with various APIs, including Google Maps, Geolocation, and Google Search, to offer a comprehensive and interactive user experience. It also uses Firebase Storage to store user data and uploaded photos, to be rendered upon page load.",
    
      },
      {
      id: 2,
      image: "https://previews.dropbox.com/p/thumb/ABxxCz2Ulpd5CFRMGK3YZfbQdsjUH9yjti2D__9OfPxWUoexyrnhAzZacfH5neJZxxfjeYRvGW000Eet06c1rkuszM8LvP3rrtF_Y3_Q7cj2JcEUYLXXzF-yn192t_4RQePcbIkYXZ7k-57l_xCHiFeLOB7R5uaCCPFkE8bpr9eYPLm-5z04qFiqEdAka8JFNTL7HkiJCATi5WSeCN-Qvra5QpmciWXU_KQriqjIZpwT7gBb85RL7Vg9bBr6oV8nr9-wmObji0gUS7UOuYXDcfLWHM9M581QZtCRXPB6_aJpzUsE23Q3yn5Ru2adKpx9SCKj7SNAlDFvYgXQmKOI2-g-xP8JVASbDFx8h1ndaIdYVsPozg1pHoCFpqZl1hBuZ3k/p.png",
      title: 'TicTacToe- SpringBoot API',
      github: "https://github.com/RaviHusseinPatel/TicTacToe-2player-", 
      description:"A RESTful API containing repositories,services, models and controllers;developed using Spring and Postgres. It is a local 2-player tic-tac-toe game where players take turns trying to place 3 of their counters in a vertical, horizontal, or diagonal sequence. The results are stored in a SQL database, which records the game ID, the players associated with that game, the status of the game, and the winner (if the game is complete). We used Postman to test our code, ensuring that the API allows us to add players to a game and create sequences that result in a winner when any of the winning combinations are satisfied. ",
      },
      {
      id: 3,
      image:"https://previews.dropbox.com/p/thumb/ABx1wBWPWNbWwI4_OkPtl2aSFCuffYWClTx_6ihOgAHwphU1nNStZc_WL93ZGZscAr5zpn-zO5RaHm4BoxVsp68aKsEuN7JFnqXbop1zOEkoYJ-bZ7S7p4N2YCq_9cDqx_pzbolx7z-U1lIhQ3mP5hf4swBR_zRbsRHYKcATARxQhFiOMOtVu860_uVtzktEUZ2O2KvBqd_6MNONQVXCa2nh8ckb3lz_9CLmsVaQPtGeMef9Wk5la8gxcGhrGUAYkP9QXgDNmOuyQ_azMdH-vqFuuEVQx_1QHVC1PLhUsap0-dDIw_ZdOWfSmgN-zUwOU9vSp3FFaYKTx7uyggqjW6sqmU2pyNfkDlHeFlcCJzRwAIAylYW928egK8O8VE1gQh4/p.png",
      title: "Portfolio- A Next.JS API",
      github: "https://github.com/RaviHusseinPatel/websiteportfolio",
      description:"This is a  modern portfolio website is built using Next.js, a framework for building server-rendered or statically-exported React applications. It is written in TypeScript, a typed superset of JavaScript that adds type checking to your code, helping me catch errors before you run your code. The website is designed using Tailwind CSS, a utility-first CSS framework that makes it easy to style your application with low-specificity, modular styles. It allows me to apply styles directly to my HTML elements using classes, rather than having to define styles in a separate CSS file. It also implements animations and gestures using Framer Motion, a library for creating animations and gestures in React. It provides a simple, declarative API for creating complex, interactive animations that can be easily composed and reused.",
      demo:"www.google.com",
      }
  
  
  
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <br></br>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8A9A5B]/80">
        {projects.map(({id, image, title, github, description}) => (
          <motion.div className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={image}
              className="md:mb-0 flex-shrink-0 w-46 h-26 rounded-full md:rounded-lg lg:rounded-full md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain cursor-pointer"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                {/* <span className="decoration-[#0ab4f7]/50 underline text-2xl">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "} */}
                {title}
              </h4>

              <p className="text-center md:text-left  md:text-xl lg:text-xl ">
               {description}
              </p>
              <a href={github} className="mr-auto flex justify-center
              bg-[#8A9A5B]/70 hover:bg-[#8A9A5B]/90 py-5 px-10 rounded-md text-black font-bold text-lg hover:translate-y-0.5" target="_blank"><VscSourceControl/>Source Code</a>            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#8A9A5B]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
