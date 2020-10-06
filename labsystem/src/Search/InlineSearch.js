import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";

export default class InlineSearch extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    icon: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    placeholder: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    id: undefined,
    defaultValue: undefined,
    className: undefined,
    disabled: false,
    value: undefined,
    icon: undefined,
    onChange: undefined,
    onSearch: undefined,
    onClear: undefined,
    children: undefined,
    placeholder: "Search",
  };

  render() {
    const {
      id,
      defaultValue,
      className,
      disabled,
      value,
      onChange,
      onSearch,
      onClear,
      placeholder,
    } = this.props;

    return (
      <div className={`lab-inline-search ${className || ""}`}>
        <AbstractSearch
          type="inline"
          id={id}
          defaultValue={defaultValue}
          className={className}
          value={value}
          icon="remove"
          onChange={onChange}
          onSearch={onSearch}
          onClear={onClear}
          placeholder={placeholder}
          {...(disabled ? { disabled } : undefined)}
        />
      </div>
    );
  }
}
