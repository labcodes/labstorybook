import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class TextInput extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** Text that will be rendered as the Input's label. */
    label: PropTypes.string.isRequired,
    /** Disables the Input component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Defines a default value for the Input initialization. */
    defaultValue: PropTypes.string,
    /** Text that will be rendered inside the Input field. */
    value: PropTypes.string,
    /** Defines which symbol to show. */
    icon: PropTypes.string,
    /** Defines the color of the displayed symbol. */
    iconColor: PropTypes.string,
    /** Defines if the Input is required. */
    required: PropTypes.bool,
    /** Text that will be displayed as a help message. */
    helpMessage: PropTypes.string,
    /** Text that will be displayed at the begining of the Input. */
    prefix: PropTypes.string,
    /** Text that will be displayed at the end of the Input. */
    suffix: PropTypes.string,
    /** Defines if the Input is valid. */
    isValid: PropTypes.bool,
    /** Custom error message to be displayed if Input is not valid. */
    customErrorMsg: PropTypes.string,
    /** Callback to be executed when the Input current value changes. */
    onChange: PropTypes.func,
    /** Callback to be executed when the Input's Icon is clicked. */
    onIconClick: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    defaultValue: undefined,
    value: undefined,
    icon: undefined,
    iconColor: "mineral-70",
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: undefined,
    onChange: undefined,
    onIconClick: undefined,
  };

  render() {
    const {
      id,
      label,
      defaultValue,
      value,
      icon,
      iconColor,
      required,
      helpMessage,
      prefix,
      suffix,
      isValid,
      customErrorMsg,
      onChange,
      onIconClick,
      disabled,
    } = this.props;

    return (
      <AbstractTextInput
        type="text"
        id={id}
        label={label}
        defaultValue={defaultValue}
        value={value}
        icon={icon}
        iconColor={iconColor}
        required={required}
        helpMessage={helpMessage}
        prefix={prefix}
        suffix={suffix}
        isValid={isValid}
        customErrorMsg={customErrorMsg}
        onChange={onChange}
        onIconClick={onIconClick}
        {...(disabled ? { disabled } : undefined)}
      />
    );
  }
}
