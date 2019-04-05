import React, { Component } from "react";
import NoizeLevelWidget from "./components/NoizeLevelWidget";
import "./App.scss";

const mockData = 0;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NoizeLevelWidget noiseLevel={mockData} />
      </div>
    );
  }
}

export default App;
