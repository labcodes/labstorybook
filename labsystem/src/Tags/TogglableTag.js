import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class TogglableTag extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Tag. */
    text: PropTypes.string.isRequired,
    /** Color of the rendered Tag. */
    color: PropTypes.string,
    /** Defines if the Tag has an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Callback to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
    /** Defines if the Tag is switched on. */
    isOn: PropTypes.bool,
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
    let iconClass;

    if (isOn) {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-on";
    } else {
      iconClass = "lab-tag--check-icon lab-tag--check-icon-off";
    }

    return (
      <Icon type="check" color="black-75" size="petit" className={iconClass} />
    );
  };

  render() {
    const { text, color, isOutline, disabled, isOn, onClick } = this.props;
    return (
      <AbstractTag
        className={`lab-tag--togglable${isOn ? " lab-tag--selected" : ""}`}
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
