import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    label:PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.string,
  };

  static defaultProps = {
    label: undefined,
    className: undefined,
    icon: undefined,
  };

  buttonIcon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon
        type={icon}
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
      label,
    ...rest
   } = this.props;

   return (
    <React.Fragment>
      <button className="lab-narrow-sidebar__footer__button" >
      {this.buttonIcon()}
      {label}
      </button>
    </React.Fragment>
    );
  }
}