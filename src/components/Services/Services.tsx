import React from "react";
import { FaTrailer, FaTruckLoading, FaTruckMoving } from "react-icons/fa";
import "./Services.css";

export default function Services() {
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
    <section className="Tebama-Services">
      <h2>
        Our
        <span> Services </span>
      </h2>
      <div className="service-cardlist">
        {tebama_service_links.map((d, i) => (
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
