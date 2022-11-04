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

          <h5>20+ Years Experience</h5>
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
            Tebama Group of Companies (TGC) is a transport and logistics
            brokerage company established in 2020. The company is a located the
            Vaal Triangle. The company support and empower local or communities
            based trucking companies. TGC is undertakes national and
            international shipments.
          </p>
          <h4>VALUE PROPOSITION</h4>
          <ul>
            <li>
              <FaGraduationCap />
              <span> Reliable - </span>
              <span>We will get your shipment there (Nomakanjani).</span>
            </li>
            <li>
              <FaCogs />
              <span> Punctual - </span>
              <span>We promise to deliver on time.</span>
            </li>
            <li>
              <FaCubes />
              <span> Ubuntu - </span>
              <span>person is a person because of others Directors:.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
