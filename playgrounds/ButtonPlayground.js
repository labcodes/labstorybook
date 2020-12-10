import React from "react";

import { Button, OutlineButton, TextButton } from "../labsystem/src/Button";

export default class ButtonPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableComponents: {
        Button,
        OutlineButton,
        TextButton,
      },
      currentComponent: "Button",
    };
  }

  handleCurrentComponentChange = (e) => {
    const { value } = e.target;
    this.setState({
      currentComponent: value,
    });
  };

  renderCurrentComponent = () => {
    const { availableComponents, currentComponent } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <Component text="button" />
      </React.Fragment>
    );
  };

  render() {
    const { availableComponents } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <span className="lab-playground__item">
            <label htmlFor="currentComponent">
              <strong>variation: </strong>
              <select onChange={this.handleCurrentComponentChange}>
                {Object.keys(availableComponents).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <br />

        </div>
      </div>
    );
  }
}
