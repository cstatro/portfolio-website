import React, { Component, createRef } from "react";
import portrait from "./images/portrait.png";
import jsicon from "./images/jsicon.jpg";
import rubyonrails from "./images/rubyonrails.png";
import reacticon from "./images/reacticon.png";
import rubyicon from "./images/rubyicon.png";
import logoredux from "./images/logoredux.png";
import postgres from "./images/postgres.png";
import portfolio from "./images/portfolio.png";
import resume from "./images/resume.png";

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }

  render() {
    return (
      <div className="left-panel">
        <div className="nav-box">
          <img className="nav-image" src={portfolio} />
          <img
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1bFXxwO5ffdvJ1M6Zdi9_J6ToFENPVj2V/view?usp=sharing"
              )
            }
            src={resume}
            className="nav-image resume"
          />
          <div className="bottom-text resume-text">Resume</div>
          <div className="bottom-text projects-text">Projects</div>
        </div>
        <img className="portrait" src={portrait} alt="self portrait" />
        <div className="stack-box">
          <img className="tech-icon" src={jsicon} alt="javascript icon" />
          <img className="tech-icon" src={rubyonrails} alt="javascript icon" />
          <img className="tech-icon" src={reacticon} alt="javascript icon" />
          <img className="tech-icon" src={rubyicon} alt="javascript icon" />
          <img className="tech-icon" src={logoredux} alt="javascript icon" />
          <img className="tech-icon" src={postgres} alt="javascript icon" />
        </div>
      </div>
    );
  }
}

export default LeftPanel;
