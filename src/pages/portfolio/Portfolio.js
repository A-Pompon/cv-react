import React from "react";
import "../../../src/styles/portfolio.css";

import ProjectList from "./ProjectList";

import ScrollToTop from "../../helpers/ScrollToTop";

const Portfolio = () => {
  return (
    <>
      <ScrollToTop />
      <section>
        <h5>Mes projets</h5>
        <h2>Portfolio</h2>
        <ProjectList />
      </section>
    </>
  );
};

export default Portfolio;
