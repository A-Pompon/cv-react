import React from "react";
import "../styles/footer.css";
import { SiGitlab, SiLinkedin, SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  home,
  about,
  experiences,
  portfolio,
  contact,
} from "../redux/changeActive";

const Footer = () => {
  // const change = useSelector((state) => state.change.value);
  const dispatch = useDispatch();

  return (
    <footer>
      <div className="footer__logo-container">
        <Link
          className="footer__logo"
          to="/cv-react"
          onClick={() => {
            dispatch(home());
          }}
        >
          Arnaud POMPONIO
        </Link>
      </div>

      <ul className="permalinks">
        <li>
          <Link
            to="/cv-react"
            onClick={() => {
              dispatch(home());
            }}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => {
              dispatch(about());
            }}
          >
            A propos
          </Link>
        </li>
        <li>
          <Link
            to="/experiences"
            onClick={() => {
              dispatch(experiences());
            }}
          >
            Experiences
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            onClick={() => {
              dispatch(portfolio());
            }}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => {
              dispatch(contact());
            }}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/pomponio-arnaud"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://gitlab.com/PomponArnaud"
          target="_blank"
          rel="noreferrer"
        >
          <SiGitlab />
        </a>
        <a href="https://github.com/A-Pompon" target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arnaud POMPONIO. Site réalisé en React.</small>
      </div>
    </footer>
  );
};

export default Footer;
