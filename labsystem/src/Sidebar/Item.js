import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Item. */
    label: PropTypes.string.isRequired,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Callback to be executed when the Item is clicked. */
    onClick: PropTypes.func.isRequired,
    /** Defines if the current Item is the active one in the Sidebar. */
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
