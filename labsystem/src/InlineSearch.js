import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";
import Input from "./Input";



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

    handleOnChange = (evt) => {
      this.setState({ value: evt.target.value })
    }

    handleOnChange = (newValue) => {
      this.setState({ value: newValue })
    }
    
    handleButtonClick = (evt) => {
      this.setState({ inputValue: ''})
    };
  
    render() {
      const {
        className,
        disabled,
        placeholder,
        ...rest
      } = this.props;
  
      const { inputValue } = this.state;

      return (
          <div className="search-input" >
            <span className="search-icon">
              <Icon type='lupe' color='mineral70' />
            </span>
            {/* <input
              value={value}
              className={`search-input__field`}
              type="text"
              placeholder={placeholder}
              disabled={disabled}
              onChange={this.handleOnChange}
              {...rest}
            /> */}
            <Input className="inline-search-input" value={this.state.value} placeholder="Search input" onChange={this.handleOnChange} />
            <button className="remove-icon" onClick={this.handleButtonClick}>
              <Icon type='remove' color='mineral20' />
            </button>
          </div>
      );
    }   
}