import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.string,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    label: undefined,
    icon: undefined,
    onClick: undefined,
    isActive: false,
  };

  handleClik = () => {
    const { onClick } = this.props;
    onClick();
  };

  itemIcon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon type={icon} color="mineral-60" className="sidebar-item" />
    ) : (
      ""
    );
  };

  render() {
    const { label, isActive } = this.props;

    return (
      <React.Fragment>
        <button
          type="button"
          className={`lab-narrow-sidebar__item${
            isActive ? " lab-narrow-sidebar__item--active" : ""
          }`}
          onClick={this.handleClik}
        >
          {this.itemIcon()}
          {label}
        </button>
      </React.Fragment>
    );
  }
}
