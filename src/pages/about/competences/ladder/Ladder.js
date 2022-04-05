import React from "react";
import "./ladder.css";
import LadderBasic from "../ladder/LadderBasic";
import LadderOne from "../ladder/LadderOne";
import LadderTwo from "../ladder/LadeerTwo";
import LadderThree from "../ladder/LadderThree";

const Ladder = ({ ladder }) => {
  switch (ladder) {
    case "one":
      return <LadderOne />;

    case "two":
      return <LadderTwo />;

    case "three":
      return <LadderThree />;

    case "basic":
      return <LadderBasic />;

    default:
      return "ERROR";
  }
};

export default Ladder;
