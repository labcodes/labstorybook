import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class AbstractTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    isOutline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    renderPrefix: PropTypes.object,
    renderSuffix: PropTypes.object,
    className: PropTypes.string,
  };

  static defaultProps = {
    isOutline: false,
    skin: "pale",
    color: "",
    disabled: false,
    onClick: undefined,
    renderPrefix: undefined,
    renderSuffix: undefined,
    className: "",
  };

  handleOnClick = (e) => {
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(e);
    }
  };

  render() {
    const {
      text,
      disabled,
      isOutline,
      skin,
      color,
      renderPrefix,
      renderSuffix,
      className,
    } = this.props;

    return (
      <span
        className={
          `lab-tag ${className}` +
          `${disabled ? ` lab-tag--disabled` : ""}` +
          `${isOutline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}`
        }
        onClick={this.handleOnClick}
        onKeyDown={this.handleOnClick}
        role="presentation"
      >
        {renderPrefix}
        {text}
        {renderSuffix}
      </span>
    );
  }
}
