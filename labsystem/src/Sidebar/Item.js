import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    /** */
    label: PropTypes.string.isRequired,
    /** */
    icon: PropTypes.string,
    /** */
    onClick: PropTypes.func.isRequired,
    /** */
    isActive: PropTypes.bool,
  };

  static defaultProps = {
    icon: undefined,
    isActive: false,
  };

  render() {
    const { label, icon, isActive, onClick } = this.props;

    return (
      <button
        type="button"
        className={`lab-narrow-sidebar__item${
          isActive ? " lab-narrow-sidebar__item--active" : ""
        }`}
        onClick={onClick}
      >
        {icon ? (
          <Icon
            type={icon}
            color="mineral-60"
            className="lab-narrow-sidebar__item-icon"
          />
        ) : null}
        <span className="lab-narrow-sidebar__item-label">{label}</span>
      </button>
    );
  }
}
