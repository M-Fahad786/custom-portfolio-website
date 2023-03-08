import React from "react";
import "./work.css";
import { BiCheck } from "react-icons/bi";
const Work = () => {
  return (
    <section id="work">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container work__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="list-icon" />
              <p>
                Conduct user research to better understand their needs and
                preferences
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Structure website in a logical and user-friendly way so users
                can easily find what they need
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>Identify and troubleshoot UX problems (e.g. responsiveness)</p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Create visually appealing designs for a consistent interface
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Design seamless and enjoyable user experiences by understanding
                user behavior
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Evaluate the effectiveness of website having users interact with
                them and providing feedback to identify areas for improvement
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="list-icon" />
              <p>
                Creating a visually stunning and functional website that meets
                the client's needs
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Improving the visibility and ranking of the website on search
                engines to attract more visitors
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Regularly updating and maintaining the website to ensure it
                remains functional and secure
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Integrating a CMS like WordPress to make it easy for clients to
                manage their website content
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Ensuring the website is hosted on a reliable server, providing
                clients with a stable and secure platform for their website
              </p>
            </li>
            <li>
              <BiCheck className="list-icon" />
              <p>
                Implementing website analytics tools like Google Analytics to
                track website performance, analyze user behavior
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Work;
