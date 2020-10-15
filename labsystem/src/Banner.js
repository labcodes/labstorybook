import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Banner extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["info", "warn", "error"]),
    icon: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: "info",
    buttonText: "",
    onClick: undefined,
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="white" className="lab-banner__icon" />
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

  handleClick = (e) => {
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(e);
    }
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-banner__${type}`}>
        {this.icon()}
        <span className="lab-banner__message">{text}</span>
        <span
          className="lab-alert__button"
          onClick={this.handleClick}
          role="presentation"
        >
          {this.button()}
        </span>
      </div>
    );
  }
}
