import * as React from "react";
import Layout from "../components/layout";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";
import Contact from "../components/Contact/Contact";
import Partners from "../components/Partners/Partners";

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <main className="index">
        <About />
        <Services />
        <Team />
        <Contact />
        <Partners />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
