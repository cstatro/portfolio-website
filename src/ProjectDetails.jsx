import React from "react";
import { projectsData } from "./ProjectsData";

const ProjectDetails = props => {
  const { currentProject } = props;
  const data = projectsData[currentProject];
  return <div>{data.projectName}</div>;
};

export default ProjectDetails;
