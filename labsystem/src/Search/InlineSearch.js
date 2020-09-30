import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";
import Icon from "../Icon";

export default class StandardSearch extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  };

  static defaultProps = {
    placeholder: "Search",
    disabled: false,
    className: undefined,
  };

  render() {
    const { disabled, placeholder, className } = this.props;

    return (
      <div className={`search-input--inline ${className || ""}`}>
        <AbstractSearch
          placeholder={placeholder}
          disabled={disabled}
          icon="remove"
        >
          <Icon
            className="search-input__icon-lupe"
            type="lupe"
            color="mineral-40"
          />
        </AbstractSearch>
      </div>
    );
  }
}
