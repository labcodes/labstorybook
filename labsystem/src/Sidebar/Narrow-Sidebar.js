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
    const { 
      children,
      vivid,
      color,
      withScroll,
     } = this.props;
    return (
      <div  
        className={
          `lab-narrow-sidebar`+
          `${vivid ? ` lab-narrow-sidebar--vivid lab-narrow-sidebar--vivid--${color}` : ` ""`}`+
          `${withScroll ? ` lab-narrow-sidebar--with-scroll` : ` ""`}`
        }
      >
        {children}
        <div className="lab-narrow-sidebar__trigger">
          <button className="sidebar-trigger">
            <Icon  type="menu-expand" color="white" />
          </button>
        </div>
      </div>
    );  
  }
}
