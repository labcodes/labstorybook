import React from "react";
import Icon from "./Icon";

export default class Inputs extends React.Component {
  render() {
    const {
      className,
      id,
      type,
      label,
      disabled,
      value,
      icon,
      iconColor,
      required,
      helpMessage,
      prefix,
      suffix,
    } = this.props;

    let trailingIcon = null;
    let message = null;
    let requiredIcon = null;
    let prefixArea = null;
    let suffixArea = null;

    if (icon) {
      trailingIcon = (
        <button className="lab-input__icon">
          <Icon type={icon} color={iconColor} />
        </button>
      );
    }

    if (required) {
      requiredIcon = (
        <span className="lab-input__required-icon"></span>
      );
      message = (
        <div className="lab-input__message lab-input__message--required">{helpMessage}</div>
      );
    }

    if (prefix) {
      prefixArea = (
        <span className="lab-input__prefix">{prefix}</span>
      );
    }

    if (suffix) {
      suffixArea = (
        <span className="lab-input__suffix">{suffix}</span>
      );
    }

    //Checked for value just to simulate the UI.
    if (value === "Error") {
      message = (
        <div className="lab-input__message lab-input__message--error"> Error message </div>
      );
    }

    return (
      <div className="lab-input">
        <input
          className={`lab-input__field ${className}`}
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          value={value} 
        />

        {trailingIcon}

        {prefixArea}

        {suffixArea}

        {message}

        {requiredIcon}

        <label 
          className={`lab-input__label`} 
          for={id}>{label}
        </label>
      </div>
    );
  }

}