import React from "react";
import PropTypes from "prop-types";

export default class Alert extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["info", "warn", "error"]),
    // icon: PropTypes.string.isRequired,
    // buttonText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "info",
  };

  render() {
    const { text, type } = this.props;
    return <span className={`lab-alert__${type}`}>{text}</span>;
  }
}
