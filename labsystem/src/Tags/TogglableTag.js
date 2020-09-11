import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    color: "",
    outline: false,
    disabled: false,
    selected: false,
    onClick: () => {},
  };

  render() {
    const { text, color, outline, disabled, selected, onClick } = this.props;
    return (
      <AbstractTag
        togglable
        text={text}
        color={color}
        outline={outline}
        disabled={disabled}
        onClick={onClick}
        skin={selected ? "vivid" : "pale"}
        icon={selected ? "check" : ""}
      />
    );
  }
}
