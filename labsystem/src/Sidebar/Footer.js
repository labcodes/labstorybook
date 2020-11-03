import React from "react";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
  static propTypes = {
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
