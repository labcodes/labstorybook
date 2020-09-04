import React from "react";
import AbstractTag from "./AbstractTag";

export default class TogglableTag extends React.Component {
  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <AbstractTag {...this.props} />;
  }
}
