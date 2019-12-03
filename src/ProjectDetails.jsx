import React from "react";
import { projectsData } from "./ProjectsData";

const ProjectDetails = props => {
  const { currentProject } = props;

  const data = projectsData[currentProject];

  const techStackList = data.techStack.map(t => (
    <div className="tech-box">{t}</div>
  ));

  const screenShots = data.screenCaps.map((d, i) => {
    const classChoice = i % 2 === 0 ? "even-pic" : "odd-pic";
    return <img className={classChoice} src={d}></img>;
  });

  return (
    <div className="project-detail">
      <div className="project-title">{data.projectName}</div>
      <div className="tech-list">{techStackList}</div>
      <div>{data.projectDescription}</div>
      <div className="project-pics">{screenShots}</div>
    </div>
  );
};

export default ProjectDetails;
