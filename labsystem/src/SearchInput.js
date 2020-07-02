import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

export default class DefaultSearch extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    type: PropTypes,
  };
  static defaultProps = {
    theme: undefined,
    className: undefined,
    placeholder: undefined,
    disabled: false,
    icon: undefined,
    iconColor: undefined
  };
  


  render() {
    const {
      className,
      disabled,
      icon,
      placeholder,
      iconColor,
      ...rest
    } = this.props;

    return (
        <div className="search-input">
          <input
            className={`search-input__field ${className || ""}`}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
          <span className= "search-separator" />
          <button type="button" className="searchButton" disabled={disabled}>
              <Icon type='lupe' color='mineral70' />
          </button>
        </div>
    );
  }
}
