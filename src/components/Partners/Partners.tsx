import React from "react";
import "./Partners.css";

export default function Partners() {
  const tebama_partners = [
    {
      title: "Sasol",
      subtitle: "AT A GLANCE",
      src_link:
        "https://tenants.taevo.co.za/tebama/wp-content/uploads/sites/4/2022/11/sasol-new-logo_0.png",
      description:
        "We provides a wide range of transportation services including quality international road transportation of cargoes & goods arriving from the ports all over the world.",
      url_link: "",
    },
    {
      title: "Samancor",
      subtitle: "SPEED FOR YOU DELIVERY",
      src_link:
        "https://tenants.taevo.co.za/tebama/wp-content/uploads/sites/4/2022/11/logo.jpg",
      description:
        "We can arrange and provides with the comprehensive service in the sphere of urgent, valuable, fragile or any cargoes conscientious accelerated delivery by air.",
      url_link: "",
    },
    {
      title: "Ceramic",
      subtitle: "CLEVERLY COMBINED",
      src_link:
        "https://tenants.taevo.co.za/tebama/wp-content/uploads/sites/4/2022/11/logo__full-colour.png",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
    {
      title: "Arcellor Mittal",
      subtitle: "CLEVERLY COMBINED",
      src_link:
        "https://tenants.taevo.co.za/tebama/wp-content/uploads/sites/4/2022/11/arcelormittal-logo.gif",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
    {
      title: "Cape Gate",
      subtitle: "CLEVERLY COMBINED",
      src_link:
        "https://tenants.taevo.co.za/tebama/wp-content/uploads/sites/4/2022/11/id-localhost-custaccount-4c6c2f2f9d9391.jpeg",
      description:
        "We provides with the main types of basic conditions International sea transportation is implemented by our partners’ vessels, the largest ocean carriers.",
      url_link: "",
    },
  ];
  return (
    <section id="partners" className="Tebama-Partners">
      <h2>
        Our
        <span> Partners</span>
      </h2>
      <ul className="partners-cardlist">
        {tebama_partners.map((d, i) => (
          <li key={i}>
            <img src={d.src_link} alt={d.title} />
          </li>
        ))}
      </ul>
    </section>
  );
}
