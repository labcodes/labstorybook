import React from "react";
import Icon from "../Icon";
import PropTypes from "prop-types";
import AbstractTextInput from "./AbstractTextInput";



export default class InlineSearch extends React.Component {
    static propTypes = {
      theme: PropTypes.string,
      className: PropTypes.string,
      placeholder: PropTypes.string,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      iconColor: PropTypes.string,
    };
    static defaultProps = {
      theme: undefined,
      className: undefined,
      placeholder: undefined,
      disabled: false,
      icon: undefined,
      iconColor: undefined
    };
    
    state = {
      inputValue: '',
    }
  
    render() {
      const {
        className,
        disabled,
        placeholder,
        ...rest
      } = this.props;
  
      const { inputValue } = this.state;

      return (
          <div className="search-input">
            <span className="search-icon">
              <Icon type='lupe' color='mineral70' />
            </span>
            <AbstractTextInput className="inline-search-input" placeholder="Search input" />
            <button className="remove-icon" onClick={this.handleButtonClick}>
              <Icon type='remove' color='mineral40' />
            </button>
          </div>
      );
    }   
}