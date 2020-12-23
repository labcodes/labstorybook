/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

// Radio //

export default class Radio extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([string, number, bool]).isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
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
