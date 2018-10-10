import React, { Component } from "react";
import { Button, Collapse } from "mdbreact";
import Form1 from "./Form1";
import Wrap from "./Wrap";

class ExpandBtn extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <div>
          <Button
            className=""
            onClick={this.toggle}
            style={{ marginBottom: "1rem" }}
          >
            Toggle
          </Button>
          <Collapse isOpen={this.state.collapse}>
            <Wrap>{this.props.children}</Wrap>
          </Collapse>
        </div>
      </div>
    );
  }
}
export default ExpandBtn;
