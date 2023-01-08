import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function Contact({}: Props) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_resiyjk",
        "template_0682g8r",
        form.current,
        "twRllAXMHeliQ5GuD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
   className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen mx-auto items-center justify-center">
  <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
    Contact
  </h3>

  <div className="relative w-full top-5 space-y-6 pt-2 pb-5 lg:text-3xl text justify-center">
      <div className="space-y-6 pt-2 pb-5 lg:text-3xl">

        <div className="flex items-center space-x-2 ">
        <EnvelopeIcon className="text-[#8A9A5B] h-7 w-7 animate-pulse" />
        <a className="text-lg lg:text-3xl" >
         ravihusseinpatel@gmail.com
        </a>
      </div>

        <div className="flex items-center space-x-2 ">
          <MapPinIcon className="text-[#8A9A5B] h-7 w-7 animate-pulse" />
          <p className="text-lg lg:text-2xl"> London,England (Willing To Relocate)</p>
        </div>
      </div>

      <form ref={form} onSubmit={sendEmail} className=" flex flex-col space-y-2 w-fit pt-5 ">
        <div className="mb-4 border-spacing-1  ">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className=" contactInput"
          />
        </div>
        <div className="mb-4 border-spacing-1 ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="contactInput"
          />
        </div>
        <div className="mb-4 border-spacing-1 pt-3 ">
          <textarea
            name="message"
            rows="6"
            placeholder="Message"

            className="contactInput w-full"
          />
        </div>
        <div className="flex justify-center w-75">
          <button
            type="submit"
            className=" mr-auto
          bg-[#8A9A5B]/70 hover:bg-[#8A9A5B]/90 py-5 px-10 rounded-md text-black font-bold text-lg hover:translate-y-0.5"
          >
            {" "}
            Send Message{" "}
          </button>
        </div>
      </form>
    
  </div>

    </motion.div>
  );
}

export default Contact;
