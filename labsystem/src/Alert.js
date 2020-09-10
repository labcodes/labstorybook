import React from "react";
import PropTypes from "prop-types";

export default class Alert extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    // type: PropTypes.oneOf([info, warning, error]).isRequired,
    // buttonText: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  //   buttonText: "check",
  // };

  render() {
    const { text, icon } = this.props;
    return (
      <span className="lab-alert">
        {text}
      </span>
    );
  }
}
