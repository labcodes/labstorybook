import React from "react";
import PropTypes from "prop-types";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    skin: PropTypes.element,
    color: PropTypes.element,
  };

  static defaultProps = {
    children: undefined,
    skin: "pale",
    color: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar">{children}</div>;
  }
}
