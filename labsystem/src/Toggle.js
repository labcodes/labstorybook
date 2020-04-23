import React from "react";
import PropTypes from "prop-types";
import { isUndefined } from "lodash";

export default class Toggle extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(["teal", "purple", "coral"]),
    disabled: PropTypes.oneOf([true, false]),
    defaultValue: PropTypes.bool,
    value: PropTypes.bool,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    color: "teal",
    disabled: "false",
    defaultValue: undefined,
    value: undefined
  };

  constructor(props) {
    super(props);
    const { defaultValue, value, name } = props;
    if (!isUndefined(defaultValue) && !isUndefined(value)) {
      console.warn(
        `You are setting both value and defaultValue for input ${name} at the same time. We always initialize the toggle with defaultValue. Make sure this is the behaviour you want.`
      );
    }
    this.state = { localValue: !isUndefined(defaultValue)? defaultValue : false };
  }

  // handleOnClick = () => {
  //   this.setState()
  // };

  render() {
    const { color, name, disabled, value } = this.props;
    const { localValue } = this.state;
    const isChecked = !isUndefined(value) ? value : localValue;

    return (
      <label className="toggle" htmlFor={name}>
        <input type="checkbox" id={name} checked={isChecked} />
        <span className={`slider ${color} ${disabled}`} />
      </label>
    );
  }
}
