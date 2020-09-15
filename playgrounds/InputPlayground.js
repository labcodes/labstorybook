import React from "react";

import TextInput from "../labsystem/src/Input/TextInput";
import EmailInput from "../labsystem/src/Input/EmailInput";
import PasswordInput from "../labsystem/src/Input/PasswordInput";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      emailValue: "",
      passwordValue: "",
      label: "Label example",
      icon: "",
      iconColor: "mineral70",
      helpMessage: "",
      prefix: "",
      suffix: "",
      customErrorMsg: "custom error",
      disabled: false,
      required: false,
      isValid: true,
    };
  }

  handlePropChangeText = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handlePropChangeBool = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  render() {
    const {
      textValue,
      emailValue,
      passwordValue,
      label,
      disabled,
      icon,
      iconColor,
      helpMessage,
      prefix,
      suffix,
      customErrorMsg,
      required,
      isValid,
    } = this.state;

    const iconOptions = [
      "",
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
      "lupe",
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

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <h4>TextInput</h4>
          <TextInput
            value={textValue}
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
            onChange={this.handlePropChangeText}
            {...(disabled ? { disabled } : undefined)}
          />
          <p>
            <strong>TextInput value: </strong>
            {textValue}
          </p>

          <h4>EmailInput</h4>
          <EmailInput
            value={emailValue}
            id="emailValue"
            label={label}
            icon={icon}
            iconColor={iconColor}
            helpMessage={helpMessage}
            prefix={prefix}
            suffix={suffix}
            customErrorMsg={customErrorMsg}
            required={required}
            isValid={isValid}
            onChange={this.handlePropChangeText}
            {...(disabled ? { disabled } : undefined)}
          />
          <p>
            <strong>EmailInput value: </strong>
            {emailValue}
          </p>

          <h4>PasswordInput</h4>
          <PasswordInput
            value={passwordValue}
            id="passwordValue"
            label={label}
            helpMessage={helpMessage}
            prefix={prefix}
            suffix={suffix}
            customErrorMsg={customErrorMsg}
            required={required}
            isValid={isValid}
            onChange={this.handlePropChangeText}
            {...(disabled ? { disabled } : undefined)}
          />
          <p>
            <strong>PasswordInput value: </strong>
            {passwordValue}
          </p>
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <span className="lab-playground__item">
            <label htmlFor="label">
              Label
              <br />
              <input
                id="label"
                type="text"
                label="Label"
                value={label}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <br />
          <span className="lab-playground__item">
            <label htmlFor="icon">
              icon
              <br />
              <select
                name="icons"
                id="icon"
                onChange={this.handlePropChangeText}
              >
                {iconOptions.map((item, index) => (
                  <option value={item} key={`icon-${index}`}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="iconColor">
              iconColor
              <br />
              <input
                id="iconColor"
                type="text"
                label="iconColor"
                value={iconColor}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="helpMessage">
              helpMessage
              <br />
              <input
                id="helpMessage"
                type="text"
                label="helpMessage"
                value={helpMessage}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="customErrorMsg">
              customErrorMsg
              <br />
              <input
                id="customErrorMsg"
                type="text"
                label="customErrorMsg"
                value={customErrorMsg}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="prefix">
              Prefix
              <br />
              <input
                id="prefix"
                type="text"
                label="prefix"
                value={prefix}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="suffix">
              Suffix
              <br />
              <input
                id="suffix"
                type="text"
                label="suffix"
                value={suffix}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <br />
          <span className="lab-playground__item">
            <label htmlFor="required">
              Required
              <br />
              <input
                id="required"
                type="checkbox"
                label="Required"
                checked={required}
                onChange={this.handlePropChangeBool}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="disabled">
              Disabled
              <br />
              <input
                id="disabled"
                type="checkbox"
                label="Disabled"
                checked={disabled}
                onChange={this.handlePropChangeBool}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="isValid">
              isValid
              <br />
              <input
                id="isValid"
                type="checkbox"
                label="IsValid"
                checked={isValid}
                onChange={this.handlePropChangeBool}
              />
            </label>
          </span>
        </div>
      </div>
    );
  }
}
