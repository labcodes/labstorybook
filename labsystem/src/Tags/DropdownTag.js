import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class DropdownTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
    color: PropTypes.string,
    skin: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    icon: "",
    color: "",
    skin: "pale",
    outline: false,
    disabled: false,
    onClick: () => {},
  };

  render() {
    const { text, icon, color, skin, outline, disabled, onClick } = this.props;
    return (
      <AbstractTag
        isDropdown
        text={text}
        icon={icon}
        color={color}
        skin={skin}
        outline={outline}
        disabled={disabled}
        onClick={onClick}
      />
    );
  }
}
