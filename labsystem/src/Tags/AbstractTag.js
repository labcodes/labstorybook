import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class AbstractTag extends React.Component {
  static propTypes = {
    /** Tag's left element (optional and customizable) */
    renderPrefix: PropTypes.object,
    /** Components to be rendered at the end of the Tag. */
    renderSuffix: PropTypes.object,
    /** Defines a class name to create a custom style for the component. */
    className: PropTypes.string,
    /** This is the Tag's text. */
    text: PropTypes.string.isRequired,
    /** Sets Tag's color. */
    color: PropTypes.string,
    /** Skin of the the rendered Tag. */
    skin: PropTypes.string,
    /** Sets an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag component. */
    disabled: PropTypes.bool,
    /** Action to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    renderPrefix: undefined,
    renderSuffix: undefined,
    className: "",
    isOutline: false,
    color: "",
    skin: "pale",
    disabled: false,
    onClick: () => {},
  };

  handleEvent = (event) => {
    if ((event.keycode || event.which) === 32) {
      event.preventDefault();
    }
    const { onClick } = this.props;
    if (!isUndefined(onClick)) {
      onClick(event);
    }
  };

  render() {
    const {
      text,
      disabled,
      isOutline,
      skin,
      color,
      renderPrefix,
      renderSuffix,
      className,
    } = this.props;

    return (
      <span
        className={
          `lab-tag ${className}` +
          `${disabled ? ` lab-tag--disabled` : ""}` +
          `${isOutline ? ` lab-tag--outline` : ""}` +
          `${color ? ` lab-tag--${color}-${skin}` : ` lab-tag--${skin}`}`
        }
        onClick={this.handleEvent}
        onKeyPress={this.handleEvent}
        role="presentation"
      >
        {renderPrefix}
        {text}
        {renderSuffix}
      </span>
    );
  }
}
