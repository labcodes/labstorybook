import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    isVivid: PropTypes.bool,
    withDividers: PropTypes.bool,
  };

  static defaultProps = {
    children: undefined,
    isVivid: false,
    withDividers: false,
  };

  render() {
    const { children, isVivid, withDividers } = this.props;
    return (
      <React.Fragment>
        <div className="lab-narrow__overlay" />
        <div
          className={
            "lab-narrow-sidebar__mobile-topbar" +
            `${isVivid ? " lab-narrow-sidebar--vivid" : ` ""`}`
          }
        >
          <button type="button" className="lab-narrow-sidebar__mobile-button">
            <Icon type="menu-expand" color="white" />
          </button>
        </div>
        <div
          className={
            "lab-narrow-sidebar" +
            `${isVivid ? " lab-narrow-sidebar--vivid" : ""}` +
            `${withDividers ? " lab-narrow-sidebar--with-scroll" : ""}`
          }
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}
