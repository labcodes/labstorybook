import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractButton extends React.Component {
  static propTypes = {
    /** HTML type of the Button. */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Style variation of the Button. */
    variant: PropTypes.oneOf(["default", "outline", "text"]),
    /** Text that will be rendered inside the Button. */
    text: PropTypes.string.isRequired,
    /** Skin of the the rendered Button. */
    skin: PropTypes.oneOf([
      "light",
      "dark",
      "warning",
      "destructive",
      "warning-invert",
      "destructive-invert",
      "confirmation-invert",
    ]),
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
    type: "button",
    variant: "default",
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
    onClick: undefined,
    fullWidth: false,
  };

  icon = () => {
    const { icon } = this.props;

    /*
    Set icon color to be the icon color of default button.
    Icon color changes according to button type and exception on _buttons.scss
    */
    return icon ? (
      <Icon type={icon} color="white" size="petit" className="lab-btn__icon" />
    ) : (
      ""
    );
  };

  handleOnClick = (e) => {
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(e);
    }
  };

  render() {
    const { type, text, variant, skin, size, disabled, fullWidth } = this.props;
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={
          `lab-btn` +
          ` lab-btn--${variant} lab-btn--${size}` +
          `${skin ? ` lab-btn--${skin}` : ""}` +
          `${fullWidth ? ` lab-btn--block` : ""}`
        }
        onClick={this.handleOnClick}
        disabled={disabled || undefined}
      >
        {this.icon()}
        {text}
      </button>
    );
  }
}
