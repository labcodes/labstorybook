import React from "react";
import PropTypes from "prop-types";

export default class Badge extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["floating-add", "harvest", "meta", "ponto", "star"])
      .isRequired,
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
    wrapperColor: PropTypes.oneOf([
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
