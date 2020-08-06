import React from "react";

import Input from "./Input/AbstractTextInput";

export default class InputBehaviorTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: "",
    };
  }

  handleOnChange = (newValue) => {
    this.setState({ testValue: newValue });
  };

  render() {
    return (
      <>
        <Input
          value={this.state.testValue}
          id="testInput"
          label="Test here"
          onChange={this.handleOnChange}
        />
        <p>
          <strong>Input value: </strong>
          {this.state.testValue}
        </p>
      </>
    );
  }
}
