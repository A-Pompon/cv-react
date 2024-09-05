import React from "react";
import CV from "../../../assets/a-pomponio-cv.pdf";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { contact } from "../../../redux/changeActive";

const HomeButtons = () => {
  const dispatch = useDispatch();

  return (
    <div className="buttons">
      <a href={CV} download className="btn">
        Download CV
      </a>
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
  );
};

export default HomeButtons;
