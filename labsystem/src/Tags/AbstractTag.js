import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

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
    renderSuffix: undefined,
  };

  thumb = () => {
    const { thumbSrc } = this.props;
    return thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt="" />
    ) : undefined;
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="black75" size="petit" className="left-icon" />
    ) : undefined;
  };

  selected = () => {
    const { isOn } = this.props;
    return isOn ? (
      <Icon type="check" color="black75" size="petit" className="check-icon" />
    ) : undefined;
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
        {this.thumb()}
        {this.icon()}
        {this.selected()}
        {text}
        {renderSuffix}
      </span>
    );
  }
}
