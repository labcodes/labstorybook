import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class DropdownTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    color: PropTypes.string,
    skin: PropTypes.string,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    icon: "",
    color: "",
    skin: "pale",
    isOutline: false,
    disabled: false,
    onClick: () => {},
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="black75" size="petit" className="left-icon" />
    ) : undefined;
  };

  dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon
        type="dropdown-closed"
        color="black75"
        size="petit"
        className="dropdown-icon"
      />
    </span>
  );

  render() {
    const {
      text,
      icon,
      color,
      skin,
      isOutline,
      disabled,
      onClick,
    } = this.props;
    return (
      <AbstractTag
        isDropdown
        text={text}
        icon={icon}
        color={color}
        skin={skin}
        isOutline={isOutline}
        disabled={disabled}
        onClick={onClick}
        renderPrefix={this.icon()}
        renderSuffix={this.dropdownIcon()}
      />
    );
  }
}
