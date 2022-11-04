import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { IoIosCall, IoIosMail, IoIosPin, IoMdMenu } from "react-icons/io";
import "./Header.css";

export default function Header() {
  return (
    <header id="header" className="Header">
      <div className="logo">
        <h1>Tebama Group</h1>
        <StaticImage
          src="../../images/tebama-white-wheels-logo.png"
          alt="Tebama Group Of Company Logo"
        />
      </div>
      <div className="main-nav">
        <div className="connect">
          <ul className="contacts">
            <li>
              <IoIosMail />
              <span>
                <a href="mailto:info@tebamagroup.co.za">
                  logistics@tebamagroup.co.za
                </a>
              </span>
            </li>
            <li>
              <IoIosPin />
              <span>15/A, Vaal, GP</span>
            </li>
            <li>
              <IoIosCall />
              <span>+27 015 000 8450</span>
            </li>
          </ul>
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
        <nav>
          <button>
            <IoMdMenu />
          </button>
          <ul className="navigation">
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#header">Home</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#about">About</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#services">Services</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <span className="arrow">
                <span></span>
              </span>
              <a href="#home">Call Now</a>
            </li>
          </ul>
          <button>Request for quote</button>
        </nav>
      </div>
    </header>
  );
}
