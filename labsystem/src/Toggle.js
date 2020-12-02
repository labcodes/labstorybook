import React from "react";
import PropTypes, { oneOf } from "prop-types";
import { isUndefined } from "lodash";

export default class Toggle extends React.Component {
  static propTypes = {
    color: oneOf(["teal", "purple"]),
    disabled: PropTypes.bool,
    defaultValue: PropTypes.bool,
    value: PropTypes.bool,
    name: PropTypes.string.isRequired,
    handleToggle: PropTypes.func,
  };

  static defaultProps = {
    color: "teal",
    disabled: false,
    defaultValue: false,
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
      localValue: defaultValue,
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
