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
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyUp: PropTypes.func,
  };

  static defaultProps = {
    icon: "",
    color: "",
    skin: "pale",
    isOutline: false,
    disabled: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyUp: () => {},
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
      onFocus,
      onBlur,
      onKeyUp,
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
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        renderPrefix={this.icon()}
        renderSuffix={this.dropdownIcon()}
      />
    );
  }
}
