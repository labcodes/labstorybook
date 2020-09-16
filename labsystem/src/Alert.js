import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
// import Icon from "./Button";

export default class Alert extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["info", "warn", "error"]),
    icon: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "info",
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral70" className="alert-icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonText } = this.props;
    return buttonText ? (
      <button type="button" className="lab-alert__button">
        {buttonText}
      </button>
    ) : undefined;
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-alert__${type}`}>
        {this.icon()}
        {text}
        {this.button()}
      </div>
    );
  }
}
