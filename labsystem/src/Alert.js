import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "./Icon";
import TextButton from "./Buttons/TextButton";

export default class Alert extends React.Component {
  static propTypes = {
    /** */
    text: PropTypes.string.isRequired,
    /** */
    type: PropTypes.oneOf(["info", "warn", "error"]),
    /** */
    icon: PropTypes.string.isRequired,
    /** */
    buttonProps: PropTypes.shape({
      /** */
      text: PropTypes.string,
      /** */
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
