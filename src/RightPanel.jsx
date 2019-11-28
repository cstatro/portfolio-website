import React, { Component } from "react";
import CornerIcons from "./CornerIcons";
import GreetingText from "./GreetingText";
import ProjectDetails from "./ProjectDetails";

class RightPanel extends Component {
  render() {
    const { projectView, currentProject } = this.props;
    return (
      <div className="right-panel">
        <CornerIcons />
        {projectView ? (
          <ProjectDetails currentProject={currentProject} />
        ) : (
          <GreetingText />
        )}
      </div>
    );
  }
}

export default RightPanel;
