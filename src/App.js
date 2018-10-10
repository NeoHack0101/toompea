import React, { Component } from "react";
import "./App.css";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Wrap from "./components/Wrap";
import Expand from "./components/Expand";

class App extends Component {
  constructor() {
    super();
    this.state = {
      collapse: true
    };
  }

  onButtonClick = () => {
    if (this.state.collapse === true) {
      this.setState({ collapse: false });
    } else if (this.state.collapse === false) {
      this.setState({ collapse: true });
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <Expand>
            <Form1 />
          </Expand>
        </div>
        <div>
          <Expand>
            <Form2 />
          </Expand>
        </div>
        <div className="">
          <Form3 />
        </div>
      </div>
    );
  }
}

export default App;
