import React from "react";

const ProjectMiniCard = props => {
  const { currentProject, projectIndex } = props;
  const displayClass =
    currentProject === projectIndex ? "selected-project" : "mini-project";
  return <div className={displayClass}></div>;
};

export default ProjectMiniCard;
