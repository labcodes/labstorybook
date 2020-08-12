import React from "react";
import PropTypes from "prop-types";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    skin: PropTypes.oneOf(["light", "dark"]),
    color: PropTypes.oneOf(["mineral", "teal", "purple", "coral"]),
  };

  static defaultProps = {
    children: undefined,
    skin: undefined,
    color: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar">{children}</div>;
  }
}
