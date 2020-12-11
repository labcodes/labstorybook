import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class EmailInput extends React.Component {
  static propTypes = {
    /** Text that will be used to identify the Input.  */
    id: PropTypes.string.isRequired,
    /** Text that will be rendered as the Input's label.  */
    label: PropTypes.string.isRequired,
    /** Disables the Input. */
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    /** Text that is written in the Input.  */
    value: PropTypes.string,
    /** */
    icon: PropTypes.string,
    /** */
    iconColor: PropTypes.string,
    /** */
    required: PropTypes.bool,
    /** */
    helpMessage: PropTypes.string,
    /** */
    prefix: PropTypes.string,
    /** */
    suffix: PropTypes.string,
    /** */
    customErrorMsg: PropTypes.string,
    /** */
    onChange: PropTypes.func,
    /** */
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
      customErrorMsg,
      onChange,
      onIconClick,
      disabled,
    } = this.props;

    return (
      <AbstractTextInput
        type="email"
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
        customErrorMsg={customErrorMsg}
        onChange={onChange}
        onIconClick={onIconClick}
        {...(disabled ? { disabled } : undefined)}
      />
    );
  }
}
