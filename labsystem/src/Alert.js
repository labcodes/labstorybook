import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Alert extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Alert. */
    text: PropTypes.string.isRequired,
    /** Type of the Alert. */
    type: PropTypes.oneOf(["info", "warn", "error"]),
    /** Type of the icon to be rendered inside the Alert. */
    icon: PropTypes.string.isRequired,
    /** Ojbect with information about the Alert's button. */
    buttonProps: PropTypes.shape({
      /** Text that will be rendered inside the Alert's button. */
      text: PropTypes.string,
      /** Callback to be executed when the Alert's button is clicked. */
      onClick: PropTypes.func,
    }),
  };

  static defaultProps = {
    type: "info",
    buttonProps: { text: "", onClick: undefined },
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral-70" className="lab-alert__icon" />
    ) : undefined;
  };

  button = () => {
    const {
      buttonProps: { text },
    } = this.props;
    return text ? (
      <TextButton size="normal" skin="dark" text={text} />
    ) : undefined;
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
      <div className={`lab-alert lab-alert--${type}`}>
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
