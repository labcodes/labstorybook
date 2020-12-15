import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class DropdownTag extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Tag. */
    text: PropTypes.string.isRequired,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Color of the rendered Tag. */
    color: PropTypes.string,
    /** Skin of the the rendered Tag. */
    skin: PropTypes.string,
    /** Defines if the Tag has an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Callback to be executed when the Tag is clicked. */
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
      <Icon
        type={icon}
        color="black-75"
        size="petit"
        className="lab-tag--left-icon"
      />
    ) : undefined;
  };

  dropdownIcon = () => (
    <span className="lab-tag__dropdown-icon-wrapper">
      <Icon
        type="dropdown-closed"
        color="black-75"
        size="petit"
        className="lab-tag--dropdown-icon"
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
        className={`lab-tag--dropdown${`${
          icon ? ` lab-tag--has-left-icon` : ""
        }`}`}
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
