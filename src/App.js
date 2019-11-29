import React, { Component } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import config from "react-reveal/globals";
import ProjectList from "./ProjectList";

config({ ssrFadeout: true });

class App extends Component {
  state = { projectView: false, currentProject: 0 };

  projectViewToggle = () => {
    this.setState({ projectView: !this.state.projectView });
  };
  setCurrentProject = currentProject => {
    this.setState({ currentProject });
  };
  render() {
    const { projectView } = this.state;
    return (
      <div className="App">
        {projectView ? (
          <ProjectList
            {...this.state}
            setCurrentProject={this.setCurrentProject}
            projectViewToggle={this.projectViewToggle}
          />
        ) : (
          <LeftPanel projectViewToggle={this.projectViewToggle} />
        )}
        <RightPanel {...this.state} />
      </div>
    );
  }
}

export default App;
