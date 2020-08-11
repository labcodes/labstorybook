import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
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
    return (
      <div className="lab-narrow-sidebar__header">
        <div className="lab-narrow-sidebar__logo" />
        {/* <img className="lab-narrow-sidebar__logo" src={logoSrc} alt={altText} /> */}
      </div>
    );
  }
}
