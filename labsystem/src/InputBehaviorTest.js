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
    const { testValue } = this.state;
    return (
      <>
        <Input
          value={testValue}
          id="testInput"
          label="Test here"
          onChange={this.handleOnChange}
        />
        <p>
          <strong>Input value: </strong>
          {testValue}
        </p>
      </>
    );
  }
}
