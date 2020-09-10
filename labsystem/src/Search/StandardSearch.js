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
    const {
      disabled,
      placeholder,
    } = this.props;

    return (
      <div className="search-input">
        <AbstractSearch placeholder={placeholder} disabled={disabled}>
          <button type="button" className="searchButton" disabled={disabled}>
            <Icon type="lupe" color="white" />
          </button>
          <span className="search-separator" />
        </AbstractSearch>
      </div>
    );
  }
}
