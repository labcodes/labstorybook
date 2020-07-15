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
      "arrow-fill-right",
      "arrow-fill-left",
      "chevron-right",
      "chevron-left",
      "menu-expand",
      "menu-collapse",
      "menu-default",
      "external",
      "wallet",
      "workspace",
    ]).isRequired,
    color: PropTypes.oneOf([
      "white",
      "black75",
      "mineral10",
      "mineral20",
      "mineral30",
      "mineral40",
      "mineral60",
      "mineral70",
      "mineral80",
      "mineral90",
      "teal40",
      "teal60",
      "teal70",
      "purple40",
      "purple60",
      "purple70",
    ]).isRequired,
    size: PropTypes.oneOf(["small", "petit"]),
    className: PropTypes.string,
  };

  static defaultProps = {
    size: undefined,
    className: undefined,
  };

  render() {
    const { type, color, size, className } = this.props;
    return (
      <span
<<<<<<< HEAD
        className={`lab-icon lab-icon--${type} lab-icon--${color} lab-icon--${size} ${className || ""}`}
=======
        className={
          `lab-icon lab-icon--${type} lab-icon--${color}` +
          `${size ? ` lab-icon--${size}` : ""}` +
          `${className ? ` lab-icon--${className}` : ""}`
        }
>>>>>>> b78ad56c6ad759bc58dd66dcdee6a61824546313
      />
    );
  }
}
