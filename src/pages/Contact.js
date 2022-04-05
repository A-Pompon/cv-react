import React from "react";
import "../../src/styles/contact.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineEmail } from "react-icons/md";
import { SiGitlab, SiLinkedin, SiGithub } from "react-icons/si";

import ScrollToTop from "../helpers/ScrollToTop";

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <section>
        <h5>Je reste à votre disposition</h5>
        <h2>Contactez moi</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <CopyToClipboard text="apompom15@gmail.com">
                <h5 className="contact__email">apompom15@gmail.com</h5>
              </CopyToClipboard>
              <a href="mailto:apompom15@gmail.com">Envoyer un message</a>
            </article>
            <article className="contact__option">
              <SiLinkedin className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <h5>Arnaud Pomponio</h5>
              <a
                href="https://www.linkedin.com/in/pomponio-arnaud"
                target="_blank"
                rel="noreferrer"
              >
                Visiter mon profil
              </a>
            </article>
            <article className="contact__option">
              <SiGitlab className="contact__option-icon" />
              <h4>GitLab</h4>
              <h5>Mes projets</h5>
              <a
                href="https://gitlab.com/PomponArnaud"
                target="_blank"
                rel="noreferrer"
              >
                Visiter mon GitLab
              </a>
            </article>
            <article className="contact__option">
              <SiGithub className="contact__option-icon" />
              <h4>GitHub</h4>
              <h5>Mes projets</h5>
              <a
                href="https://github.com/A-Pompon"
                target="_blank"
                rel="noreferrer"
              >
                Visiter mon GitHub
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
