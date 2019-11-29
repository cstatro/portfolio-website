import React from "react";

const ProjectMiniCard = props => {
  const {
    currentProject,
    projectIndex,
    projectName,
    setCurrentProject
  } = props;

  const displayClass =
    currentProject === projectIndex ? "selected-project" : "mini-project";

  return (
    <div
      onClick={() => setCurrentProject(projectIndex)}
      className={displayClass}
    >
      {projectName}
    </div>
  );
};

export default ProjectMiniCard;
