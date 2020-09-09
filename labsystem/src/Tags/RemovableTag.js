import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class RemovableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    skin: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
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
  }

  onClick = () => {
    const { isOn } = this.state;
    this.setState({ isOn: !isOn });
  };

  render() {
    const { text, color, skin, outline, disabled } = this.props;
    return (
      <AbstractTag
        removable
        text={text}
        color={color}
        skin={skin}
        outline={outline}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}
