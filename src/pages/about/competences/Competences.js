import React, { useState } from "react";
import "../../../styles/competences.css";
import {
  dataCompetencesFront,
  dataCompetencesBack,
} from "../../../data/dataCompetences.js";
import { BsPatchCheckFill } from "react-icons/bs";
import Ladder from "../competences/ladder/Ladder";

const Competences = () => {
  const [competencesFront, setCompetencesFront] =
    useState(dataCompetencesFront);
  const [competencesBack, setCompetencesBack] = useState(dataCompetencesBack);

  return (
    <section>
      <h5>Aperçu des</h5>
      <h2>Compétences</h2>

      <div className="container competences__container">
        <div className="competences__frontend">
          <h3>Frontend développement</h3>
          <div className="competences__content">
            {competencesFront.map(({ langage, ladder }, index) => {
              return (
                <article key={index} className="competences__details">
                  <BsPatchCheckFill className="competences__details-icon" />
                  <div>
                    <h4>{langage}</h4>
                    <small className="text-light">
                      <Ladder ladder={ladder} />
                    </small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* END FRONT END COMPETENCES */}

        <div className="competences__backend">
          <h3>Backend développement</h3>
          <div className="competences__content">
            {competencesBack.map(({ langage, ladder }, index) => {
              return (
                <article key={index} className="competences__details">
                  <BsPatchCheckFill className="competences__details-icon" />
                  <div>
                    <h4>{langage}</h4>
                    <small className="text-light">
                      <Ladder ladder={ladder} />
                    </small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* END BACK END COMPETENCES */}
      </div>
    </section>
  );
};

export default Competences;
