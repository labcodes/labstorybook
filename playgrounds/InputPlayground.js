import React from "react";

import TextInput from "../labsystem/src/Input/TextInput";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      testValue: "",
      label: "Label example",
      className: '',
      icon: '',
      iconColor: 'mineral70',
      helpMessage: '',
      prefix: '',
      suffix: '',
      customErrorMsg: 'custom error',
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

  handleOnChange = (newValue) => {
    this.setState({ testValue: newValue });
  };

  render() {
    const {
      testValue,
      label,
      className,
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
    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <h4>TextInput</h4>
          <TextInput
            value={testValue}
            id="testInput"
            label={label}
            className={className}
            icon={icon}
            iconColor={iconColor}
            helpMessage={helpMessage}
            prefix={prefix}
            suffix={suffix}
            customErrorMsg={customErrorMsg}
            required={required}
            isValid={isValid}
            onChange={this.handleOnChange}
            {...(disabled ? { disabled } : undefined)}
          />
          <p>
            <strong>Input value: </strong>
            {testValue}
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
          <span className="lab-playground__item">
            <label htmlFor="className">
              className
              <br />
              <input
                id="className"
                type="text"
                label="className"
                value={className}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <span className="lab-playground__item">
            <label htmlFor="icon">
              icon
              <br />
              <input
                id="icon"
                type="text"
                label="icon"
                value={icon}
                onChange={this.handlePropChangeText}
              />
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
