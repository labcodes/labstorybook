import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class AbstractTag extends React.Component {
  static propTypes = {
    /** Tag's left element (optional and customizable) */
    renderPrefix: PropTypes.object,
    /** Components to be rendered at the end of the Tag. */
    renderSuffix: PropTypes.object,
    /** HTML tabIndex, used to avoid Tag from being selected with TAB key, if "-1". */
    tabIndex: PropTypes.string,
    /** Defines a class name to create a custom style for the component. */
    className: PropTypes.string,
    /** Text that will be rendered inside the Tag. */
    text: PropTypes.string.isRequired,
    /** Color of the rendered Tag. */
    color: PropTypes.string,
    /** Skin of the the rendered Tag. */
    skin: PropTypes.string,
    /** Defines if the Tag has an outline style. */
    isOutline: PropTypes.bool,
    /** Disables the Tag component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Callback to be executed when the Tag is clicked. */
    onClick: PropTypes.func,
  };

  static defaultProps = {
    renderPrefix: undefined,
    renderSuffix: undefined,
    tabIndex: "0",
    className: "",
    isOutline: false,
    color: "",
    skin: "pale",
    disabled: false,
    onClick: undefined,
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
      tabIndex,
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
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={tabIndex}
      >
        {renderPrefix}
        {text}
        {renderSuffix}
      </span>
    );
  }
}
