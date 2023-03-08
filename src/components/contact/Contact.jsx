import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact">
            <MdOutlineEmail className="contact_options-icon" />
            <h4>Email</h4>
            <h5>fahad.zahid2004@gmail.com</h5>
            <a href="mailto:fahad.zahid2004@gmail.com" mail="true">
              Send a message
            </a>
          </article>
          <article className="contact">
            <RiMessengerLine className="contact_options-icon" />
            <h4>Messenger</h4>
            <h5>Muhammad Fahad</h5>
            <a href="https://m.me/fahdi789">Send a message</a>
          </article>
          <article className="contact">
            <BsWhatsapp className="contact_options-icon" />
            <h4>Whatsapp</h4>
            <h5>Muhammad Fahad</h5>
            <a href="https://wa.me/03310277429?text=Hey there! Thanks for messaging. How can I help you?">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACTS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send a Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
