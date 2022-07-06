import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/experiences.css";

import ScrollToTop from "../../helpers/ScrollToTop";

const Experiences = () => {
  const [activeNav, setActiveNav] = useState("developpement");

  return (
    <>
      <ScrollToTop />
      <section>
        <h5>Mes expériences</h5>
        <h2>Professionnelles</h2>

        <nav className="exp__nav">
          <Link
            to="/experiences/developpement"
            onClick={() => setActiveNav("developpement")}
            className={activeNav === "developpement" ? "active" : ""}
          >
            Développement
          </Link>
          <Link
            to="/experiences/professionnelles"
            onClick={() => setActiveNav("experiences")}
            className={activeNav === "experiences" ? "active" : ""}
          >
            Globales
          </Link>
        </nav>
        <Outlet />
      </section>
    </>
  );
};

export default Experiences;
