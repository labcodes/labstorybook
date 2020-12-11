import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class TextInput extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** */
    label: PropTypes.string.isRequired,
    /** Disables the Input component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Defines a default value for the Input initialization. */
    defaultValue: PropTypes.string,
    /** */
    value: PropTypes.string,
    /** */
    icon: PropTypes.string,
    /** */
    iconColor: PropTypes.string,
    /** Defines if the Input is required. */
    required: PropTypes.bool,
    /** */
    helpMessage: PropTypes.string,
    /** */
    prefix: PropTypes.string,
    /** */
    suffix: PropTypes.string,
    /** */
    isValid: PropTypes.bool,
    /** */
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
