import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    withDividers: PropTypes.bool,
  };

  static defaultProps = {
    children: undefined,
    withDividers: false,
  };

  render() {
    const { children, withDividers } = this.props;
    return (
      <nav
        className={
          `lab-narrow-sidebar__body` +
          `${withDividers ? ` lab-narrow-sidebar__body--with-scroll` : ` ""`}`
        }
      >
        {" "}
        {children}
      </nav>
    );
  }
}
