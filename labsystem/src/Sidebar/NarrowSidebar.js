import React from "react";
import PropTypes from "prop-types";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isOpenOnMobile: PropTypes.bool,
    isVivid: PropTypes.bool,
    withDividers: PropTypes.bool,
  };

  static defaultProps = {
    isVivid: false,
    isOpenOnMobile: false,
    withDividers: false,
  };

  render() {
    const { children, isOpenOnMobile, isVivid, withDividers } = this.props;
    return (
      <div
        className={`lab-narrow-sidebar
          ${isVivid ? " lab-narrow-sidebar--vivid" : ""}
          ${withDividers ? " lab-narrow-sidebar--with-dividers" : ""}
          ${isOpenOnMobile ? " lab-narrow-sidebar--open-on-mobile" : ""}
          `}
      >
        {children}
      </div>
    );
  }
}
