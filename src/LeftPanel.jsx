import React, { Component } from "react";
import portrait from "./images/portrait.png";
import jsicon from "./images/jsicon.jpg";
import rubyonrails from "./images/rubyonrails.png";
import reacticon from "./images/reacticon.png";
import rubyicon from "./images/rubyicon.png";
import logoredux from "./images/logoredux.png";
import postgres from "./images/postgres.png";

class LeftPanel extends Component {
  state = {};
  render() {
    return (
      <div className="left-panel">
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
