import React from "react";
import PropTypes from "prop-types";

export default class Logotype extends React.Component {
  static propTypes = {
    logoSrc: PropTypes.string,
    altText: PropTypes.string,
  };

  static defaultProps = {
    logoSrc: undefined,
    altText: undefined,
  };

  render() {
    const { logoSrc, altText } = this.props;
    return <div className="lab-narrow-sidebar__logo" />;
  }
}
