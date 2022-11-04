import React from "react";
import { FaTrain, FaTram } from "react-icons/fa";
import "./Team.css";

export default function Team() {
  const tebama_team_list = [
    {
      title: "Kerwin Mamatela",
      subtitle: "CEO",
      src_link: <FaTrain />,
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
    {
      title: "Japie Tebakang",
      subtitle: "COO",
      src_link: <FaTram />,
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
    {
      title: "Kerwin Mamatela",
      subtitle: "CEO",
      src_link: <FaTrain />,
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
    {
      title: "Japie Tebakang",
      subtitle: "CEO",
      src_link: <FaTram />,
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
  ];
  return (
    <section className="Tebama-Team">
      <div className="wrapper">
        <div className="contact-info">
          <h2>
            Our
            <span> Team</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac
            lacinia lacus fermentum est. Etiam eget egestas nulla, eu finibus
            urna. Nulla nunc felis,{" "}
          </p>
          <div>
            <h4>For Multiple Queries: </h4>
            <ul>
              <li>P: +27-012-056-0000, +27-070-000-6700</li>
              <li>E: logistics@tebama.co.za</li>
            </ul>
            <input type="text" placeholder="Enter email address" />
            <button>
              <a href="tel:070000000">Call Now</a>
            </button>
          </div>
        </div>
        <div className="team-cardlist">
          {[...tebama_team_list].map((d, i) => (
            <div className="card" key={i}>
              <figure></figure>
              <h4>{d.title}</h4>
              <h5>{d.subtitle}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
