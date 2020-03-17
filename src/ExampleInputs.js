import React from 'react';
import PropTypes from 'prop-types';

export default class ExampleInputs extends React.Component {
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
      label
    } = this.props;
    return (
      <input
        className={`input ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        label={label}
      >
        {this.props.children}
      </input>
    )
  }
}
