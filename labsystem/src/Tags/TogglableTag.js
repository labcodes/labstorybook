import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool,
    isOn: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    color: "",
    isOutline: false,
    disabled: false,
    isOn: false,
    onClick: () => {},
  };

  selected = () => {
    const { isOn } = this.props;
    return isOn ? (
      <Icon type="check" color="black75" size="petit" className="check-icon" />
    ) : undefined;
  };

  render() {
    const { text, color, isOutline, disabled, isOn, onClick } = this.props;
    return (
      <AbstractTag
        className={`lab-tag--togglable${
          isOn ? " lab-tag--selected lab-tag--has-left-icon" : ""
        }`}
        text={text}
        color={color}
        isOutline={isOutline}
        disabled={disabled}
        onClick={onClick}
        skin={isOn ? "vivid" : "pale"}
        renderPrefix={this.selected()}
      />
    );
  }
}
