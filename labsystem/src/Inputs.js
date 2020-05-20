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
      placeholder,
      type,
      label,
      disabled,
      value
    } = this.props;
    return (
      <input
        className={`input ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        label={label}
        disabled={disabled}
        value={value}
      >
        {this.props.children}
      </input>
    )
  }
}