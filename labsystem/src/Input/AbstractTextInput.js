/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractTextInput extends React.Component {
  static propTypes = {
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
    customErrorMsg: undefined,
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
    const { customErrorMsg, defaultValue, value } = this.props;
    const { isValid } = this.props;
    let { localIsValid } = this.state;

    if (defaultValue && isUndefined(isValid)) {
      localIsValid = this.inputRef.current.validity.valid;
      this.setState(() => ({ localIsValid }));
    }

    if (value && isUndefined(defaultValue) && isUndefined(isValid)) {
      localIsValid = this.inputRef.current.validity.valid;
      this.setState(() => ({ localIsValid }));
    }

    if (!localIsValid) {
      const inputElement = this.inputRef.current;
      inputElement.setCustomValidity(customErrorMsg);
    }
  }

  componentDidUpdate(prevProps) {
    const { customErrorMsg, isValid, value } = this.props;
    const inputElement = this.inputRef.current;

    if (isValid !== prevProps.isValid) {
      this.setState({ localIsValid: isValid });

      if (!isUndefined(isValid) && !isValid) {
        inputElement.setCustomValidity(customErrorMsg);
      } else if (isValid) {
        inputElement.setCustomValidity("");
      }
    }

    if (value !== prevProps.value) {
      this.setState({ localValue: value });

      if (isUndefined(isValid)) {
        this.setState({ localIsValid: inputElement.validity.valid });
      }
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

  prefixArea = () => {
    const { prefix } = this.props;
    return prefix ? <span className="lab-input__prefix">{prefix}</span> : "";
  };

  suffixArea = () => {
    const { suffix } = this.props;
    return suffix ? <div className="lab-input__suffix">{suffix}</div> : "";
  };

  handleOnChange = (e) => {
    const { onChange, isValid, customErrorMsg } = this.props;
    const inputElement = e.target;
    const inputElementValue = inputElement.value;
    const inputElementIsValid = inputElement.validity.valid;

    if (!isUndefined(onChange)) {
      onChange(inputElementValue);
    }
    this.setState({ localValue: inputElementValue });
    if (isUndefined(isValid)) {
      this.setState({ localIsValid: inputElementIsValid });
    } else if (!isValid) {
      inputElement.setCustomValidity(customErrorMsg);
      this.setState({ localIsValid: isValid });
    }
  };

  render() {
    const {
      id,
      type,
      label,
      disabled,
      value,
      icon,
      iconColor,
      helpMessage,
      prefix,
      suffix,
      onIconClick,
      customErrorMsg,
    } = this.props;

    let { className } = this.props;

    const { localValue, localIsValid } = this.state;
    if (disabled) {
      className += " lab-input--disabled";
    } else if (!localIsValid) {
      className += " lab-input--invalid";
    }

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
            defaultValue={localValue}
            value={value}
            ref={this.inputRef}
            onChange={this.handleOnChange}
            autoComplete="off"
            {...(disabled ? { disabled } : undefined)}
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
        <TextInputMessage
          helpMessage={helpMessage}
          customErrorMsg={customErrorMsg}
          localValue={localValue}
          localIsValid={localIsValid}
        />
      </>
    );
  }
}

// ----- Auxiliary components ----- //

function TrailingIcon(props) {
  const { icon, iconColor, onIconClick } = props;
  let className = "lab-input__icon";
  if (!onIconClick) {
    className += " lab-input__icon--disabled";
  }
  if (icon) {
    return (
      <button type="button" className={className} onClick={onIconClick}>
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

function TextInputMessage(props) {
  const { helpMessage, customErrorMsg, localIsValid, localValue } = props;
  let message = null;
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
}

TextInputMessage.propTypes = {
  helpMessage: PropTypes.string,
  customErrorMsg: PropTypes.string,
  localValue: PropTypes.string,
  localIsValid: PropTypes.bool,
};

TextInputMessage.defaultProps = {
  helpMessage: undefined,
  customErrorMsg: undefined,
  localValue: undefined,
  localIsValid: undefined,
};