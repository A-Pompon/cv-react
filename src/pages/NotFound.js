import React from "react";
import "../../src/styles/notFound.css";

import ScrollToTop from "../helpers/ScrollToTop";

const NotFound = () => {
  return (
    <>
      <ScrollToTop />
      <section className="not-found">
        <h5>ERROR</h5>
        <h2>Page introuvable nous sommes désolés</h2>
      </section>
    </>
  );
};

export default NotFound;
