import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Tag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    dropdown: PropTypes.bool,
    removable: PropTypes.bool,
    disabled: PropTypes.bool,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    outline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    type: undefined,
    dropdown: false,
    removable: false,
    thumbSrc: "",
    icon: "",
    outline: false,
    skin: "pale",
    color: "",
    disabled: false,
    selected: false,
  };

  thumb = () => {
    const { thumbSrc } = this.props;
    let returnThumb;

    if (thumbSrc) {
      returnThumb = <img className="lab-tag__thumb" src={thumbSrc} alt="" />;
    }

    return returnThumb;
  };

  icon = () => {
    const { icon } = this.props;
    let returnIcon;

    if (icon) {
      returnIcon = (
        <Icon type={icon} color="black75" size="petit" className="left-icon" />
      );
    }

    return returnIcon;
  };

  selected = () => {
    const { selected } = this.props;
    let selectedIcon;

    if (selected) {
      selectedIcon = (
        <Icon
          type="check"
          color="black75"
          size="petit"
          className="check-icon"
        />
      );
    }

    return selectedIcon;
  };

  dropdownIcon = () => {
    const { dropdown } = this.props;
    let returnDropdownIcon;

    if (dropdown) {
      returnDropdownIcon = (
        <span className="lab-tag__dropdown-icon-wrapper">
          <Icon
            type="dropdown-closed"
            color="black75"
            size="petit"
            className="dropdown-icon"
          />
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
        <span className="lab-tag__remove-icon-wrapper">
          <Icon
            type="remove"
            color="black75"
            size="petit"
            className="remove-icon"
          />
        </span>
      );
    }

    return returnRemoveIcon;
  };

  render() {
    const {
      text,
      type,
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
          `${type === "togglable" ? ` lab-tag--togglable` : ``}` +
          `${removable ? ` lab-tag--removable` : ""}` +
          `${dropdown ? ` lab-tag--dropdown` : ""}` +
          `${disabled ? ` lab-tag--disabled` : ""}` +
          `${outline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}` +
          `${icon ? ` lab-tag--has-left-icon` : ""}` +
          `${selected ? ` lab-tag--selected` : ""}` +
          `${thumbSrc ? ` lab-tag--has-thumb` : ""}`
        }
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
