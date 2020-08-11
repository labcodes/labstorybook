import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractTextInput extends React.Component {
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
    onIconClick: PropTypes.func,
  };

  static defaultProps = {
    theme: undefined,
    className: undefined,
    type: "text",
    disabled: false,
    defaultValue: undefined,
    value: undefined, // avaliar depois como resolver//
    icon: undefined,
    iconColor: "mineral70",
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: "Custom Error",
    onChange: undefined,
    onIconClick: undefined,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    const { defaultValue, value, id, isValid } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${id} at the same time. We always initialize the toggle with defaultValue. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: defaultValue,
      localIsValid: !isUndefined(isValid) ? isValid : true,
    };
  }

  componentDidMount() {
    const { customErrorMsg, defaultValue } = this.props;
    let { localIsValid } = this.state;

    if (defaultValue) {
      localIsValid = this.inputRef.current.validity.valid;
      this.setState(() => ({ localIsValid }));
    }
    if (!localIsValid) {
      const inputElement = this.inputRef.current;
      inputElement.setCustomValidity(customErrorMsg);
    }
  }

  requiredIcon = () => {
    const { required } = this.props;
    return required ? (
      <span className="lab-input__required-icon">
        <Icon type="star" color="white" />
      </span>
    ) : (
      ""
    );
  };

  message = () => {
    const { helpMessage, customErrorMsg } = this.props;
    const { localIsValid, localValue } = this.state;
    let message;
    if (helpMessage && localIsValid) {
      message = (
        <div className="lab-input__message lab-input__message--required">
          {helpMessage}
        </div>
      );
    }
    if (!localIsValid && helpMessage && !localValue) {
      message = (
        <div className="lab-input__message lab-input__message--error">
          {helpMessage}
        </div>
      );
    }
    if (!localIsValid) {
      message = (
        <div className="lab-input__message lab-input__message--error">
          {customErrorMsg}
        </div>
      );
    }

    return message;
  };

  prefixArea = () => {
    const { prefix } = this.props;
    return prefix ? <span className="lab-input__prefix">{prefix}</span> : "";
  };

  suffixArea = () => {
    const { suffix } = this.props;
    return suffix ? <div className="lab-input__suffix">{suffix}</div> : "";
  };

  handleOnChange = () => {
    const { onChange, isValid } = this.props;
    const inputElementValue = this.inputRef.current.value;
    const inputElementIsValid = this.inputRef.current.validity.valid;

    if (!isUndefined(onChange)) {
      onChange(inputElementValue);
    }
    this.setState({ localValue: inputElementValue });
    if (isUndefined(isValid)) {
      this.setState({ localIsValid: inputElementIsValid });
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
      onIconClick,
      isValid,
      customErrorMsg,
      ...rest
    } = this.props;

    const { localValue } = this.state;

    return (
      <>
        <div className={`lab-input ${className || ""}`}>
          <input
            className={
              `lab-input__field ` +
              `${prefix ? `lab-input__field--prefixed ` : ``}` +
              `${suffix ? `lab-input__field--suffixed ` : ``}`
            }
            id={id}
            type={type}
            placeholder=" "
            disabled={disabled}
            defaultValue={localValue}
            value={value}
            ref={this.inputRef}
            onChange={this.handleOnChange}
            autoComplete="off"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...rest}
          />
          <div className="lab-input__borders" />
          {this.prefixArea()}
          {this.suffixArea()}
          <div className="lab-input__label-wrapper">
            {this.prefixArea()}
            <label className="lab-input__label" htmlFor={id}>
              {label}
            </label>
          </div>
          <TrailingIcon
            icon={icon}
            iconColor={iconColor}
            onIconClick={onIconClick}
          />
          {this.requiredIcon()}
        </div>
        {this.message()}
      </>
    );
  }
}

function TrailingIcon(props) {
  const { icon, iconColor, onIconClick } = props;
  if (icon) {
    return (
      <button type="button" className="lab-input__icon" onClick={onIconClick}>
        <Icon type={icon} color={iconColor} />
      </button>
    );
  }
  return null;
}

TrailingIcon.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  onIconClick: PropTypes.func,
};

TrailingIcon.defaultProps = {
  icon: undefined,
  iconColor: "mineral70",
  onIconClick: undefined,
};
