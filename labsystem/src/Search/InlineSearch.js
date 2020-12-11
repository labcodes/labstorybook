import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";

export default class InlineSearch extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string,
    /** Defines a default value for the Search initialization. */
    defaultValue: PropTypes.string,
    /** Disables the Search component, including functionality and style. */
    disabled: PropTypes.bool,
    /** */
    value: PropTypes.string,
    /** Callback to be executed when the Search current value changes. */
    onChange: PropTypes.func,
    /** Callback to be executed when the search is performed. */
    onSearch: PropTypes.func,
    /** */
    onClear: PropTypes.func,
    /** */
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    id: undefined,
    defaultValue: undefined,
    disabled: false,
    value: undefined,
    onChange: undefined,
    onSearch: undefined,
    onClear: undefined,
    placeholder: "Search",
  };

  render() {
    const {
      id,
      defaultValue,
      disabled,
      value,
      onChange,
      onSearch,
      onClear,
      placeholder,
    } = this.props;

    return (
      <div className="lab-inline-search">
        <AbstractSearch
          type="inline"
          id={id}
          defaultValue={defaultValue}
          value={value}
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
