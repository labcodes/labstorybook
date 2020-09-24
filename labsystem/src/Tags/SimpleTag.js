import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import AbstractTag from "./AbstractTag";

export default class SimpleTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    isOutline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
    isDisabled: PropTypes.bool,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    isOutline: false,
    skin: "pale",
    color: "",
    isDisabled: false,
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

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
      isDisabled,
    } = this.props;
    return (
      <AbstractTag
        text={text}
        thumbSrc={thumbSrc}
        icon={icon}
        isOutline={isOutline}
        skin={skin}
        color={color}
        isDisabled={isDisabled}
      />
    );
  }
}
