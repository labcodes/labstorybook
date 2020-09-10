import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";
import Icon from "../Icon";

export default class StandardSearch extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    placeholder: "Search",
    disabled: false,
  };

  render() {
    const { disabled, placeholder } = this.props;

    return (
      <div className="search-input">
        <AbstractSearch
          placeholder={placeholder}
          disabled={disabled}
          icon="remove"
        >
          <Icon className="inline-search-lupe" type="lupe" color="mineral40" />
        </AbstractSearch>
      </div>
    );
  }
}
