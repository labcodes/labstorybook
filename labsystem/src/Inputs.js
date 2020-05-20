import React from 'react';
import PropTypes from 'prop-types';

export default class Inputs extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'required', 'prefix', 'prefix-required'])
  }

  static defaultProps = {
    type: 'default'
  }

  render() {
    const {
      autocomplete,
      className,
      id,
      type,
      label,
      disabled,
      value,
      icon,
      iconColor
    } = this.props;
    return (
      <div className="input__wrapper">
        <input
          className={`input ${className}`}
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          value={value} />
        <label for={id}>{label}</label>
      </div>
    )
  }
}