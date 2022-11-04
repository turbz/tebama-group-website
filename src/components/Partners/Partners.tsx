import React from "react";
import "./Partners.css";

export default function Partners() {
  const tebama_partners = [
    {
      title: "Company Name",
      subtitle: "AT A GLANCE",
      src_link: "../../images/logos/whatpartnersiconblack1.png",
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
    {
      title: "Company Name",
      subtitle: "SPEED FOR YOU DELIVERY",
      src_link: "../../images/logos/whatpartnersiconblack2.png",
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
    {
      title: "SEA DELIVERY",
      subtitle: "CLEVERLY COMBINED",
      src_link: "../../images/logos/whatpartnersiconblack5.png",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
    {
      title: "SEA DELIVERY",
      subtitle: "CLEVERLY COMBINED",
      src_link: "../../images/logos/whatpartnersiconblack4.png",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
  ];
  return (
    <section className="Tebama-Partners">
      <h2>
        Our
        <span> Partners</span>
      </h2>
      <ul className="partners-cardlist">
        {tebama_partners.map((d, i) => (
          <li key={i}>
            <img src={d.src_link} alt="Company Name" />
          </li>
        ))}
      </ul>
    </section>
  );
}
