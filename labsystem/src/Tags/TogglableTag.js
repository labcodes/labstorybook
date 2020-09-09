import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    color: "",
    outline: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  onClick = () => {
    const { selected } = this.state;
    this.setState({ selected: !selected });
  };

  render() {
    const { text, color, outline, disabled } = this.props;
    const { selected } = this.state;
    return (
      <AbstractTag
        togglable
        text={text}
        color={color}
        outline={outline}
        disabled={disabled}
        onClick={this.onClick}
        skin={selected ? "vivid" : "pale"}
      />
    );
  }
}
