import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return <div className="lab-narrow-sidebar__body"> {children}</div>;
  }
}
