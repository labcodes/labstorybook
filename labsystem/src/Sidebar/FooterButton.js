import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class FooterButton extends React.Component {
  static propTypes = {
    /** Text that will be rendered inside the Button. */
    label: PropTypes.string.isRequired,
    /** Type of the icon to be rendered. Won't render an icon if not passed to the component. */
    icon: PropTypes.string,
    /** Callback to be executed when the FooterButton is clicked. */
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
