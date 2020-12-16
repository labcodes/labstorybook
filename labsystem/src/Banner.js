import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Banner extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Banner. */
    text: PropTypes.string.isRequired,
    /** Type of the Banner. */
    type: PropTypes.oneOf(["info", "warn", "error"]),
    /** Type of the icon to be rendered inside de Banner. */
    icon: PropTypes.string.isRequired,
    /** Ojbect with information about the Banners's button. */
    buttonProps: PropTypes.shape({
      /** Text that will be rendered inside the Banners's button. */
      text: PropTypes.string,
      /** Callback to be executed when the Banners's button is clicked. */
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    type: "info",
    buttonProps: {
      text: "",
      onClick: undefined,
    },
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="white" className="lab-banner__icon" />
    ) : undefined;
  };

  button = () => {
    const { buttonProps, type } = this.props;
    if (buttonProps.text) {
      return type === "warn" ? (
        <TextButton size="normal" skin="dark" text={buttonProps.text} />
      ) : (
        <TextButton size="normal" skin="light" text={buttonProps.text} />
      );
    }
    return null;
  };

  handleClick = (e) => {
    const { buttonProps } = this.props;
    if (!isUndefined(buttonProps.onClick)) {
      buttonProps.onClick(e);
    }
  };

  render() {
    const { text, type } = this.props;
    return (
      <div className={`lab-banner lab-banner--${type}`}>
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
