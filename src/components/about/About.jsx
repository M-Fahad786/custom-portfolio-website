import React from "react";
import "./about.css";
import Image from "../../assets/profile2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={Image} alt="profile" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__article__card">
              <FaAward className="icon" />
              <h5>Experience</h5>
              <small>8+ Years Working</small>
            </article>

            <article className="about__article__card">
              <FiUsers className="icon" />
              <h5>Clients</h5>
              <small>Satisfied Worldwide</small>
            </article>

            <article className="about__article__card card3">
              <VscFolderLibrary className="icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>

          <p>
            Looking for a web developer to bring your vision to life? With
            extensive knowledge and innovative solutions, I have the skills to
            tackle even the most complex projects. I pride myself on effective
            communication, a commitment to quality work, and exceptional
            customer service. Let's work together to create something
            remarkable!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
