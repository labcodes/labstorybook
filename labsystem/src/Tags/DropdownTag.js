import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

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
      />
    );
  }
}
