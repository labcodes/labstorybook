import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";

export default class StandardSearch extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string,
    /** Defines a default value for the Search initialization. */
    defaultValue: PropTypes.string,
    /** Sets the text input to disabled, refusing interactions. */
    disabled: PropTypes.bool,
    /** Text that will be rendered inside the Search field. */
    value: PropTypes.string,
    /** Callback action to be executed when the Search default value changes. */
    onChange: PropTypes.func,
    /** Callback to be executed when the search is performed. */
    onSearch: PropTypes.func,
    /** Callback to be executed when the Search is cleared out. */
    onClear: PropTypes.func,
    /** The placeholder text when the Search field is empty. */
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
      <div className="lab-standard-search">
        <AbstractSearch
          type="standard"
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
