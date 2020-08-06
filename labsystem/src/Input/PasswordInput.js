import React from "react";
import PropTypes from "prop-types";

import AbstractTextInput from "./AbstractTextInput";

export default class PasswordInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    theme: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string, // avaliar depois como resolver//
    required: PropTypes.bool,
    helpMessage: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    isValid: PropTypes.bool,
    customErrorMsg: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    theme: undefined,
    className: undefined,
    disabled: false,
    defaultValue: undefined,
    value: undefined, // avaliar depois como resolver//
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: "Custom Error",
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

    return (
      <AbstractTextInput
        type={showPassword ? "text" : "password"}
        icon={showPassword ? "eye-opened" : "eye-closed"}
        onIconClick={this.toggleTrailingIcon}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...this.props}
      />
    );
  }
}
