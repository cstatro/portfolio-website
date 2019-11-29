import React from "react";
import { projectsData } from "./ProjectsData";

const ProjectDetails = props => {
  const { currentProject } = props;
  const data = projectsData[currentProject];
  return (
    <div className="project-detail">
      <div className="project-title">{data.projectName}</div>
      <div>{data.projectDescription}</div>
    </div>
  );
};

export default ProjectDetails;
