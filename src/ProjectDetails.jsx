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
      <div className="project-description">{data.projectDescription}</div>
      <div className="demo-vid-box">
        <iframe
          className="demo-vid"
          src={data.videoDemo}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectDetails;
