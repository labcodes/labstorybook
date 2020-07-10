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
    size: PropTypes.oneOf(["small", "tiny"]),
  };

  static defaultProps = {
    size: undefined,
  };

  render() {
    const { type, color } = this.props;
    return <span className={`lab-badge ${color} ${type}`} />;
  }
}
