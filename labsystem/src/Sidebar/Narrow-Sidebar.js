import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    vivid: PropTypes.bool,
    color: PropTypes.string,
    withScroll: PropTypes.bool,
  };

  static defaultProps = {
    children: undefined,
    vivid: false,
    color: "",
    withScroll: false,
  };

  render() {
    const { children, vivid, color, withScroll } = this.props;
    return (
      <React.Fragment>
        <div className="lab-narrow__overlay" />
        <div
          className={
            `lab-narrow-sidebar__mobile-topbar` +
            `${
              vivid
                ? ` lab-narrow-sidebar--vivid lab-narrow-sidebar--vivid--${color}`
                : ` ""`
            }`
          }
        >
          <button type="button" className="lab-narrow-sidebar__mobile-button">
            <Icon type="menu-expand" color="white" />
          </button>
        </div>
        <div
          className={
            `lab-narrow-sidebar` +
            `${
              vivid
                ? ` lab-narrow-sidebar--vivid lab-narrow-sidebar--vivid--${color}`
                : ` ""`
            }` +
            `${withScroll ? ` lab-narrow-sidebar--with-scroll` : ` ""`}`
          }
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}
