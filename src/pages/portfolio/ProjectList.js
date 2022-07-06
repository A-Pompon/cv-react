import React, { useState } from "react";
import dataPortfolio from "../../data/dataPortfolio";

import Project from "../portfolio/Project";

const ProjectList = () => {
  const [projects, setProjects] = useState(dataPortfolio);
  return (
    <div>
      <div className="container portfolio__container">
        {projects
          .sort((a, b) => {
            return b.id - a.id;
          })
          .map((item) => {
            return <Project key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ProjectList;
