/* eslint-disable react/no-did-update-set-state */
import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";
import Icon from "../Icon";

export default class AbstractSearch extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string,
    /** Defines a default value for the Search initialization. */
    defaultValue: PropTypes.string,
    /** Sets the text input to disabled, refusing interactions. */
    disabled: PropTypes.bool,
    /** Text that will be rendered inside the Search field. */
    value: PropTypes.string,
    /** Callback action to be executed when the Search default value changes. */
    onChange: PropTypes.func,
    /** Callback to be executed when the search is performed. */
    onSearch: PropTypes.func,
    /** Callback to be executed when the Search is cleared out. */
    onClear: PropTypes.func,
    /** The placeholder text when the Search field is empty. */
    placeholder: PropTypes.string,
    /** Style variation of the Search. */
    type: PropTypes.oneOf(["standard", "inline"]).isRequired,
  };

  static defaultProps = {
    id: undefined,
    defaultValue: undefined,
    disabled: false,
    value: undefined,
    onChange: undefined,
    onSearch: undefined,
    onClear: undefined,
    placeholder: " ", // rendered as 'label'
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

    const { localValue } = this.state;

    return (
      <div
        className={
          type === "standard" ? "lab-standard-search" : "lab-inline-search"
        }
      >
        <div
          className={`lab-search__wrapper ${
            disabled ? "lab-search--disabled" : ""
          }`}
        >
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
          <TrailingIcon
            onClear={this.handleOnClear}
            {...(disabled ? { disabled } : undefined)}
          />
          {type === "standard" ? (
            <StandardSearchIcon
              handleOnSearch={this.handleOnSearch}
              {...(disabled ? { disabled } : undefined)}
            />
          ) : (
            <InlineSearchIcon {...(disabled ? { disabled } : undefined)} />
          )}
        </div>
      </div>
    );
  }
}

// ----- Auxiliary components ----- //

function TrailingIcon(props) {
  const { onClear, disabled } = props;
  let className = "lab-search__remove-icon";
  if (!onClear) {
    className += " lab-input__icon--disabled"; // check this out
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClear}
      {...(disabled ? { disabled } : undefined)}
    >
      <Icon type="remove" color="mineral-40" />
    </button>
  );
}

TrailingIcon.propTypes = {
  onClear: PropTypes.func,
  disabled: PropTypes.bool,
};

TrailingIcon.defaultProps = {
  onClear: undefined,
  disabled: false,
};

function StandardSearchIcon(props) {
  const { disabled, handleOnSearch } = props;
  return (
    <React.Fragment>
      <button
        type="button"
        className="lab-standard-search__button"
        onClick={handleOnSearch}
        {...(disabled ? { disabled } : undefined)}
      >
        <Icon
          className="lab-standard-search__icon"
          type="magnifying-glass"
          color="white"
        />
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

function InlineSearchIcon(props) {
  const { disabled } = props;
  return (
    <Icon
      className={`lab-inline-search__icon ${
        disabled ? "lab-inline-search__icon--disabled" : ""
      }`}
      type="magnifying-glass"
      color="mineral-40"
    />
  );
}

InlineSearchIcon.propTypes = {
  disabled: PropTypes.bool,
};

InlineSearchIcon.defaultProps = {
  disabled: false,
};
