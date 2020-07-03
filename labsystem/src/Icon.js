import React from "react";
import PropTypes from "prop-types";

export default class Icon extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-top",
      "calendar",
      "coin",
      "collapse-closed",
      "collapse-open",
      "check",
      "dropdown-closed",
      "dropdown-open",
      "edit",
      "eye-closed",
      "eye-opened",
      "track",
      "key",
      "logout",
      "lupe",
      "minus",
      "plus",
      "reload",
      "remove",
      "sort",
      "trash",
      "upload",
    ]).isRequired,
    color: PropTypes.oneOf([
      "white",
      "teal40",
      "mineral70",
      "mineral20"
    ]).isRequired,
    size: PropTypes.oneOf(["small", "petit"]),
  };

  render() {
    const { type, color, size } = this.props;
    return <span className={`lab-icon ${type} lab-icon--${color} lab-icon--${size}`} />;
  }
}
