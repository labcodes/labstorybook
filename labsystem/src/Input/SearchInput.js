import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";
import AbstractTextInput from "./AbstractTextInput";


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
          <AbstractTextInput  placeholder="Search input" disabled={disabled} >
            <button type="button" className="searchButton" disabled={disabled} >
                <Icon type='lupe' color='white' />
            </button>
            <span className= "search-separator" />
          </AbstractTextInput>
        </div>
    );
  }
}
