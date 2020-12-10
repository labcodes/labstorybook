import React from "react";
import { isEmpty } from "lodash";

import Radio from "../labsystem/src/Radio";
import TextInput from "../labsystem/src/Input/TextInput";
import { Button, OutlineButton, TextButton } from "../labsystem/src/Button";
import { iconOptions, buttonSkinOptions } from "./assets";

export default class ButtonPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedText: "edit me",
      selectedIcon: "",
      selectedSkin: "pale",
      selectedSize: "normal",
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

  handleButtonVariationPropChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
      ...this.initialState,
    });
  };

  handleButtonSizePropChange = (event) => {
    const { value } = event.target;
    this.setState({
      selectedSize: value,
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
      selectedSkin,
      selectedSize,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <Component
          text={selectedText}
          icon={selectedIcon}
          skin={selectedSkin}
          size={selectedSize}
        />
      </React.Fragment>
    );
  };

  render() {
    const { selectedText, selectedIcon, selectedSkin } = this.state;

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
                id="ButtonVariationRadio-1"
                label="Button"
                name="ButtonVariationRadio"
                value="Button"
                onChange={this.handleButtonVariationPropChange}
              />
              <br />
              <Radio
                id="ButtonVariationRadio-2"
                label="OutlineButton"
                name="ButtonVariationRadio"
                value="OutlineButton"
                onChange={this.handleButtonVariationPropChange}
              />
              <br />
              <Radio
                id="ButtonVariationRadio-3"
                label="TextButton"
                name="ButtonVariationRadio"
                value="TextButton"
                onChange={this.handleButtonVariationPropChange}
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
            <label htmlFor="selectedIcon">
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
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedSkin">
              <strong>skin: </strong>
              <select
                id="selectedSkin"
                value={selectedSkin}
                onChange={this.handleTextPropChange}
              >
                {buttonSkinOptions.map((item) => (
                  <option value={item} key={`skin-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <br />

          <span>
            <strong>size: </strong>
            <br />
            <fieldset>
              <Radio
                id="ButtonSizeRadio-1"
                label="small"
                name="ButtonSizeRadio"
                value="small"
                onChange={this.handleButtonSizePropChange}
              />
              <br />
              <Radio
                id="ButtonSizeRadio-2"
                label="normal"
                name="ButtonSizeRadio"
                value="normal"
                onChange={this.handleButtonSizePropChange}
              />
              <br />
              <Radio
                id="ButtonSizeRadio-3"
                label="large"
                name="ButtonSizeRadio"
                value="large"
                onChange={this.handleButtonSizePropChange}
              />
              <br />
            </fieldset>
          </span>
        </div>
      </div>
    );
  }
}
