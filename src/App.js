import "./App.css";
import React, { Component } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import config from "react-reveal/globals";
import ProjectList from "./ProjectList";

config({ ssrFadeout: true });

class App extends Component {
  state = { projectView: false, currentProject: 1 };

  projectViewToggle = () => {
    this.setState({ projectView: !this.state.projectView });
  };
  render() {
    const { projectView } = this.state;
    return (
      <div className="App">
        {projectView ? (
          <ProjectList projectViewToggle={this.projectViewToggle} />
        ) : (
          <LeftPanel projectViewToggle={this.projectViewToggle} />
        )}
        ;
        <RightPanel />
      </div>
    );
  }
}

export default App;
