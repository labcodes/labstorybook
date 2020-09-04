import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Collapse extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    iconColor:PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
    icon: "menu-collapse",
    iconColor:"teal60",
  };

  CollapseIcon = () => {
    const { icon, iconColor} = this.props;
    return icon ? (
      <Icon type={icon} color={iconColor} className="sidebar-item" /> 
    ) : (
      ""
    );
  };

  render() {
    const { 
      className,
      icon, 
      iconColor,
    ...rest
   } = this.props;

   return (
    <React.Fragment>
      <button href="#" className="lab-narrow-sidebar__collapse" >
      {this.CollapseIcon()}
      </button>
    </React.Fragment>
    );
  }
}