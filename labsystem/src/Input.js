import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class Inputs extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string, // avaliar depois como resolver//
    icon: PropTypes.string,
    iconColor: PropTypes.string,
    required: PropTypes.bool,
    helpMessage: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    isValid: PropTypes.bool,
    customErrorMsg: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    theme: undefined,
    className: undefined,
    type: "text",
    disabled: false,
    defaultValue: undefined,
    value: undefined, // avaliar depois como resolver//
    icon: undefined,
    iconColor: "mineral-70",
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: "Custom Error",
    onChange: undefined,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    const { defaultValue, value, id, isValid } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${name} at the same time. We always initialize the toggle with defaultValue. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: defaultValue,
      localIsValid: !isUndefined(isValid)? isValid : true,
    };
  }
  
  componentDidMount() {
    const { customErrorMsg, defaultValue } = this.props;
    let { localIsValid } = this.state;

    if (defaultValue) {
      localIsValid = this.inputRef.current.validity.valid;
      this.setState((state) => ({ localIsValid: localIsValid }));
    }
    if (!localIsValid) {
      const inputElement = this.inputRef.current;
      console.log(
        localIsValid, customErrorMsg
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
    const { helpMessage, customErrorMsg } = this.props;
    const { localIsValid } = this.state;
    if (helpMessage && localIsValid) {
      return <div className="lab-input__message lab-input__message--required">{helpMessage}</div>
    };
    if (!localIsValid && helpMessage && !this.state.localValue) {
      return <div className="lab-input__message lab-input__message--error"> {helpMessage} </div>
    };  
    if (!localIsValid) {
      return <div className="lab-input__message lab-input__message--error"> {customErrorMsg} </div>
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

  handleOnChange = (e) => {
    const { onChange, isValid } = this.props;
    const inputElementValue = this.inputRef.current.value;
    const inputElementIsValid = this.inputRef.current.validity.valid;

    console.log("handleOnChange:", this.inputRef.current.validity.valid);
    if (!isUndefined(onChange)) {
      onChange(inputElementValue);
    }
    this.setState((state) => ({ localValue: inputElementValue }));
    if (isUndefined(isValid)) {
      this.setState((state) => ({ localIsValid: inputElementIsValid }));
    }
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
      onChange,
      ...rest
    } = this.props;

    const { localValue, localIsValid } = this.state;

    return (
      <div className="lab-input">
        <input
          className={`lab-input__field ${className || ""}`}
          id={id}
          type={type}
          placeholder=" "
          disabled={disabled}
          defaultValue={localValue}
          value={value}
          ref={this.inputRef}
          onChange={this.handleOnChange}
          {...rest}
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
        <p>Local value: {localValue}</p>
        <p>Local isValid: { ""+localIsValid}</p>
      </div>
    );
  }
}