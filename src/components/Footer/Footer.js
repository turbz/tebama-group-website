import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="Tebama-Footer">
      <footer>
        <div id="about">
          <figure>
            <StaticImage
              src="../../images/tebama-white-wheels-logo.png"
              alt="Tebama Group Of Company Logo"
            />
          </figure>
          <p>
            Our global logistics expertise, advanced supply chain technology &
            customized logistics solutions will help you develop and implement
            successful supply.
          </p>
          <ul className="socials">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
        <div>
          <h3>Our Services</h3>
          <span></span>
          <ul>
            <li>
              <a href="#services">About Us</a>
            </li>
            <li>
              <a href="#features">Meet Our Team</a>
            </li>
            <li>
              <a href="#features">New & Media</a>
            </li>
            <li>
              <a href="#features">Case Studies</a>
            </li>
            <li>
              <a href="#features">Contacts</a>
            </li>
            <li>
              <a href="#features">Careers</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <span></span>
          <ul>
            <li>
              <a href="#features">Warehousing</a>
            </li>
            <li>
              <a href="#contact">Air Freight</a>
            </li>
            <li>
              <a href="#contact">Ocean Freight</a>
            </li>
            <li>
              <a href="#contact">Road Freight</a>
            </li>
            <li>
              <a href="#contact">Supply Chain</a>
            </li>
            <li>
              <a href="#contact">Packaging</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>CONTACT DETAILS </h3>
          <span></span>
          <ul>
            <li>
              <a href="#services">Retail & Consumer</a>
            </li>
            <li>
              <a href="#services">Sciences & Healthcare</a>
            </li>
            <li>
              <a href="#services">Industrial & Chemical</a>
            </li>
            <li>
              <a href="#services">Power Generation</a>
            </li>
            <li>
              <a href="#services">Food & Beverage</a>
            </li>
            <li>
              <a href="#services">Oil & Gas</a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <ul>
            <li>
              © 2022 Transportation Shipment Theme - All Rights Reserved. Design
              & Developed by <span> Taevo (Pty) Ltd</span>
            </li>
            <li>Terms and Conditions | Privacy Policy</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
