import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class TextButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    skin: PropTypes.oneOf(["light", "dark"]),
    icon: PropTypes.string,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    disabled: PropTypes.bool,
    handleClick: PropTypes.func,
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
    handleClick: undefined,
  };

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <AbstractButton variant="text" {...this.props} />;
  }
}
