import React from "react";
import { SiGitlab, SiLinkedin, SiGithub } from "react-icons/si";

const SocialsLarge = () => {
  return (
    <div className="home__socials">
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
  );
};

export default SocialsLarge;
