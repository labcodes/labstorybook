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
      <div className={`lab-standard-search ${className || ""}`}>
        <AbstractSearch
          placeholder={placeholder}
          disabled={disabled}
          icon="remove"
        >
          <React.Fragment>
            <button
              type="button"
              className="lab-standard-search__button"
              disabled={disabled}
            >
              <Icon
                className="lab-standard-search__icon"
                type="lupe"
                color="white"
              />
            </button>
            <span className="lab-standard-search__separator" />
          </React.Fragment>
        </AbstractSearch>
      </div>
    );
  }
}
