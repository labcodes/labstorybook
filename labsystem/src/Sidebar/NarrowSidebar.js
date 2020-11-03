import React from "react";
import PropTypes from "prop-types";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isCollapsed: PropTypes.bool,
    isVivid: PropTypes.bool,
    withDividers: PropTypes.bool,
  };

  static defaultProps = {
    isVivid: false,
    isCollapsed: false,
    withDividers: false,
  };

  render() {
    const { children, isCollapsed, isVivid, withDividers } = this.props;
    return (
      <div
        className={`lab-narrow-sidebar
          ${isVivid ? " lab-narrow-sidebar--vivid" : ""}
          ${withDividers ? " lab-narrow-sidebar--with-scroll" : ""}
          ${isCollapsed ? " lab-narrow-sidebar--collapsed" : ""}
          `}
      >
        {children}
      </div>
    );
  }
}
