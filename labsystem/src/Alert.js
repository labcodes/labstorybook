import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Alert extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["info", "warn", "error"]),
    icon: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
  };

  static defaultProps = {
    type: "info",
    buttonText: "",
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral70" className="lab-icon--alert-icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonText } = this.props;
    return buttonText ? (
      <TextButton size="normal" skin="dark" text={buttonText} />
    ) : undefined;
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-alert__${type}`}>
        {this.icon()}
        <span className="lab-alert__message">{text}</span>
        <span className="lab-alert__button">{this.button()}</span>
      </div>
    );
  }
}
