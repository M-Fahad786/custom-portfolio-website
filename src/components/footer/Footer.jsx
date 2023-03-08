import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Footer = () => {
  return (
    <footer id="#footer">
      <a href="#footer" className="footer__logo">
        Muhammad Fahad
      </a>

      <ul className="permalink">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#work">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/fahdi789">
          {" "}
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ig_fehdi">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Muhammad Fahad. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
