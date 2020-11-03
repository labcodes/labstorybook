import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    label: undefined,
    icon: undefined,
    onClick: () => {},
    isActive: false,
  };

  handleClick = (e) => {
    const { onClick } = this.props;
    onClick(e);
  };

  itemIcon = () => {
    const { icon } = this.props;
    return icon ? (
      <Icon
        type={icon}
        color="mineral-60"
        className="lab-narrow-sidebar__item-icon"
      />
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
          onClick={this.handleClick}
        >
          {this.itemIcon()}
          {label}
        </button>
      </React.Fragment>
    );
  }
}
