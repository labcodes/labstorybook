import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import AbstractTag from "./AbstractTag";
import Icon from "../Icon";

export default class SimpleTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    isOutline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    isOutline: false,
    skin: "pale",
    color: "",
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

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
      "`SimpleTag` can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw new Error(errorMessage);
    }
  }

  render() {
    const {
      text,
      thumbSrc,
      icon,
      isOutline,
      skin,
      color,
      disabled,
    } = this.props;
    return (
      <AbstractTag
        text={text}
        className={`${icon ? ` lab-tag--has-left-icon` : ""}${
          thumbSrc ? ` lab-tag--has-thumb` : ""
        }`}
        isOutline={isOutline}
        skin={skin}
        color={color}
        disabled={disabled}
        renderPrefix={this.icon() || this.thumb()}
      />
    );
  }
}
