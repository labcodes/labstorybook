import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class TextButton extends React.Component {
  static propTypes = {
    /** This is the button label. */
    text: PropTypes.string.isRequired,
    /** Sets a special color skin to the button. */
    skin: PropTypes.oneOf(["", "light", "dark"]),
    /** Sets the icon related to the button label. Default state: no icon. */
    icon: PropTypes.string,
    /** Sets the button's height. Small = 32px, Normal = 40px, Large = 48px. */
    size: PropTypes.oneOf(["normal", "small", "large"]),
    /** Disables the Button. Will be read by screen readers. When true, will override `disabled`. */
    ariaDisabled: PropTypes.bool,
    /** Disables the Button. Won't be read by screen readers. */
    disabled: PropTypes.bool,
    /** Action to be executed when the button is clicked. */
    onClick: PropTypes.func,
    /** Makes the button expand to its container's full width. */
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    skin: "",
    icon: undefined,
    size: "normal",
    disabled: false,
    ariaDisabled: false,
    onClick: () => {},
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
      ariaDisabled,
    } = this.props;
    return (
      <AbstractButton
        variant="text"
        text={text}
        skin={skin}
        icon={icon}
        size={size}
        disabled={disabled}
        ariaDisabled={ariaDisabled}
        onClick={onClick}
        fullWidth={fullWidth}
      />
    );
  }
}
