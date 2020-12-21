import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class TextButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    skin: PropTypes.oneOf(["", "light", "dark"]),
    icon: PropTypes.string,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
    onClick: undefined,
    fullWidth: false,
  };

  render() {
    const { text, skin, icon, size, disabled, onClick, fullWidth } = this.props;
    return (
      <AbstractButton
        variant="text"
        text={text}
        skin={skin}
        icon={icon}
        size={size}
        disabled={disabled}
        onClick={onClick}
        fullWidth={fullWidth}
      />
    );
  }
}
