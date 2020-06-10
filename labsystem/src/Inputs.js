import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

export default class Inputs extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string, 
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    value: PropTypes.string, // avaliar depois como resolver// 
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    required: PropTypes.bool,
    helpMessage: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    isValid: PropTypes.bool,
    customErrorMsg: PropTypes.string,
    customValidationMethod: PropTypes.func,
  };

  static defaultProps = {
    theme: undefined,
    className: undefined,
    type: "text",
    disabled: false,
    value: undefined, // avaliar depois como resolver// 
    icon: undefined,
    iconColor: "mineral-70",
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: true,
    customErrorMsg: "Custom Error",
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    const { isValid, customErrorMsg } = this.props;
    if (!isValid) {
      const inputElement = this.inputRef.current;
      console.log(
        isValid, customErrorMsg
      );
      inputElement.setCustomValidity(customErrorMsg);
    }
  }

  trailingIcon = () => {
    const { icon, iconColor } = this.props;
    return (icon ? (
      <button className="lab-input__icon">
        <Icon type={icon} color={iconColor} />
      </button>
    ) : "")
  };

  requiredIcon = () => {
    const { required } = this.props;
    return (required ? (
      <span className="lab-input__required-icon"></span>
      ) : "")
  };

  message = () => {
    const { helpMessage, isValid, customErrorMsg } = this.props;
    console.log("MESSAGE", isValid, customErrorMsg);
    if (!isValid) {
      return <div className="lab-input__message lab-input__message--error"> { customErrorMsg } </div>
    };        
    if (helpMessage) { 
      return <div className="lab-input__message lab-input__message--required">{helpMessage}</div>
    };    
  };

  prefixArea = () => {
    const { prefix } = this.props;
    return (prefix ? (
      <span className="lab-input__prefix">{prefix}</span>
      ) : "")
  };

  suffixArea = () => {
    const { suffix } = this.props;
    return (suffix ? (
      <span className="lab-input__suffix">{suffix}</span>
      ) : "")
  };


  render() {
    const {
      className,
      id,
      type,
      label,
      disabled,
      value,
      icon,
      iconColor,
      required,
      helpMessage,
      prefix,
      suffix,
    } = this.props;


    return (
      <div className="lab-input">
        <input
          className={`lab-input__field ${className}`}
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          value={value}
          ref={this.inputRef}
        />

        {this.trailingIcon()}

        {this.prefixArea()}

        {this.suffixArea()}

        {this.message()}

        {this.requiredIcon()}

        <label
          className={`lab-input__label`}
          htmlFor={id}>{label}
        </label>
      </div>
    );
  }

}