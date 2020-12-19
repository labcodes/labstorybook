import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractButton extends React.Component {
  static propTypes = {
    /** HTML type of the Button. */
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    /** Button style variation. */
    variant: PropTypes.oneOf(["default", "outline", "text"]),
    /** This is the button label. */
    text: PropTypes.string.isRequired,
    /** Sets the icon related to the button label. Default state: no icon. */
    icon: PropTypes.string,
    /** Sets a special color skin to the button. */
    skin: PropTypes.oneOf([
      "light",
      "dark",
      "warning",
      "destructive",
      "warning-invert",
      "destructive-invert",
      "confirmation-invert",
    ]),
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
    type: "button",
    variant: "default",
    icon: undefined,
    skin: undefined,
    size: "normal",
    disabled: false,
    fullWidth: false,
    onClick: undefined,
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
