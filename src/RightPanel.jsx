import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class RightPanel extends Component {
  render() {
    return (
      <div className="right-panel">
        <div className="corner-icons">
          <a
            className="contact-icon linked-in"
            href="https://www.linkedin.com/in/colin-tatro/"
          ></a>
          <a
            className="contact-icon git-hub"
            href="https://github.com/cstatro"
          ></a>
          <a className="contact-icon email" href="mailto:cstatro@gmail.com"></a>
        </div>
        <Fade>
          <div className="greeting">Hello There</div>
        </Fade>
      </div>
    );
  }
}

export default RightPanel;
