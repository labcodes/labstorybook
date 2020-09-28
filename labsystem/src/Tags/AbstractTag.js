import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class AbstractTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    isTogglable: PropTypes.bool,
    isDropdown: PropTypes.bool,
    isRemovable: PropTypes.bool,
    disabled: PropTypes.bool,
    isOutline: PropTypes.bool,
    isOn: PropTypes.bool,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    skin: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    renderPrefix: PropTypes.object,
    renderSuffix: PropTypes.object,
  };

  static defaultProps = {
    isTogglable: false,
    isDropdown: false,
    isRemovable: false,
    thumbSrc: "",
    icon: "",
    isOutline: false,
    skin: "pale",
    color: "",
    disabled: false,
    isOn: false,
    onClick: undefined,
    renderPrefix: undefined,
    renderSuffix: undefined,
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
      isTogglable,
      isDropdown,
      isRemovable,
      disabled,
      icon,
      thumbSrc,
      isOutline,
      skin,
      color,
      isOn,
      renderPrefix,
      renderSuffix,
    } = this.props;

    return (
      <span
        className={
          `lab-tag` +
          `${isTogglable ? ` lab-tag--togglable` : ""}` +
          `${isRemovable ? ` lab-tag--removable` : ""}` +
          `${isDropdown ? ` lab-tag--dropdown` : ""}` +
          `${disabled ? ` lab-tag--disabled` : ""}` +
          `${isOutline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}` +
          `${icon ? ` lab-tag--has-left-icon` : ""}` +
          `${isOn ? ` lab-tag--selected` : ""}` +
          `${thumbSrc ? ` lab-tag--has-thumb` : ""}`
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
