import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class OutlineButton extends React.Component {
  static propTypes = {
    /** This is the button label. */
    text: PropTypes.string.isRequired,
    /** HTML type of the Button. */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Sets a special color skin to the button. */
    skin: PropTypes.oneOf(["", "light", "dark"]),
    /** Sets the icon related to the button label. Default state: no icon. */
    icon: PropTypes.string,
    /** Sets the button's height. Small = 32px, Normal = 40px, Large = 48px. */
    size: PropTypes.oneOf(["normal", "small", "large"]),
    /** Makes the button disabled, cancelling the onClick handler. */
    disabled: PropTypes.bool,
    /** Action to be executed when the button is clicked. */
    onClick: PropTypes.func,
    /** Makes the button expand to its container's full width. */
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    type: "button",
    size: "normal",
    disabled: false,
    onClick: () => {},
    fullWidth: false,
  };

  render() {
    const {
      text,
      type,
      skin,
      icon,
      size,
      disabled,
      onClick,
      fullWidth,
    } = this.props;
    return (
      <AbstractButton
        variant="outline"
        text={text}
        type={type}
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
