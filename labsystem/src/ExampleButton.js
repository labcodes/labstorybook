import React from "react";
import PropTypes from "prop-types";

export default class ExampleButton extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "danger",
      "success"
    ]),
    children: PropTypes.array
  };

  static defaultProps = {
    type: "primary",
    children: []
  };

  render() {
    return (
      <button type="button" className={`button ${this.props.type}`}>
        {this.props.children}
      </button>
    );
  }
}
