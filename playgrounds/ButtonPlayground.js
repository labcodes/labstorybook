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
    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <br />
        </div>
      </div>
    );
  }
}
