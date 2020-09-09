import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import AbstractTag from "./AbstractTag";

export default class RemovableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    thumbSrc: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    skin: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    thumbSrc: "",
    icon: "",
    color: "",
    skin: "pale",
    outline: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

  onClick = () => {
    const { isOn } = this.state;
    this.setState({ isOn: !isOn });
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
    const { text, thumbSrc, icon, color, skin, outline, disabled } = this.props;
    return (
      <AbstractTag
        removable
        text={text}
        thumbSrc={thumbSrc}
        icon={icon}
        color={color}
        skin={skin}
        outline={outline}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}
