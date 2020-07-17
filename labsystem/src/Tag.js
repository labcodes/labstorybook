import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class Tag extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    chip: PropTypes.string,
    dropdown: PropTypes.string,
    removable: PropTypes.string,
    disabled: PropTypes.string,
    icon: PropTypes.string,
    thumbSrc: PropTypes.string,
    thumbAlt: PropTypes.string,
    style: PropTypes.string,
    colorStyle: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    children: undefined,
    type: undefined,
    icon: undefined,
    thumbSrc: undefined,
    style: "",
    colorStyle: "soft",
    color: "",
    removable: undefined,
    dropdown: undefined,
    disabled: undefined,
    chip: undefined,
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

  chip = () => {
    const { chipActive, chipActiveMulti } = this.props;
    let returnChip;

    if (chipActive) {
      returnChipActive = (
        <span className={
          `lab-tag__chip lab-tag__skin-intense`}>
        </span>
      );
    }

    if (chipActiveMulti) {
      returnChipActiveMulti = (
        <span className={
          `lab-tag__chip lab-tag__skin-intense lab-tag--has-left-icon`}>
          <Icon type="check" color="black75" size="petit" />
        </span>
      );
    }

    return returnChip;
  };

  render() {
    const {
      children,
      chip,
      dropdown,
      removable,
      disabled,
      icon,
      thumbSrc,
      style,
      colorStyle,
      color,
    } = this.props;
    return (
      <span
        className={
          `${chip ? ` lab-tag__chip lab-tag__skin-soft` : ` lab-tag lab-tag__skin-${colorStyle}`}` +
          `${removable ? ` lab-tag--has-right-icon` : ""}` +
          `${dropdown ? ` lab-tag--has-right-icon` : ""}` +
          `${disabled ? " lab-tag--disabled" : ""}` +
          `${style ? ` lab-tag--${style}` : ""}` +
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
