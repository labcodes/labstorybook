import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool,
    isOn: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    color: "",
    isOutline: false,
    disabled: false,
    isOn: false,
    onClick: () => {},
  };

  render() {
    const { text, color, isOutline, disabled, isOn, onClick } = this.props;
    return (
      <AbstractTag
        isTogglable
        text={text}
        color={color}
        isOutline={isOutline}
        disabled={disabled}
        onClick={onClick}
        skin={isOn ? "vivid" : "pale"}
        icon={isOn ? "check" : ""}
      />
    );
  }
}
