import React, { Component } from "react";
import undo from "./images/undo.png";

class ProjectList extends Component {
  state = {};
  render() {
    const { projectViewToggle } = this.props;
    return (
      <div className="project-list">
        <img onClick={projectViewToggle} src={undo} alt="Home Page" />
      </div>
    );
  }
}

export default ProjectList;
