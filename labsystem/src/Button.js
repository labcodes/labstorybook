import React from "react";
import PropTypes from "prop-types";
// import { isUndefined } from "loadash";

export default class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
    size: PropTypes.string,
    
  };

  static defaultProps = {
    disabled: false,
    type: undefined,
    size: undefined,

  };

  render() {
    const { disabled, type, size } = this.props;
    return (
      <button className={`btn btn--${type} btn--${size} `} disabled={disabled}>{this.props.children}</button> 
    );
  }
}
