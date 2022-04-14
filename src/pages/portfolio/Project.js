import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Project = ({ item }) => {
  let { languageIcons, image, title, git, info, language } = item;
  const [showInfo, setShowinfo] = useState(false);

  const handleInfo = () => {
    setShowinfo(!showInfo);
  };

  return (
    <>
      <article className="portfolio__item">
        <div className="portfolio__icon">
          {languageIcons.map((icon, index) => (
            <FontAwesomeIcon className="icons" icon={icon} key={index} />
          ))}
        </div>
        <div className="portfolio__item-image">
          <img src={image} alt={title} onClick={handleInfo} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio__item-btn">
          <a href={git} className="lien" target="_blank" rel="noreferrer">
            Lien git
          </a>
          <FontAwesomeIcon
            className="icons__plus"
            icon={faCirclePlus}
            onClick={() => {
              handleInfo();
            }}
          />
        </div>
      </article>

      {showInfo && (
        <div className="showInfo" onClick={handleInfo}>
          <div className="infosContent">
            <div className="headInfo">
              <h2 className="portfolio__item-title">{title}</h2>
            </div>
            <p className="textInfo">
              {language}
              <br />
              <br />
              {info}
            </p>

            <div>
              <FontAwesomeIcon
                className="icons__moins"
                icon={faCircleXmark}
                onClick={handleInfo}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
