import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

export default class Item extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOf([
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-top",
      "calendar",
      "coin",
      "collapse-closed",
      "collapse-open",
      "check",
      "dropdown-closed",
      "dropdown-open",
      "edit",
      "eye-closed",
      "eye-opened",
      "track",
      "key",
      "logout",
      "lupe",
      "minus",
      "plus",
      "reload",
      "remove",
      "sort",
      "star",
      "trash",
      "upload",
      "arrow-fill-right",
      "arrow-fill-left",
      "chevron-right",
      "chevron-left",
      "menu-expand",
      "menu-collapse",
      "menu-default",
      "external",
      "wallet",
      "workspace",
    ]), // break the component if both icon and flagColor are passed
    flagColor: PropTypes.oneOf([
      "mineral",
      "teal",
      "purple",
      "green",
      "red",
      "yellow",
      "cyan",
      "orange",
      "pink",
    ]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isHighlighted: PropTypes.bool,
    disabled: PropTypes.bool,
    isDestructive: PropTypes.bool, // requires an icon (adds warning)
    isConfirmation: PropTypes.bool, //requires an icon (adds warning)
  };

  static defaultProps = {
    icon: undefined,
    flagColor: undefined,
    isHighlighted: false,
    disabled: false,
    isDestructive: false,
    isConfirmation: false,
  };

  constructor(props) {
    super(props);
    const { icon, flagColor, isDestructive, isConfirmation } = props;
    if (icon && flagColor) {
      console.error(
        "A Dropdown Item cannot receive both 'icon' and 'flagColor' props at the same time."
      );
    }

    if ((isDestructive && !icon) || (isConfirmation && !icon)) {
      console.warn(
        "Destructive or Confirmation dropdown items require an icon"
      );
    }
  }

  render() {
    const {
      icon,
      flagColor,
      isHighlighted,
      label,
      onClick,
      disabled,
      isDestructive,
      isConfirmation,
    } = this.props;

    // We must evaluate if this is the best way of dealing with invalid input of icon and flagColor at the same time
    if (icon && flagColor) {
      return null;
    }

    return (
      <div
        onClick={!disabled ? onClick : () => {}}
        className={
          "dropdown__item" +
          (isHighlighted ? " dropdown__item--highlighted" : "") +
          (isConfirmation ? " dropdown__item--is-confirmation" : "") +
          (isDestructive ? " dropdown__item--is-destructive" : "") +
          (disabled ? " dropdown__item--disabled" : "")
        }
      >
        {icon ? <Icon type={icon} /> : null}
        {flagColor ? (
          <span className={`dropdown__item--${flagColor}-flag`} />
        ) : null}
        {label}
      </div>
    );
  }
}
