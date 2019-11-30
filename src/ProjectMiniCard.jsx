import React from "react";

const ProjectMiniCard = props => {
  const {
    currentProject,
    projectIndex,
    projectName,
    setCurrentProject,
    primaryImage
  } = props;

  const displayClass =
    currentProject === projectIndex ? "selected-project" : "mini-project";

  return (
    <div
      onClick={() => setCurrentProject(projectIndex)}
      className={displayClass}
    >
      <img src={primaryImage} alt="" />
      {projectName}
    </div>
  );
};

export default ProjectMiniCard;
