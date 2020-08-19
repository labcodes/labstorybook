import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class DefaultButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
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
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
  };

  render() {
    return <AbstractButton variant="default" {...this.props} />;
  }
}
