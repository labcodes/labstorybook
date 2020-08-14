import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class TextInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    theme: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string, // avaliar depois como resolver//
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    required: PropTypes.bool,
    helpMessage: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    isValid: PropTypes.bool,
    customErrorMsg: PropTypes.string,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
  };

  static defaultProps = {
    theme: undefined,
    className: undefined,
    disabled: false,
    defaultValue: undefined,
    value: undefined, // avaliar depois como resolver//
    icon: undefined,
    iconColor: "mineral70",
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
    return <AbstractTextInput type="text" {...this.props} />;
  }
}
