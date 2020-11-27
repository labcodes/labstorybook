import React from "react";

import TextInput from "../labsystem/src/Input/TextInput";
import EmailInput from "../labsystem/src/Input/EmailInput";
import PasswordInput from "../labsystem/src/Input/PasswordInput";

import Toggle from "../labsystem/src/Toggle";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      emailValue: "",
      passwordValue: "",
      label: "Label example",
      icon: "",
      iconColor: "mineral-70",
      helpMessage: "",
      prefix: "",
      suffix: "",
      customErrorMsg: "",
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
          <span className="lab-playground__item">
            <h3>TextInput</h3>
            <TextInput
              defaultValue={textValue}
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
          </span>

          <h3>EmailInput</h3>
          <EmailInput
            defaultValue={emailValue}
            id="emailValue"
            label={label}
            icon={icon}
            iconColor={iconColor}
            helpMessage={helpMessage}
            prefix={prefix}
            suffix={suffix}
            customErrorMsg={customErrorMsg}
            required={required}
            onChange={this.handlePropChangeText}
            {...(disabled ? { disabled } : undefined)}
          />

          <h3>PasswordInput</h3>
          <PasswordInput
            defaultValue={passwordValue}
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
        </div>

        <div className="column lab-playground__configs">
          <h3>Prop Settings</h3>
          <span className="lab-playground__item">
            <TextInput
              label="Label"
              id="label"
              value={label}
              onChange={this.handlePropChangeText}
            />
          </span>
          <span className="lab-playground__item">
            <label htmlFor="icon">
              icon
              <br />
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
          <span className="lab-playground__item">
            <p>
              <strong>Required</strong>
            </p>
            <Toggle name="required" handleToggle={this.handlePropChangeBool} />
            <p>
              <strong>Disabled</strong>
            </p>
            <Toggle name="disabled" handleToggle={this.handlePropChangeBool} />
            <p>
              <strong>isValid</strong>
            </p>
            <Toggle
              name="isValid"
              handleToggle={this.handlePropChangeBool}
              defaultValue="true"
            />
          </span>
        </div>
      </div>
    );
  }
}
