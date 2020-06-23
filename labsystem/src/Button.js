import React from "react";
import PropTypes from "prop-types";
// import { isUndefined } from "loadash";

export default class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    disabled: false,
    type: undefined,
    size: undefined,
    children: undefined,
  };

  render() {
    const { children, disabled, type, size } = this.props;
    return (
      <button
        type="button"
        className={`btn btn--${type} btn--${size}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}
