import React from "react";
import PropTypes from "prop-types";

export default class Badge extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["floating-add", "harvest", "meta", "ponto", "star"])
      .isRequired,
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
    ]).isRequired,
    wrapperColor: PropTypes.oneOf([
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
    ]).isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { type, color, wrapperColor, className } = this.props;
    return (
      <div className={`lab-badge__wrapper lab-badge__wrapper--${wrapperColor}`}>
        <span
          className={
            `lab-badge lab-badge--${color} lab-badge--${type}` +
            `${className ? ` lab-badge--${className}` : ""}`
          }
        />
      </div>
    );
  }
}
