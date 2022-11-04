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
    <section id="footer" className="Tebama-Footer">
      <footer>
        <div id="about">
          <figure>
            <StaticImage
              src="../../images/tebama-white-wheels-logo.png"
              alt="Tebama Group Of Company Logo"
            />
          </figure>
          <p>
            Tebama Group of Companies (TGC) is a transport and logistics
            brokerage company established in 2020.
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
              <a href="#shipping">Ground Shipping</a>
            </li>
            <li>
              <a href="#loading">Loading</a>
            </li>
            <li>
              <a href="#trailer">Trailer Serivces</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <span></span>
          <ul>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#contact">Request A Quote</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>CONTACT DETAILS </h3>
          <span></span>
          <ul>
            <li>
              <a href="#team">Retail & Consumer</a>
            </li>
            <li>
              <a href="#team">Sciences & Healthcare</a>
            </li>
            <li>
              <a href="#team">Industrial & Chemical</a>
            </li>
            <li>
              <a href="#team">Power Generation</a>
            </li>
            <li>
              <a href="#team">Food & Beverage</a>
            </li>
            <li>
              <a href="#team">Oil & Gas</a>
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
