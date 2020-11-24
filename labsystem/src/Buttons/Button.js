import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class Button extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    skin: PropTypes.oneOf([
      "light",
      "dark",
      "warning",
      "destructive",
      "warning-invert",
      "destructive-invert",
      "confirmation-invert",
    ]),
    icon: PropTypes.string,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
    onClick: undefined,
    onFocus: undefined,
    onBlur: undefined,
    onKeyUp: undefined,
    fullWidth: false,
  };

  render() {
    const {
      text,
      skin,
      icon,
      size,
      disabled,
      onClick,
      fullWidth,
      onFocus,
      onBlur,
      onKeyUp,
    } = this.props;
    return (
      <AbstractButton
        variant="default"
        text={text}
        skin={skin}
        icon={icon}
        size={size}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        fullWidth={fullWidth}
      />
    );
  }
}
