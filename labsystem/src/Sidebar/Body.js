import React from "react";
import PropTypes from "prop-types";

export default class Body extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    withScroll: PropTypes.bool,
    
  };

  static defaultProps = {
    children: undefined,
    className: undefined,
    withScroll: false,
  };

  render() {
    const { children, className, withScroll } = this.props;
    return (
    <nav 
    className={
      `lab-narrow-sidebar__body`+
      `${withScroll ? ` lab-narrow-sidebar__body--with-scroll` : ` ""`}`
    }
    > {children}
    </nav>
    );  
  }
}
