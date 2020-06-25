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
    const { icon } = this.props;
    return icon ? <Icon type={icon} color="mineral20" /> : "";
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
