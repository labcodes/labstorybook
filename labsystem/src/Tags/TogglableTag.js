import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    selected: PropTypes.bool,
  };

  static defaultProps = {
    color: "",
    outline: false,
    disabled: false,
    selected: false,
  };

  constructor(props) {
    super(props);
    const { selected } = this.props;
    this.state = {
      isSelected: selected,
    };
  }

  onClick = () => {
    const { isSelected } = this.state;
    this.setState({ isSelected: !isSelected });
  };

  render() {
    const { text, color, outline, disabled } = this.props;
    const { isSelected } = this.state;
    return (
      <AbstractTag
        togglable
        text={text}
        color={color}
        outline={outline}
        disabled={disabled}
        onClick={this.onClick}
        skin={isSelected ? "vivid" : "pale"}
        icon={isSelected ? "check" : ""}
      />
    );
  }
}
