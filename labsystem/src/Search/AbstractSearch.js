/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractSearch extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(["standard", "inline"]).isRequired,
  };

  static defaultProps = {
    id: undefined,
    defaultValue: undefined,
    className: undefined,
    disabled: false,
    value: undefined,
    onChange: undefined,
    onSearch: undefined,
    onClear: undefined,
    placeholder: " ", // acrescentei pra poder colocar placeholder no search//
  };

  constructor(props) {
    super(props);
    this.searchRef = React.createRef();

    const { defaultValue, value, id } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${id} at the same time. When a value is passed, we always use it. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: value || defaultValue || "",
    };
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value && value !== prevProps.value) {
      this.setState({ localValue: value });
    }
  }

  handleOnChange = (e) => {
    const { onChange } = this.props;

    this.setState({ localValue: e.target.value });

    if (!isUndefined(onChange)) {
      onChange(e);
    }
  };

  handleOnSearch = () => {
    const { onSearch } = this.props;
    const { localValue } = this.state;

    if (!isUndefined(onSearch)) {
      onSearch(localValue);
    }
  };

  handleKeyPress = (e) => {
    const { onSearch } = this.props;
    if (e.keyCode === 13 && !isUndefined(onSearch)) {
      onSearch(e.target.value);
    }
  };

  handleOnClear = () => {
    const { value, onClear } = this.props;

    if (isUndefined(value)) {
      this.setState({ localValue: "" });
    }

    if (!isUndefined(onClear)) {
      onClear();
    }
  };

  render() {
    const { id, disabled, placeholder, type } = this.props;

    let { className } = this.props;

    const { localValue } = this.state;
    if (disabled) {
      className += " lab-input--disabled";
    }

    return (
      <div
        className={
          type === "standard" ? "lab-standard-search" : "lab-inline-search"
        }
      >
        <div className={`lab-search__wrapper ${className || ""}`}>
          <input
            className="lab-search__field"
            id={id}
            type="search"
            value={localValue}
            ref={this.searchRef}
            onChange={this.handleOnChange}
            autoComplete="off"
            onKeyDown={this.handleKeyPress}
            {...(disabled ? { disabled } : undefined)}
            {...(placeholder ? { placeholder } : "")}
          />
          <div className="lab-search__borders" />
          <TrailingIcon onClear={this.handleOnClear} />
          {type === "standard" ? (
            <StandardSearchIcon
              handleOnSearch={this.handleOnSearch}
              {...(disabled ? { disabled } : undefined)}
            />
          ) : (
            <InlineSearchIcon />
          )}
        </div>
      </div>
    );
  }
}

// ----- Auxiliary components ----- //

function TrailingIcon(props) {
  const { onClear } = props;
  let className = "lab-search__remove-icon";
  if (!onClear) {
    className += " lab-input__icon--disabled";
  }

  return (
    <button type="button" className={className} onClick={onClear}>
      <Icon type="remove" color="mineral-40" />
    </button>
  );
}

TrailingIcon.propTypes = {
  onClear: PropTypes.func,
};

TrailingIcon.defaultProps = {
  onClear: undefined,
};

function StandardSearchIcon(props) {
  const { disabled, handleOnSearch } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        className="lab-standard-search__button"
        disabled={disabled}
        onClick={handleOnSearch}
      >
        <Icon className="lab-standard-search__icon" type="lupe" color="white" />
      </button>
      <span className="lab-standard-search__separator" />
    </React.Fragment>
  );
}

StandardSearchIcon.propTypes = {
  disabled: PropTypes.bool,
  handleOnSearch: PropTypes.func,
};

StandardSearchIcon.defaultProps = {
  disabled: false,
  handleOnSearch: undefined,
};

function InlineSearchIcon() {
  return (
    <Icon className="lab-inline-search__icon" type="lupe" color="mineral-40" />
  );
}
