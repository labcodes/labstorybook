import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class Button extends React.Component {
  static propTypes = {
    /** This is the button label. */
    text: PropTypes.string.isRequired,
    /** Sets a special color skin to the button. */
    skin: PropTypes.oneOf([
      "",
      "light",
      "dark",
      "warning",
      "destructive",
      "warning-invert",
      "destructive-invert",
      "confirmation-invert",
    ]),
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
    size: "normal",
    disabled: false,
    onClick: undefined,
    fullWidth: false,
  };

  render() {
    const { text, skin, icon, size, disabled, onClick, fullWidth } = this.props;
    return (
      <AbstractButton
        variant="default"
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
