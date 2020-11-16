import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    icon: undefined,
    onClick: undefined,
  };

  handleClick = (e) => {
    const { onClick } = this.props;
    onClick(e);
  };

  render() {
    const { label, icon } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          className="lab-narrow-sidebar__footer-button"
          onClick={this.handleClick}
        >
          {icon ? (
            <Icon type={icon} className="lab-narrow-sidebar__footer-icon" />
          ) : null}
          {label}
        </button>
      </React.Fragment>
    );
  }
}
