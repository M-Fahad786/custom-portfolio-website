import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/movie website.png";
import Image2 from "../../assets/news website.png";
import Image3 from "../../assets/portfolio1.jpg";
import Image4 from "../../assets/portfolio2.jpg";
import Image5 from "../../assets/portfolio3.jpg";
import Image6 from "../../assets/portfolio4.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image1} alt="movie_website" />
          </div>
          <h3>Movie Ticket System Website</h3>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image2} alt="movie_website" />
          </div>
          <h3>News Website</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image3} alt="figma_statistic" />
          </div>
          <h3>DashBoard Design </h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image4} alt="figma_design_dashboard" />
          </div>
          <h3>Statistic Web Design</h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image5} alt="figma_design_dashboard" />
          </div>
          <h3>Android App Design </h3>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Image6} alt="figma_design_dashboard" />
          </div>
          <h3>Video Editor App</h3>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
