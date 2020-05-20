import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

export default class Inputs extends React.Component {
  render() {
    const {
      autocomplete,
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
      suffix
    } = this.props;

    let trailingIcon = null;
    let message = null;
    let requiredIcon = null;
    let prefixArea = null;
    let suffixArea = null;

    if (icon) {
      trailingIcon = (
        <button className="input__icon">
          <Icon type={icon} color={iconColor} />
        </button>
      );
    }

    if (required) {
      requiredIcon = (
        <span class="required"></span>
      );
      message = (
        <div class="input__message input__message--required">{helpMessage}</div>
      );
    }

    if (prefix) {
      prefixArea = (
        <span class="prefix">{prefix}</span>
      );
    }

    if (suffix) {
      suffixArea = (
        <span class="suffix">{suffix}</span>
      );
    }

    //Checked for value just to simulate the UI.
    if (value == "Error") {
      message = (
        <div class="input__message input__message--error">Error message</div>
      );
    }

    return (
      <div className="input__wrapper">
        <input
          className={`input ${className}`}
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          value={value} />

        {trailingIcon}

        {prefixArea}

        {suffixArea}

        {message}

        {requiredIcon}

        <label for={id}>{label}</label>
      </div>
    )
  }
}