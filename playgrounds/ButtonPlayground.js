import React from "react";
import { isEmpty } from "lodash";

import Radio from "../labsystem/src/Radio";
import TextInput from "../labsystem/src/Input/TextInput";
import { Button, OutlineButton, TextButton } from "../labsystem/src/Button";
import { iconOptions, buttonSkinOptions } from "./assets";
import Toggle from "../labsystem/src/Toggle";

export default class ButtonPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedText: "edit me",
      selectedIcon: "",
      selectedSkin: "",
      selectedSize: "normal",
      selectedAriaDisabled: false,
      selectedIsDisabled: false,
      fullWidth: false,
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

  handleSkinPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
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

  handlePropChangeBool = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedIcon,
      selectedSkin,
      selectedSize,
      fullWidth,
      selectedAriaDisabled,
      selectedIsDisabled,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <Component
          text={selectedText}
          icon={selectedIcon}
          skin={selectedSkin}
          size={selectedSize}
          {...(fullWidth ? { fullWidth } : undefined)}
          disabled={selectedIsDisabled}
          ariaDisabled={selectedAriaDisabled}
        />
      </React.Fragment>
    );
  };

  render() {
    const {
      currentComponent,
      selectedText,
      selectedIcon,
      selectedSkin,
      selectedSize,
      fullWidth,
      selectedAriaDisabled,
      selectedIsDisabled,
    } = this.state;

    return (
      <div className="columns lab-playground">
        <div
          className="column lab-playground__component"
          style={selectedSkin === "light" ? { background: "#2E3942" } : {}}
        >
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h3>Prop Settings</h3>

          <div className="lab-playground__item">
            <strong>variation: </strong>
            <fieldset>
              <legend>Variation</legend>
              <Radio
                id="ButtonVariationRadio-1"
                label="Button"
                name="ButtonVariationRadio"
                value="Button"
                onChange={this.handleButtonVariationPropChange}
                checked={currentComponent === "Button"}
              />
              <Radio
                id="ButtonVariationRadio-2"
                label="OutlineButton"
                name="ButtonVariationRadio"
                value="OutlineButton"
                onChange={this.handleButtonVariationPropChange}
                checked={currentComponent === "OutlineButton"}
              />
              <Radio
                id="ButtonVariationRadio-3"
                label="TextButton"
                name="ButtonVariationRadio"
                value="TextButton"
                onChange={this.handleButtonVariationPropChange}
                checked={currentComponent === "TextButton"}
              />
            </fieldset>
          </div>

          <div className="lab-playground__item">
            <TextInput
              id="selectedText"
              onChange={this.handleTextPropChange}
              value={selectedText}
              label="text"
            />
          </div>

          <div className="lab-playground__item">
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
          </div>

          <div className="lab-playground__item">
            <label htmlFor="selectedSkin">
              <strong>skin: </strong>
              <select
                id="selectedSkin"
                value={selectedSkin}
                onChange={this.handleSkinPropChange}
              >
                {buttonSkinOptions[currentComponent].map((item) => (
                  <option value={item} key={`skin-${item}`}>
                    {!isEmpty(item) ? item : "none"}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="lab-playground__item">
            <strong>size: </strong>
            <fieldset>
              <legend>Size</legend>
              <Radio
                id="ButtonSizeRadio-1"
                label="small"
                name="ButtonSizeRadio"
                value="small"
                onChange={this.handleButtonSizePropChange}
                checked={selectedSize === "small"}
              />
              <Radio
                id="ButtonSizeRadio-2"
                label="normal"
                name="ButtonSizeRadio"
                value="normal"
                onChange={this.handleButtonSizePropChange}
                checked={selectedSize === "normal"}
              />
              <Radio
                id="ButtonSizeRadio-3"
                label="large"
                name="ButtonSizeRadio"
                value="large"
                onChange={this.handleButtonSizePropChange}
                checked={selectedSize === "large"}
              />
            </fieldset>
          </div>

          <div className="lab-playground__item">
            <fieldset>
              <legend>fullWidth</legend>
              <Toggle
                id="fullWidth"
                name="fullWidth"
                value={fullWidth}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </div>

          <div className="lab-playground__item">
            <fieldset>
              <legend>ariaDisabled</legend>
              <Toggle
                id="selectedAriaDisabled"
                name="selectedAriaDisabled"
                value={selectedAriaDisabled}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </div>

          <div className="lab-playground__item">
            <fieldset>
              <legend>disabled</legend>
              <Toggle
                id="selectedIsDisabled"
                name="selectedIsDisabled"
                value={selectedIsDisabled}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}
