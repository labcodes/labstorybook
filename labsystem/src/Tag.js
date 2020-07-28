import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class Tag extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    type: PropTypes.string,
    dropdown: PropTypes.string,
    removable: PropTypes.string,
    disabled: PropTypes.string,
    icon: PropTypes.string,
    thumbSrc: PropTypes.string,
    outline: PropTypes.string,
    vivid: PropTypes.string, 
    colorStyle: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    children: undefined,
    type: undefined,
    icon: undefined,
    thumbSrc: undefined,
    outline: undefined,
    vivid: "soft",
    colorStyle: "soft",
    color: "",
    removable: undefined,
    dropdown: undefined,
    disabled: undefined,
  };

  icon = () => {
    const { icon } = this.props;
    let returnIcon;

    if (icon) {
      returnIcon = (
        <span className="lab-tag__left-icon">
          <Icon type={icon} color="black75" size="petit" />
        </span>
      );
    }

    return returnIcon;
  };

  thumb = () => {
    const { thumbSrc, thumbAlt } = this.props;
    let returnThumb;

    if (thumbSrc) {
      returnThumb = (
        <img className="lab-tag__thumb" src={thumbSrc}/>
      );
    }

    return returnThumb;
  };

  dropdownIcon = () => {
    const { dropdown } = this.props;
    let returnDropdownIcon;

    if (dropdown) {
      returnDropdownIcon = (
        <span className="lab-tag__right-icon lab-tag__right-icon--dropdown">
          <Icon type="dropdown-closed" color="black75" size="petit" />
        </span>
      );
    }

    return returnDropdownIcon;
  };

  removeIcon = () => {
    const { removable } = this.props;
    let returnRemoveIcon;

    if (removable) {
      returnRemoveIcon = (
        <span className="lab-tag__right-icon lab-tag__right-icon--remove">
          <Icon type="remove" color="black75" size="petit" />
        </span>
      );
    }

    return returnRemoveIcon;
  };

  render() {
    const {
      children,
      type,
      dropdown,
      removable,
      disabled,
      icon,
      thumbSrc,
      outline,
      colorStyle,
      color,
    } = this.props;
    return (
      <span
        className={ `lab-tag` +
          `${type === "togglable" ? ` lab-tag__togglable lab-tag__skin-soft` : ` lab-tag__skin-${colorStyle}`}` +
          `${removable ? ` lab-tag--has-right-icon` : ""}` +
          `${dropdown ? ` lab-tag--has-right-icon` : ""}` +
          `${disabled ? " lab-tag--disabled" : ""}` +
          `${outline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${colorStyle}` : ""}` +
          `${icon ? ` lab-tag--has-left-icon` : ""}` +
          `${thumbSrc ? ` lab-tag--has-thumb` : ""}`
        }
      >
        {this.thumb()}
        {this.icon()}
        {children}
        {this.dropdownIcon()}
        {this.removeIcon()}
      </span>
    );
  }
}
