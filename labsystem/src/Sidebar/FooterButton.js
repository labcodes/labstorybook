import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
  };

  static defaultProps = {
    label: undefined,
    icon: undefined,
  };

  buttonIcon = () => {
    const { icon } = this.props;
    return icon ? <Icon type={icon} className="sidebar-item" /> : "";
  };

  render() {
    const { label } = this.props;

    return (
      <React.Fragment>
        <button type="button" className="lab-narrow-sidebar__footer__button">
          {this.buttonIcon()}
          {label}
        </button>
      </React.Fragment>
    );
  }
}
