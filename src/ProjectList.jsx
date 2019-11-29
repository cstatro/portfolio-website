import React, { Component } from "react";
import undo from "./images/undo.png";
import { projectsData } from "./ProjectsData";
import ProjectMiniCard from "./ProjectMiniCard";

class ProjectList extends Component {
  state = {};

  render() {
    const { projectViewToggle, currentProject, setCurrentProject } = this.props;

    const projects = projectsData.map((p, i) => (
      <ProjectMiniCard
        projectIndex={i}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        {...p}
      />
    ));

    return (
      <div className="project-list">
        <img
          className="back-button"
          onClick={projectViewToggle}
          src={undo}
          alt="Home Page"
        />
        <div className="image-list-area">{projects}</div>
      </div>
    );
  }
}

export default ProjectList;
