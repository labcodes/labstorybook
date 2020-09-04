import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    togglable: PropTypes.bool,
    dropdown: PropTypes.bool,
    removable: PropTypes.bool,
    disabled: PropTypes.bool,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    outline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    togglable: false,
    dropdown: false,
    removable: false,
    thumbSrc: "",
    icon: "",
    outline: false,
    skin: "pale",
    color: "",
    disabled: false,
    selected: false,
    onClick: undefined,
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
    const { selected } = this.props;
    return selected ? (
      <Icon type="check" color="black75" size="petit" className="check-icon" />
    ) : undefined;
  };

  dropdownIcon = () => {
    const { dropdown } = this.props;
    return dropdown ? (
      <span className="lab-tag__dropdown-icon-wrapper">
        <Icon
          type="dropdown-closed"
          color="black75"
          size="petit"
          className="dropdown-icon"
        />
      </span>
    ) : undefined;
  };

  handleOnClick = (e) => {
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(e);
    }
  };

  removeIcon = () => {
    const { removable } = this.props;
    return removable ? (
      <span className="lab-tag__remove-icon-wrapper">
        <Icon
          type="remove"
          color="black75"
          size="petit"
          className="remove-icon"
        />
      </span>
    ) : undefined;
  };

  render() {
    const {
      text,
      togglable,
      dropdown,
      removable,
      disabled,
      icon,
      thumbSrc,
      outline,
      skin,
      color,
      selected,
    } = this.props;
    return (
      <span
        className={
          `lab-tag` +
          `${togglable ? ` lab-tag--togglable` : ``}` +
          `${removable ? ` lab-tag--removable` : ""}` +
          `${dropdown ? ` lab-tag--dropdown` : ""}` +
          `${disabled ? ` lab-tag--disabled` : ""}` +
          `${outline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}` +
          `${icon ? ` lab-tag--has-left-icon` : ""}` +
          `${selected ? ` lab-tag--selected` : ""}` +
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
        {this.dropdownIcon()}
        {this.removeIcon()}
      </span>
    );
  }
}
