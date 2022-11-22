import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./Banner.css";
import { FaTrailer, FaTruckLoading, FaTruckMoving } from "react-icons/fa";

export default function Banner() {
  const tebama_service_links = [
    {
      title: "GROUND SHIPPING",
      subtitle: "AT A GLANCE",
      src_link: <FaTruckMoving />,
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the South Africa.",
      url_link: "",
    },
    {
      title: "LOADING",
      subtitle: "SPEED FOR YOU DELIVERY",
      src_link: <FaTruckLoading />,
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, or fragile delivery by helping you with loading.",
      url_link: "",
    },
    {
      title: "TRAILERS",
      subtitle: "CLEVERLY COMBINED",
      src_link: <FaTrailer />,
      description:
        "We provide wide variety of trailer rental solutions at affordable prices across Southern Africa. Including maintenance and repair, as well as other value-added services.",
      url_link: "",
    },
  ];
  return (
    <section id="home" className="Tebama-Banner">
      <div className="banner">
        <figure className="cover">
          <StaticImage
            className="bg-image"
            src="../../images/truck-picture.jpg"
            alt="cover"
          />
        </figure>
        <div className="bg"></div>
        <div className="cta">
          <h2>
            <span>WE </span>
            ARE HERE TO
            <span> MOVE</span>
          </h2>
          <h3>AN INVITATION OF NEW LOGISTIC POSSIBILITIES </h3>
          <p>
            TGC is 100 percent black owned group of companies. The 2 directors
            are well experienced & skilled in logistics with their combined
            experience of over 20 years. The directors are passionate,
            ambitious, and highly motivated individual with long term view for
            the group.
          </p>
          <ul>
            <li>
              <a href="#home">MAKE A BOOKING</a>
            </li>
            <li>
              <a href="#home">DISCOVER MORE</a>
            </li>
          </ul>
        </div>
        <ul className="pagi-tog">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="cards">
        {tebama_service_links.map((d, i) => (
          <div className="card" key={i}>
            {d.src_link}
            <h4>{d.subtitle}</h4>
            <h3>{d.title}</h3>
            <p>{d.description}</p>
            <a href="#home">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}
