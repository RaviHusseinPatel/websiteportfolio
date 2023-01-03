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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <br></br>

      <div className="flex flex-col space-y-10">
        <h4 className="text-xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#0ab4f7]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="text-[#0ab4f7] h-7 w-7 animate-pulse" />
            <p className="text-lg">+44 737550 2926</p>
          </div>

          <div className="flex items-center justify-center">
            <MapPinIcon className="text-[#0ab4f7] h-7 w-7 animate-pulse" />
            <p className="text-lg"> London,England (Relocate)</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="p-4 ">
          <div className="mb-4 border-spacing-1 ">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full py-2 px-3 rounded-lg shadow-sm bg-[rgb(56,55,55)] text-white placeholder-gray "
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full py-2 px-3 rounded-lg shadow-sm bg-[rgb(56,55,55)] text-white placeholder-gray"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full py-2 px-3 rounded-lg shadow-sm bg-[rgb(56,55,55)] text-white placeholder-gray"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn btn-primary py-2 px-4 rounded-lg shadow-sm mx-auto border-2 border-white hover:bg-[#0ab4f7]/50 hover:text-white"
            >
              {" "}
              Send Message{" "}
            </button>
          </div>
        </form>

        {/* </motion.div>
      <section id="contact" >
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ravihusseinpatel@gmail.com</h5>
            <a href="mailto:ravihusseinpatel@gmail.com" target="_blank"> Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+44 7375502926</h5>
            <a href="https://api.whatsapp.com/send?phone=+447375502926"> Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h4>LinkedIn</h4>
            <h5>Ravi Hussein-Patel</h5>
            <a href="https://www.linkedin.com/in/ravihussein-patel/" target="_blank"> View Profile</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary"> Send Message </button>
        </form>
       </div>

      </section>
    ) */}
      </div>
    </motion.div>
  );
};

export default Contact;
