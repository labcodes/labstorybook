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


      </div>
    );
  }
}
