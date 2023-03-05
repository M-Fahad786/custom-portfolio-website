import React from "react";
import CTA from "./CTA";
import Socials from "./Socials";
import "./header.css";
import Profile from "../../assets/me.png";
const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <h5> Hello I'm </h5>
        <h1>Muhammad Fahad</h1>
        <h5 className="text-light">Full Stack Web Developer</h5>
        <CTA />
        <Socials />

        <div className="image">
          <img src={Profile} alt="profile" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
