import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class RightPanel extends Component {
  render() {
    return (
      <div className="right-panel">
        <Fade>
          <div className="greeting">Hello There</div>
        </Fade>
      </div>
    );
  }
}

export default RightPanel;
