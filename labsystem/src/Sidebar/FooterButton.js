import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    iconColor:PropTypes.string,
    size: PropTypes.string
  };

  static defaultProps = {
    className: undefined,
    icon: undefined,
    iconColor:"mineral60",
  };

  buttonIcon = () => {
    const { icon, iconColor } = this.props;
    return icon ? (
      <Icon
        type={icon}
        color={iconColor}
        className="nome-da-classe"
      />
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
      <button className="lab-narrow-sidebar__footer--button" >
      {this.buttonIcon()}
      </button>
    </React.Fragment>
    );
  }
}