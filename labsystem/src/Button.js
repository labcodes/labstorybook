import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
// import { isUndefined } from "loadash";

export default class Button extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["default", "outline", "text"]),
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
  };

  static defaultProps = {
    type: "button",
    variant: "default",
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
  };

  icon = () => {
    const { icon } = this.props;

    /*
    Set icon color to be the icon color of default button.
    Icon color changes according to button type and exception on _buttons.scss
    */
    return icon ? (
      <Icon type={icon} color="white" size="petit" className="btn__icon" />
    ) : (
      ""
    );
  };

  render() {
    const { type, text, variant, skin, size, disabled } = this.props;
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={`btn btn--${variant} btn--${skin} btn--${size}`}
        disabled={disabled}
      >
        {this.icon()}
        {text}
      </button>
    );
  }
}
