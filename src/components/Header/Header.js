import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  IoIosCall,
  IoIosMail,
  IoIosPin,
  IoMdClose,
  IoMdMenu,
} from "react-icons/io";
import "./Header.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);
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
                  info@tebamagroup.co.za
                </a>
              </span>
            </li>
            <li>
              <IoIosPin />
              <span>8022 Tshepiso North, Sharpville Vanderbijlpark</span>
            </li>
            <li>
              <IoIosCall />
              <span>+27 78 453 1947</span>
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
          {toggle && (
            <div onClick={() => setToggle(!toggle)} className="nav-bg"></div>
          )}
          <button onClick={() => setToggle(!toggle)}>
            {!toggle ? <IoMdMenu /> : <IoMdClose />}
          </button>
          <div
            style={{
              display: !toggle ? "none" : "flex",
            }}
            className="navigation"
          >
            <ul className="main-menu">
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#home" onClick={() => setToggle(!toggle)}>
                  Home
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#about" onClick={() => setToggle(!toggle)}>
                  About
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#services" onClick={() => setToggle(!toggle)}>
                  Services
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#team" onClick={() => setToggle(!toggle)}>
                  Our Team
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#partners" onClick={() => setToggle(!toggle)}>
                  Partners
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#contact" onClick={() => setToggle(!toggle)}>
                  Contact
                </a>
              </li>
              <li>
                <span className="arrow">
                  <span></span>
                </span>
                <a href="#home" onClick={() => setToggle(!toggle)}>
                  Call Now
                </a>
              </li>
            </ul>
          </div>
          <button>Request for quote</button>
        </nav>
      </div>
    </header>
  );
}
