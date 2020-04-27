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
    color: PropTypes.oneOf(["teal", "mineral70", "mineral20"]).isRequired,
  };

  render() {
    const { type, color } = this.props;
    return <span className={`lab-icon ${color} ${type}`} />;
  }
}
