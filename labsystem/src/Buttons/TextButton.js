import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class TextButton extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Button. */
    text: PropTypes.string.isRequired,
    /** Skin of the the rendered Button. */
    skin: PropTypes.oneOf(["light", "dark"]),
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Size of the Button. */
    size: PropTypes.oneOf(["normal", "small", "large"]),
    /** Disables the Button, cancelling the onClick handler. */
    disabled: PropTypes.bool,
    /** Callback to be executed when the Button is clicked. */
    onClick: PropTypes.func,
    /** Makes the Button occupy its container's full width. */
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
