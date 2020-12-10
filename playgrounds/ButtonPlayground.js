import React from "react";
import { isEmpty } from "lodash";

import Radio from "../labsystem/src/Radio";
import TextInput from "../labsystem/src/Input/TextInput";
import { Button, OutlineButton, TextButton } from "../labsystem/src/Button";
import { iconOptions } from "./assets";

export default class ButtonPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedText: "edit me",
      selectedIcon: "",
    };

    this.state = {
      availableComponents: {
        Button,
        OutlineButton,
        TextButton,
      },
      currentComponent: "Button",
      ...this.initialState,
    };
  }

  handleCurrentComponentChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
      ...this.initialState,
    });
  };

  handleTextPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  handleRadioPropChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
      ...this.initialState,
    });
  };

  handleIconPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedIcon,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <Component text={selectedText} icon={selectedIcon} />
      </React.Fragment>
    );
  };

  render() {
    const { selectedText, selectedIcon } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <span className="lab-playground__item">
            <strong>variation: </strong>
            <br />
            <fieldset>
              <Radio
                id="radio-1"
                label="Button"
                name="ButtonVariationRadio"
                value="Button"
                onChange={this.handleRadioPropChange}
              />
              <br />
              <Radio
                id="radio-2"
                label="OutlineButton"
                name="ButtonVariationRadio"
                value="OutlineButton"
                onChange={this.handleRadioPropChange}
              />
              <br />
              <Radio
                id="radio-3"
                label="TextButton"
                name="ButtonVariationRadio"
                value="TextButton"
                onChange={this.handleRadioPropChange}
              />
            </fieldset>
          </span>
          <br />

          <span className="lab-playground__item">
            <TextInput
              id="selectedText"
              onChange={this.handleTextPropChange}
              value={selectedText}
              label="text"
            />
          </span>
          <br />

          <span className="lab-playground__item">
            <strong>icon: </strong>
            <select
              id="selectedIcon"
              value={selectedIcon}
              onChange={this.handleIconPropChange}
            >
              {iconOptions.map((item) => (
                <option value={item} key={`icon-${item}`}>
                  {!isEmpty(item) ? item : "none"}
                </option>
              ))}
            </select>
          </span>
        </div>
      </div>
    );
  }
}
