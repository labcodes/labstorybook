import React from "react";
import PropTypes from "prop-types";

export default class Tooltip extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf([
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-start",
      "left-start",
      "left",
      "left-end",
      "bottom",
      "bottom-end",
    ]).isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: "black",
  };

  render() {
    const { id, text, color, children, placement } = this.props;

    return (
      <span className="lab-tooltip">
        {children}
        <span
          className={`lab-tooltip__text lab-tooltip--${color} lab-tooltip--${placement}`}
          id={id}
        >
          {text}
        </span>
      </span>
    );
  }
}
