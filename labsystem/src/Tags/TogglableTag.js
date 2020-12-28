import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class TogglableTag extends React.Component {
  static propTypes = {
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Sets Tag's color. */
    color: PropTypes.string,
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag component. */
    disabled: PropTypes.bool,
    /** Action to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
    /** Defines if the Tag is toggled on. */
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
