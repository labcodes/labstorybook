import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Alert extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["info", "warn", "error"]),
    icon: PropTypes.string.isRequired,
    buttonInfo: PropTypes.shape({
      buttonText: PropTypes.string,
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    type: "info",
    buttonInfo: { buttonText: "", onClick: undefined },
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral-70" className="lab-alert__icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonInfo } = this.props;
    return buttonInfo.buttonText ? (
      <TextButton size="normal" skin="dark" text={buttonInfo.buttonText} />
    ) : undefined;
  };

  handleClick = (e) => {
    const { buttonInfo } = this.props;
    if (!isUndefined(buttonInfo.onClick)) {
      buttonInfo.onClick(e);
    }
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-alert__${type}`}>
        {this.icon()}
        <span className="lab-alert__message">{text}</span>
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
