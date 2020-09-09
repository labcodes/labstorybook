import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: "",
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
    const { text, color } = this.props;
    const { isOn } = this.state;
    return (
      <AbstractTag
        togglable
        text={text}
        color={color}
        onClick={this.onClick}
        skin={isOn ? "pale" : "vivid"}
      />
    );
  }
}
