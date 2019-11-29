import React, { Component } from "react";
import undo from "./images/undo.png";
import { projectsData } from "./ProjectsData";

class ProjectList extends Component {
  state = {};
  render() {
    const { projectViewToggle } = this.props;
    return (
      <div className="project-list">
        <img
          className="back-button"
          onClick={projectViewToggle}
          src={undo}
          alt="Home Page"
        />
        <div className="image-list-area"></div>
      </div>
    );
  }
}

export default ProjectList;
