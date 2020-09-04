import React from "react";
import PropTypes from "prop-types";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  onClick = () => {
    const { text } = this.props;
    // eslint-disable-next-line no-alert
    alert(text);
  };

  render() {
    const { text } = this.props;
    return (
      <AbstractTag
        togglable
        text={text}
        onClick={this.onClick}
        {...this.props}
      />
    );
  }
}
