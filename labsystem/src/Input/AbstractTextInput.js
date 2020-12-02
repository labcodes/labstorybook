/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractTextInput extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
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
    placeholder: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    type: "text",
    className: "",
    disabled: false,
    defaultValue: undefined,
    value: undefined,
    icon: undefined,
    iconColor: undefined,
    required: false,
    helpMessage: undefined,
    prefix: undefined,
    suffix: undefined,
    isValid: undefined,
    customErrorMsg: undefined,
    onChange: () => {},
    onIconClick: () => {},
    placeholder: " ", // acrescentei pra poder colocar placeholder no search//
    children: undefined,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    const { defaultValue, value, id, isValid } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${id} at the same time. We always initialize value, if it is truthy. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: value || defaultValue || "",
      localIsValid: !isUndefined(isValid) ? isValid : true,
    };
  }

  componentDidMount() {
    const { customErrorMsg, defaultValue, value } = this.props;
    const { isValid } = this.props;
    let { localIsValid } = this.state;

    if (defaultValue && !value && isUndefined(isValid)) {
      localIsValid = this.inputRef.current.validity.valid;
      this.setState(() => ({ localIsValid }));
    }

    if (value && isUndefined(isValid)) {
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
      this.setState({ localValue: value }, () => {
        if (isUndefined(isValid)) {
          this.setState({ localIsValid: inputElement.validity.valid });
        }
      });
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
    const { isValid, customErrorMsg, required } = this.props;
    const inputElement = e.target;
    const inputElementValue = inputElement.value;
    const inputElementIsValid = inputElement.validity.valid;

    // First we reset the custom validity
    inputElement.setCustomValidity("");

    // Then we set the state with the new value
    this.setState({ localValue: inputElementValue }, () => {
      if (isUndefined(isValid) || (isValid && required)) {
        // Finally, if the user doesn't force the 'isValid', we use browser's validation from the input
        this.setState({ localIsValid: inputElementIsValid });
      } else if (!isValid) {
        // We only set the customErrorMsg again if the input is forced invalid
        inputElement.setCustomValidity(customErrorMsg);
        this.setState({ localIsValid: isValid });
      }
    });
  };

  render() {
    const {
      id,
      type,
      label,
      disabled,
      required,
      icon,
      iconColor,
      helpMessage,
      prefix,
      suffix,
      onIconClick,
      customErrorMsg,
      placeholder,
      children,
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
            value={localValue}
            ref={this.inputRef}
            onChange={this.handleOnChange}
            autoComplete="off"
            {...(required ? { required } : undefined)}
            {...(disabled ? { disabled } : undefined)}
            {...(placeholder ? { placeholder } : "")}
          />
          <div className="lab-input__borders" />
          {this.prefixArea()}
          {this.suffixArea()}
          <div className="lab-input__label-wrapper">
            {/* The following duplicated prefixArea is necessary to allow the label to be positioned correctly */}
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
          {children}
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
  if (icon && iconColor) {
    return (
      <button type="button" className={className} onClick={onIconClick}>
        <Icon type={icon} color={iconColor} />
      </button>
    );
  }
  if (icon) {
    return (
      <button type="button" className={className} onClick={onIconClick}>
        <Icon type={icon} />
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
  iconColor: undefined,
  onIconClick: () => {},
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
  } else if (!localIsValid) {
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
