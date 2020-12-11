import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class TextButton extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the button. */
    text: PropTypes.string.isRequired,
    /** Skin of the the rendered button. */
    skin: PropTypes.oneOf(["light", "dark"]),
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Size of the button. */
    size: PropTypes.oneOf(["normal", "small", "large"]),
    /** Disables the button, cancelling the onClick handler. */
    disabled: PropTypes.bool,
    /** Callback to be executed when the button is clicked. */
    onClick: PropTypes.func,
    /** Makes the button occupy its container's full width. */
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
