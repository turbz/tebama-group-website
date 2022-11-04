import React from "react";
import { FaTractor, FaTrain, FaTram } from "react-icons/fa";
import "./Services.css";

export default function Services() {
  const tebama_service_links = [
    {
      title: "GROUND SHIPPING",
      subtitle: "AT A GLANCE",
      src_link: <FaTrain />,
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
    {
      title: "AIR DELIVERY",
      subtitle: "SPEED FOR YOU DELIVERY",
      src_link: <FaTram />,
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
    {
      title: "SEA DELIVERY",
      subtitle: "CLEVERLY COMBINED",
      src_link: <FaTractor />,
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
  ];
  return (
    <section className="Tebama-Services">
      <h2>
        Our
        <span> Services </span>
      </h2>
      <div className="service-cardlist">
        {[...tebama_service_links, ...tebama_service_links].map((d, i) => (
          <div className="card" key={i}>
            <div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
            {d.src_link}
          </div>
        ))}
      </div>
      <ul className="service-toggle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
