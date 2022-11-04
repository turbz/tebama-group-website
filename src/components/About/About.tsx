import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FaCogs, FaCubes, FaGraduationCap } from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="About">
      <h2>
        ABOUT
        <span> TEBAMA GROUP</span>
      </h2>
      <div className="wrapper">
        <div className="video">
          <StaticImage
            src="../../images/photo-1531683760080-7bb28a630bd7.webp"
            alt="video"
          />

          <h5>10 Year Experience</h5>
          <div className="tree">
            <StaticImage
              className="video-image"
              src="../../images/tree.png"
              alt="icon"
            />
            <p>Lorem ipsum simple Dummy text</p>
          </div>
        </div>
        <div className="experience">
          <h2>
            Your Modern
            <span> logistic </span>Partner
          </h2>
          <p>
            Logistic is a global supplier of transport and logistics solutions.
            We have offices in more than 50 countries and an international
            network of partners and agents, making us a truly global player that
            offers services worldwide.
          </p>
          <h4>THE STANDARD LOREM IPSUM PASSAGE, USED SINCE THE 1500s</h4>
          <ul>
            <li>
              <FaGraduationCap />
              <span> Always learning - </span>
              <span>he thing that makes us different.</span>
            </li>
            <li>
              <FaCogs />
              <span> Latest Technology - </span>
              <span>he thing that makes us different.</span>
            </li>
            <li>
              <FaCubes />
              <span> Safety & Quality - </span>
              <span>he thing that makes us different.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
