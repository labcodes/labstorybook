import React from "react";

import TextInput from "../labsystem/src/Input/TextInput";
import EmailInput from "../labsystem/src/Input/EmailInput";
import PasswordInput from "../labsystem/src/Input/PasswordInput";

import Toggle from "../labsystem/src/Toggle";
import Radio from "../labsystem/src/Radio";

export default class TextInputPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      label: "Label example",
      icon: "",
      iconColor: "mineral-70",
      helpMessage: "",
      prefix: "",
      suffix: "",
      customErrorMsg: "",
      disabled: false,
      ariaDisabled: false,
      required: false,
      isValid: true,
      currentComponent: "TextInput",
      availableComponents: {
        TextInput,
        EmailInput,
        PasswordInput,
      },
    };

    this.state = { ...this.initialState };
  }

  handleCurrentComponent = (event) => {
    const { value } = event.target;
    this.setState({
      ...this.initialState,
      currentComponent: value,
    });
  };

  handlePropChangeText = (event) => {
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
      label,
      disabled,
      ariaDisabled,
      icon,
      iconColor,
      helpMessage,
      prefix,
      suffix,
      customErrorMsg,
      required,
      isValid,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <Component
        id="textValue"
        label={label}
        icon={icon}
        iconColor={iconColor}
        helpMessage={helpMessage}
        prefix={prefix}
        suffix={suffix}
        customErrorMsg={customErrorMsg}
        required={required}
        isValid={isValid}
        disabled={disabled}
        ariaDisabled={ariaDisabled}
      />
    );
  };

  render() {
    const {
      label,
      disabled,
      ariaDisabled,
      iconColor,
      helpMessage,
      prefix,
      suffix,
      customErrorMsg,
      required,
      isValid,

      currentComponent,
    } = this.state;

    const iconOptions = [
      "none",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-top",
      "calendar",
      "coin",
      "collapse-closed",
      "collapse-open",
      "check",
      "dropdown-closed",
      "dropdown-open",
      "edit",
      "eye-closed",
      "eye-opened",
      "track",
      "key",
      "logout",
      "magnifying-glass",
      "minus",
      "plus",
      "reload",
      "remove",
      "sort",
      "star",
      "trash",
      "upload",
      "arrow-fill-right",
      "arrow-fill-left",
      "chevron-right",
      "chevron-left",
      "menu-expand",
      "menu-collapse",
      "menu-default",
      "external",
      "wallet",
      "workspace",
    ];

    const iconColorOptions = [
      "white",
      "black",
      "black-75",
      "mineral-10",
      "mineral-20",
      "mineral-30",
      "mineral-40",
      "mineral-60",
      "mineral-70",
      "mineral-80",
      "mineral-90",
      "teal-40",
      "teal-60",
      "teal-70",
      "purple-40",
      "purple-60",
      "purple-70",
    ];

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h3>Prop Settings</h3>
          <div className="lab-playground__item">
            <fieldset>
              <legend>Variation</legend>
              <Radio
                id="TextInput"
                label="TextInput"
                name="ButtonVariationRadio"
                value="TextInput"
                onChange={this.handleCurrentComponent}
                checked={currentComponent === "TextInput"}
              />
              <Radio
                id="EmailInput"
                label="EmailInput"
                name="ButtonVariationRadio"
                value="EmailInput"
                onChange={this.handleCurrentComponent}
                checked={currentComponent === "EmailInput"}
              />
              <Radio
                id="PasswordInput"
                label="PasswordInput"
                name="ButtonVariationRadio"
                value="PasswordInput"
                onChange={this.handleCurrentComponent}
                checked={currentComponent === "PasswordInput"}
              />
            </fieldset>
          </div>
          <span className="lab-playground__item">
            <TextInput
              label="Label"
              id="label"
              value={label}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__inline-item">
            <label htmlFor="icon">
              Icon
              <select
                name="icons"
                id="icon"
                onChange={this.handlePropChangeText}
              >
                {iconOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="lab-playground__inline-item">
            <label htmlFor="iconColor">
              iconColor
              <select
                name="iconColor"
                id="iconColor"
                onChange={this.handlePropChangeText}
              >
                {iconColorOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="lab-playground__item">
            <TextInput
              label="Help message"
              id="helpMessage"
              value={helpMessage}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__item">
            <TextInput
              label="Error message"
              id="customErrorMsg"
              value={customErrorMsg}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__item">
            <TextInput
              label="Prefix text"
              id="prefix"
              value={prefix}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__item">
            <TextInput
              label="Suffix text"
              id="suffix"
              value={suffix}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>Required</legend>
              <Toggle
                id="required"
                name="required"
                value={required}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>Disabled</legend>
              <Toggle
                id="disabled"
                name="disabled"
                value={disabled}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>AriaDisabled</legend>
              <Toggle
                id="ariaDisabled"
                name="ariaDisabled"
                value={ariaDisabled}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
          <span className="lab-playground__inline-item">
            <fieldset>
              <legend>isValid</legend>
              <Toggle
                id="isValid"
                name="isValid"
                value={isValid}
                handleToggle={this.handlePropChangeBool}
              />
            </fieldset>
          </span>
        </div>
      </div>
    );
  }
}
