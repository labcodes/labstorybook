import React from "react";
import PropTypes from "prop-types";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    vivid: PropTypes.bool,
    color: PropTypes.string,
  };

  
  static defaultProps = {
    children: undefined,
    vivid: false,
    color: "",
  };



  render() {
    const { 
      children,
      vivid,
      color,
     } = this.props;
    return (
      <div 
        
        className={
          `lab-narrow-sidebar`+
          `${vivid ? ` lab-narrow-sidebar--vivid lab-narrow-sidebar--vivid--${color}` : ` ""`}`
        }
      >
        {children}
      </div>
    );  
  }
}
