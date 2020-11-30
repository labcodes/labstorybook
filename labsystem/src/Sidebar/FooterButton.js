import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    icon: undefined,
  };

  render() {
    const { label, icon, onClick } = this.props;

    return (
      <button
        type="button"
        className="lab-narrow-sidebar__footer-button"
        onClick={onClick}
      >
        {icon ? (
          <Icon type={icon} className="lab-narrow-sidebar__footer-icon" />
        ) : null}
        <span className="lab-narrow-sidebar__footer-label">{label}</span>
      </button>
    );
  }
}
