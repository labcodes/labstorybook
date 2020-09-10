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
  };

  static defaultProps = {
    icon: "",
    color: "",
    skin: "pale",
    outline: false,
    disabled: false,
  };

  render() {
    const { text, icon, color, skin, outline, disabled } = this.props;
    return (
      <AbstractTag
        dropdown
        text={text}
        icon={icon}
        color={color}
        skin={skin}
        outline={outline}
        disabled={disabled}
      />
    );
  }
}
