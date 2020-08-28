import React from "react";

export default class Tooltip extends React.Component {
  render() {
    const { id, text, color } = this.props;

    return (
      <div className={`lab-tooltip lab-tooltip--${color}`} id={id}>
        {text}
      </div>
    );
  }
}
