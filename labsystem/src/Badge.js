import React from "react";
import PropTypes from "prop-types";

export default class Badge extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(["floating-add", "harvest", "meta", "ponto", "star"])
      .isRequired,
    color: PropTypes.oneOf(["teal", "mineral70", "mineral20"]).isRequired
  };

  render() {
    const { type, color } = this.props;
    return <span className={`lab-badge ${color} ${type}`} />;
  }
}
