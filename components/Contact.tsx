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
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
      >
        <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
          Contact
        </h3>
  
        <div className="flex flex-col space-y-10 ">
          {/* <h4 className="text-4xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
          </h4> */}
  
          <div className="space-y-10 pt-10 lg:pt-20">
            <div className="flex items-center space-x-5 justify-center  ">
              <PhoneIcon className="text-[#8A9A5B] h-7 w-7 animate-pulse" />
              <a className="text-xl border-b-2 border-dotted border-[#8A9A5B]" 
              href="tel:+447375502926">
             +44 7375 502926
              </a>            </div>
            <div className="flex items-center space-x-5 justify-center">
              <EnvelopeIcon className="text-[#8A9A5B] h-7 w-7 animate-pulse" />
              <a className="text-xl border-b-2 border-dotted border-[#8A9A5B]" 
              href="mailto:ravihusseinpatel@gmail.com">
              ravihusseinpatel@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-5 justify-center">
              <MapPinIcon className="text-[#8A9A5B] h-7 w-7 animate-pulse" />
              <p className="text-xl">London,UK (Willing to relocate)</p>
            </div>
          </div>

      <form ref={form} onSubmit={sendEmail} className="mx-auto flex flex-col space-y-2 w-full pt-5 ">
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
