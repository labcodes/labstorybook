import React from "react";

export default class Tooltip extends React.Component {
  render() {
    const { text, color } = this.props;

    return <div className={`lab-tooltip lab-tooltip--${color}`}>{text}</div>;
  }
}
