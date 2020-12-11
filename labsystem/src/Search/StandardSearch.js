import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";

export default class StandardSearch extends React.Component {
  static propTypes = {
    /** */
    id: PropTypes.string,
    /** */
    defaultValue: PropTypes.string,
    /** */
    disabled: PropTypes.bool,
    /** */
    value: PropTypes.string,
    /** */
    onChange: PropTypes.func,
    /** */
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
