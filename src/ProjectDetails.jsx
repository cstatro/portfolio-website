import React from "react";
import { projectsData } from "./ProjectsData";

const ProjectDetails = props => {
  const { currentProject } = props;

  const data = projectsData[currentProject];

  const techStackList = data.techStack.map(t => (
    <div className="tech-box">{t}</div>
  ));

  return (
    <div className="project-detail">
      <div className="project-title">{data.projectName}</div>
      <div className="tech-list">{techStackList}</div>
      <div>{data.projectDescription}</div>
      <div className="demo-vid"></div>
    </div>
  );
};

export default ProjectDetails;
