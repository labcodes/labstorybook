import React from "react";
import PropTypes from "prop-types";

import { NavbarWithDividersContext } from "./NarrowSidebar";

export default class Body extends React.Component {
  static propTypes = {
    /** Target component to which the Sidebar should be applied upon. */
    children: PropTypes.node,
  };

  static defaultProps = {
    children: undefined,
  };

  render() {
    const { children } = this.props;
    return (
      <NavbarWithDividersContext.Consumer>
        {(withDividers) => (
          <nav
            className={
              `lab-narrow-sidebar__body` +
              `${
                withDividers ? ` lab-narrow-sidebar__body--with-scroll` : ` ""`
              }`
            }
          >
            {children}
          </nav>
        )}
      </NavbarWithDividersContext.Consumer>
    );
  }
}
