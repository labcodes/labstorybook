import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class PasswordInput extends React.Component {
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
  };

  static defaultProps = {
    disabled: false,
    defaultValue: undefined,
    value: undefined,
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: undefined,
    onChange: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }

  toggleTrailingIcon = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  render() {
    const { showPassword } = this.state;

    const {
      id,
      label,
      defaultValue,
      value,
      required,
      helpMessage,
      prefix,
      suffix,
      isValid,
      customErrorMsg,
      onChange,
      disabled,
    } = this.props;

    return (
      <AbstractTextInput
        type={showPassword ? "text" : "password"}
        icon={showPassword ? "eye-opened" : "eye-closed"}
        onIconClick={this.toggleTrailingIcon}
        id={id}
        label={label}
        defaultValue={defaultValue}
        value={value}
        required={required}
        helpMessage={helpMessage}
        prefix={prefix}
        suffix={suffix}
        isValid={isValid}
        customErrorMsg={customErrorMsg}
        onChange={onChange}
        {...(disabled ? { disabled } : undefined)}
      />
    );
  }
}
