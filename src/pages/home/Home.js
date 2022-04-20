import React from "react";
import "../../styles/homeStyles.css";
import "../../styles/homeSocialsStyles.css";
import HomeButtons from "./home-feat/HomeButtons";
import ME from "../../../src/./assets/me-2.png";
import SocialsLarge from "../../components/SocialsLarge";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { contact } from "../../redux/changeActive";

import ScrollToTop from "../../helpers/ScrollToTop";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <>
      <ScrollToTop />
      <div className="home">
        <div className="container home__container">
          <h5>Je me présente</h5>
          <h1>Arnaud POMPONIO</h1>
          <h5 className="text-light">Développeur Fullstack Junior</h5>

          <SocialsLarge />
          <div className="content">
            <HomeButtons />

            <div className="me">
              <img
                src={ME}
                alt="Me"
                title="Recherche poste Développeur Web"
                className="me-image"
              />
            </div>
          </div>

          <Link
            to="/contact"
            className="scroll__down"
            onClick={() => {
              dispatch(contact());
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
