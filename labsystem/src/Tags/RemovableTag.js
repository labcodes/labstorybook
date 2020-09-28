import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class RemovableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    skin: PropTypes.string,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    color: "",
    skin: "pale",
    isOutline: false,
    disabled: false,
    onClick: () => {},
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

  removeIcon = () => (
    <span className="lab-tag__remove-icon-wrapper">
      <Icon
        type="remove"
        color="black75"
        size="petit"
        className="remove-icon"
      />
    </span>
  );

  thumb = () => {
    const { thumbSrc } = this.props;
    return thumbSrc ? (
      <img className="lab-tag__thumb" src={thumbSrc} alt="" />
    ) : undefined;
  };

  icon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="black75" size="petit" className="left-icon" />
    ) : undefined;
  };

  checkThumbAndIcon() {
    const errorMessage =
      "`RemovableTag` can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw Error(errorMessage);
    }
  }

  render() {
    const {
      text,
      thumbSrc,
      icon,
      color,
      skin,
      isOutline,
      disabled,
      onClick,
    } = this.props;
    return (
      <AbstractTag
        className="lab-tag--removable"
        isRemovable
        text={text}
        thumbSrc={thumbSrc}
        icon={icon}
        color={color}
        skin={skin}
        isOutline={isOutline}
        disabled={disabled}
        onClick={onClick}
        renderPrefix={this.thumb() || this.icon()}
        renderSuffix={this.removeIcon()}
      />
    );
  }
}
