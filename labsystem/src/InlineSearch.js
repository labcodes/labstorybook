import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";


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
      teste: 'teste',
    }
  
    handleOnChange = ( {newValue} ) => {
      console.warn(newValue);
      this.setState({ teste: newValue })
    }

    handleButtonClick = () => {
      console.warn("handleButtonClick");
    };

    render() {
      const {
        className,
        disabled,
        placeholder,
        ...rest
      } = this.props;
  
      const { teste } = this.state;

      return (
        <div>
          <div className="search-input" >
            <span className="search-icon">
              <Icon type='lupe' color='mineral70' />
            </span>
            <input
              value={teste}
              className={`search-input__field`}
              type="text"
              placeholder={placeholder}
              disabled={disabled}
              onChange={this.handleOnChange}
              {...rest}
            />
            <button className="remove-icon" disabled={disabled} onClick={this.handleButtonClick}>
              <Icon type='remove' color='mineral20' />
            </button>
          </div>
          <p><strong>Input value: </strong>{this.state.teste}</p>
        </div>
      );
    }   
}