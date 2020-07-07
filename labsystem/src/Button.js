import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
// import { isUndefined } from "loadash";

export default class Button extends React.Component {
  static propTypes = {
    exception: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    exception: undefined,
    icon: undefined,
    disabled: false,
    type: "default",
    size: "normal",
    children: undefined,
  };

  icon = () => {
    const { icon, type, disabled, exception } = this.props;
    let returnIcon;
    let color;

    // Default buttons
    if (type === "default") {
      color = "white";
    }
    if (type === "default" && disabled) {
      color = "mineral40";
    }
    // Default buttons with exceptions
    if (type === "default" && exception === "dark") {
      color = "white";
    }
    if (type === "default" && exception === "dark-warning") {
      color = "yellow60";
    }
    if (type === "default" && exception === "light") {
      color = "mineral90";
    }
    if (type === "default" && exception === "light-destructive") {
      color = "red60";
    }
    if (type === "default" && exception === "light-confirmation") {
      color = "green60";
    }
    // Ghost buttons
    if (type === "ghost") {
      color = "teal60";
    }
    if (type === "ghost" && disabled) {
      color = "mineral30";
    }
    // Ghost buttons with exceptions
    if (type === "ghost" && exception === "ghost-light") {
      color = "white";
    }
    if (type === "ghost" && exception === "ghost-dark") {
      color = "mineral90";
    }
    // Text buttons
    if (type === "text") {
      color = "teal60";
    }
    if (type === "text" && disabled) {
      color = "mineral30";
    }
    // Destructive and warning buttons
    if (type === "destructive") {
      color = "white";
    }
    if (type === "warning") {
      color = "black75";
    }

    if (icon) {
      returnIcon = <Icon type={icon} color={color} size="petit" />;
    }
    return returnIcon;
  };

  render() {
    const { children, disabled, type, size, exception } = this.props;
    return (
      <button
        type="button"
        className={`btn btn--${type} btn--${size} btn--${exception}`}
        disabled={disabled}
      >
        {this.icon()}
        {children}
      </button>
    );
  }
}
