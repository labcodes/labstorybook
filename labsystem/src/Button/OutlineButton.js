import React from "react";
import PropTypes from "prop-types";
import AbstractButton from "./AbstractButton";

export default class OutlineButton extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    skin: PropTypes.oneOf(["light", "dark"]),
    icon: PropTypes.string,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    skin: undefined,
    icon: undefined,
    size: "normal",
    disabled: false,
    onClick: undefined,
  };

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <AbstractButton variant="outline" {...this.props} />;
  }
}
