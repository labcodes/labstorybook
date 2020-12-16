import React from "react";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
  static propTypes = {
    /** Target component to which the Sidebar should be applied upon. */
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar__footer">{children}</div>;
  }
}
