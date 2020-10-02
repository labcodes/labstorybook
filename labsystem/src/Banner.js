import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Banner extends React.Component {
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
      <Icon type={icon} color="white" className="lab-icon--banner-icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonText, type } = this.props;
    if (buttonText) {
      return type === "warn" ? (
        <TextButton size="normal" skin="dark" text={buttonText} />
      ) : (
        <TextButton size="normal" skin="light" text={buttonText} />
      );
    }
    return null;
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-banner__${type}`}>
        {this.icon()}
        <span className="lab-banner__message">{text}</span>
        <span className="lab-alert__button">{this.button()}</span>
      </div>
    );
  }
}