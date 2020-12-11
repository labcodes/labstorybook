import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class Toggle extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    name: PropTypes.string.isRequired,
    /** Defines the Toggle color. */
    color: PropTypes.oneOf(["teal", "purple"]),
    /** Disables the Toggle component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Defines a default value for the Toggle initialization. */
    defaultValue: PropTypes.bool,
    /** */
    value: PropTypes.bool,
    /** */
    handleToggle: PropTypes.func,
  };

  static defaultProps = {
    color: "teal",
    disabled: false,
    defaultValue: undefined,
    value: undefined,
    handleToggle: undefined,
  };

  constructor(props) {
    super(props);
    const { defaultValue, value, name } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both value and defaultValue for input ${name} at the same time. We always initialize the toggle with defaultValue. Make sure this is the behaviour you want.`
      );
    }
    this.state = {
      localValue: !isUndefined(defaultValue) ? defaultValue : false,
    };
  }

  handleOnChange = (e) => {
    const { handleToggle } = this.props;
    if (!isUndefined(handleToggle)) {
      handleToggle(e);
    }

    this.setState((state) => ({ localValue: !state.localValue }));
  };

  render() {
    const { color, name, disabled, value } = this.props;
    const { localValue } = this.state;
    const isChecked = !isUndefined(value) ? value : localValue;

    return (
      <label
        className={`
          lab-toggle
          ${color ? `lab-toggle--${color}` : ""}
          ${disabled ? " lab-toggle--disabled" : ""}
        `}
        htmlFor={name}
      >
        <input
          type="checkbox"
          id={name}
          className="lab-toggle__input"
          checked={isChecked}
          onChange={this.handleOnChange}
          {...(disabled ? { disabled } : undefined)}
        />
        <span className="lab-toggle__slider" />
      </label>
    );
  }
}
