import React from "react";
import "./App.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
