import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    label:PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
    iconColor:PropTypes.string,
  };

  static defaultProps = {
    label: undefined,
    className: undefined,
    icon: undefined,
    iconColor:"mineral60",
  };

  itemIcon = () => {
    const { icon, iconColor} = this.props;
    return icon ? (
      <Icon type={icon} color={iconColor} className="nome-da-classe" /> 
    ) : (
      ""
    );
  };

  render() {
    const { 
      className,
      icon, 
      label, 
      iconColor,
    ...rest
   } = this.props;

   return (
    <React.Fragment>
      <button href="#" className="lab-narrow-sidebar__item" >
      {this.itemIcon()}
      {label}
      </button>
    </React.Fragment>
    );
  }
}