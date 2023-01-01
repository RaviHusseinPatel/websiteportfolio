import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

type ContactProps = {}

const Contact: React.FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_resiyjk', 'template_0682g8r', form.current, 'twRllAXMHeliQ5GuD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.currentTarget.reset();
  };

    return (
      <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
       <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ravihusseinpatel@gmail.com</h5>
            <a href="mailto:ravihusseinpael@gmail.com" target="_blank"> Send a message</a>
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
    )
  };
  
  export default Contact;