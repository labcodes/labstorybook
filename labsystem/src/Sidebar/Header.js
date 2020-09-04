import React from "react";
import PropTypes from "prop-types";
import Collapse from "../Sidebar/CollapseButton";

export default class Header extends React.Component {
  static propTypes = {
    children: PropTypes.element,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar__header"> {children}</div>;
  }
}
