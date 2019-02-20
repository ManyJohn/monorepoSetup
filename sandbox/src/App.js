import React, { Component } from "react";
import "./App.css";
import { App as TestApp } from "@project/otherapp";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TestApp />
      </div>
    );
  }
}

export default App;
