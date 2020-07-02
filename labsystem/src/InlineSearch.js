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
    
    // searchIcon = () => {
    //   const { icon, iconColor } = this.props;
    //   return (icon ? (
    //     <span className="search-icon">
    //       <Icon type={icon} color={iconColor} />
    //     </span>
    //   ) : "")
    // };
  
    // lupe = () => {
    //   const { icon, iconColor } = this.props;
    //   return (icon ? (
    //     <span className="search-icon">
    //       <Icon type='lupe' color='mineral70' />
    //     </span>
    //   ) : "")
    // };
  
  
  
    render() {
      const {
        className,
        disabled,
        placeholder,
        ...rest
      } = this.props;
  
      return (
        <div className="search-input" >
          <span className="search-icon">
            <Icon type='lupe' color='mineral70' />
          </span>
          <input
            className={`search-input__field`}
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
            <button className="remove-icon">
            <Icon type='remove' color='mineral20' />
          </button>
  
        </div>
      );
    }   
}