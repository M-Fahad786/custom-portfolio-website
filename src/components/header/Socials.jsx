import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/muhammad-fahad7865/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/M-Fahad786" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
