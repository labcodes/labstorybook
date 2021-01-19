/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

// Radio //

export default class Radio extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** Text that will specify the HTML `name` attribute of an `<input>` element. It's used to group a set of Radios. */
    name: PropTypes.string.isRequired,
    /** Text that will be rendered as the Radio's label. */
    label: PropTypes.string.isRequired,
    /** Disables the Input component. */
    disabled: PropTypes.bool,
    /** Defines if the Radio is currently checked. */
    checked: PropTypes.bool,
    /** Defines if the Radio is initialized as "checked". */
    defaultChecked: PropTypes.bool,
    /** Callback action to be executed when the Radio current value changes. */
    onChange: PropTypes.func,
    /** Value that will specify the HTML `value` attribute of an `<input>` element. */
    value: PropTypes.oneOfType([string, number, bool]).isRequired,
    /** Add a class name to make custom changes */
    className: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    checked: undefined,
    className: undefined,
    onChange: () => {},
  };

  handleOnChange = (event) => {
    const { onChange } = this.props;
    if (!isUndefined(onChange)) {
      onChange(event);
    }
  };

  render() {
    const { className, id, label, disabled, checked, name, value } = this.props;

    return (
      <React.Fragment>
        <input
          className={`lab-radio ${className || ""}`}
          type="radio"
          id={id}
          checked={checked}
          name={name}
          value={value}
          onChange={this.handleOnChange}
          {...(disabled ? { disabled } : undefined)}
        />
        <label className="lab-radio__label" htmlFor={id}>
          <span className="lab-radio__container" />
          {label}
        </label>
      </React.Fragment>
    );
  }
}
