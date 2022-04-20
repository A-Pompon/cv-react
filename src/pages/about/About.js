import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../../styles/about.css";
import ME from "../../assets/me.jpg";
import { MdLanguage } from "react-icons/md";
import { MdOutlineSportsBar } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

import ScrollToTop from "../../helpers/ScrollToTop";

import { useDispatch } from "react-redux";
import { contact } from "../../redux/changeActive";

const About = () => {
  const [activeNav, setActiveNav] = useState("#");
  const dispatch = useDispatch();

  return (
    <>
      <ScrollToTop />
      <section>
        <h5>Un peu plus</h5>
        <h2>A propos de moi</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src={ME}
                alt="About me"
                title="Recherche poste Développeur Web"
              />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <MdLanguage className="about__icon" />
                <h5>Langues</h5>
                <small>Anglais - niveau B2</small>
                <small>Espagnol - niveau B1</small>
                <small>Italien - notions</small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Compétences</h5>
                <small>Photoshop</small>
                <small>Digital Graphisme</small>
                <small>Music Software </small>
              </article>

              <article className="about__card">
                <MdOutlineSportsBar className="about__icon" />
                <h5>Loisirs</h5>
                <small>Sports</small>
                <small>Musique</small>
                <small>Missions de bénévolat</small>
              </article>
            </div>

            <p>
              Je me présente, je m'appelle Arnaud POMPONIO, j'habite Paris.
              <br />
              <br />
              Après avoir obtenu un bac S, j'ai effectué une double licence en
              STAPS. J'ai exercé durant 5 ans dans le domaine de l'animation et
              de l'éducation nationale en tant que animateur et professeur
              d'EPS.
              <br />
              <br />
              Initié lors de mon parcours universitaire au fonctionnement
              interne ainsi qu'à la méthodologie de création d'un site web, j'ai
              décidé de me lancer dans l'apprentissage du développement web en
              autodidacte.
              <br />
              <br />
              Pour valider mes acquis j'ai effectué une formation et obtenu mon
              titre de Développeur web & web mobile afin de devenir développeur
              Web.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
              onClick={() => {
                dispatch(contact());
              }}
            >
              Contactez moi
            </Link>
          </div>
        </div>

        <nav className="about__nav">
          <Link
            to="/about/competences"
            onClick={() => setActiveNav("competences")}
            className={activeNav === "competences" ? "active" : ""}
          >
            Compétences
          </Link>
          <Link
            to="/about/diplomes"
            onClick={() => setActiveNav("diplomes")}
            className={activeNav === "diplomes" ? "active" : ""}
          >
            Diplômes
          </Link>
        </nav>
        <Outlet />
      </section>
    </>
  );
};

export default About;
