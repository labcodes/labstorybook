import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import AbstractTag from "./AbstractTag";

export default class SimpleTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    outline: PropTypes.bool,
    skin: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    outline: false,
    skin: "pale",
    color: "",
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
      "<SimpleTag> can't be initialized with both `thumb` and `icon` props.";
    const { thumbSrc, icon } = this.props;
    if (!isEmpty(thumbSrc) && !isEmpty(icon)) {
      throw Error(errorMessage);
    }
  }

  render() {
    const { text, thumbSrc, icon, outline, skin, color } = this.props;
    return (
      <AbstractTag
        text={text}
        thumbSrc={thumbSrc}
        icon={icon}
        outline={outline}
        skin={skin}
        color={color}
      />
    );
  }
}
