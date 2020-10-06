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
      "star",
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
      "black-75",
      "mineral-10",
      "mineral-20",
      "mineral-30",
      "mineral-40",
      "mineral-60",
      "mineral-70",
      "mineral-80",
      "mineral-90",
      "teal-40",
      "teal-60",
      "teal-70",
      "purple-40",
      "purple-60",
      "purple-70",
    ]),
    size: PropTypes.oneOf(["small", "petit"]),
    className: PropTypes.string,
  };

  static defaultProps = {
    color: undefined,
    size: undefined,
    className: undefined,
  };

  render() {
    const { type, color, size, className } = this.props;
    return (
      <span
        className={
          `lab-icon lab-icon--${type} lab-icon--${color}` +
          `${size ? ` lab-icon--${size}` : ""}` +
          `${className ? ` ${className}` : ""}`
        }
      />
    );
  }
}
