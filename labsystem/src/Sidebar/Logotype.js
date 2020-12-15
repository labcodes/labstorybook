import React from "react";
import PropTypes from "prop-types";

export default class Logotype extends React.Component {
  static propTypes = {
    /** */
    logoSrc: PropTypes.string.isRequired,
    /** */
    altText: PropTypes.string.isRequired,
  };

  render() {
    const { logoSrc, altText } = this.props;
    return (
      <div className="lab-narrow-sidebar__logo">
        <img src={logoSrc} alt={altText} />
      </div>
    );
  }
}
