import React from "react";
import PropTypes from "prop-types";

export default class Item extends React.Component {
  static propTypes = {
    icon: PropTypes.oneOf([]), // break the component if both icon and flagColor are passed
    flagColor: PropTypes.oneOf([]),
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
  }

  render() {
    const { isHighlighted, label, onClick, disabled } = this.props;

    return (
      <div
        className="dropdown__item"
        onClick={!disabled ? onClick : () => {}}
        className={isHighlighted ? "dropdown__item--highlighted" : null }
      >
        {label}
      </div>
    );
  }
}
