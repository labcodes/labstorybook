import React from "react";
import PropTypes from "prop-types";

import AbstractSearch from "./AbstractSearch";
import Icon from "../Icon";

export default class StandardSearch extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    icon: PropTypes.string,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
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
    onIconClick: undefined,
    children: undefined,
    placeholder: "Search",
  };

  render() {
    const { disabled, placeholder, className } = this.props;

    return (
      <div className={`lab-inline-search ${className || ""}`}>
        <AbstractSearch
          placeholder={placeholder}
          disabled={disabled}
          icon="remove"
        >
          <Icon
            className="lab-inline-search__icon"
            type="lupe"
            color="mineral-40"
          />
        </AbstractSearch>
      </div>
    );
  }
}
