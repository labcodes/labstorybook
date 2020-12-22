/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

// Radio //

export default class Radio extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([string, number, bool]).isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    checked: undefined,
    defaultChecked: undefined,
    className: undefined,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    const { defaultChecked, checked, id } = props;
    if (!isUndefined(defaultChecked) && !isUndefined(checked)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both checked and defaultChecked for radio input ${id} at the same time. We always initialize the radio with defaultChecked. Make sure this is the behaviour you want.`
      );
    }

    let localChecked = false;
    if (defaultChecked) {
      localChecked = defaultChecked;
    } else if (!isUndefined(checked)) {
      localChecked = checked;
    }

    this.state = {
      localChecked,
    };
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props;
    if (checked !== prevProps.checked) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => ({ localChecked: checked }));
    }
  }

  handleOnChange = (event) => {
    const { onChange } = this.props;
    if (!isUndefined(onChange)) {
      onChange(event);
    }

    this.setState((state) => ({ localChecked: !state.localChecked }));
  };

  render() {
    const { className, id, label, disabled, checked, name, value } = this.props;

    return (
      <React.Fragment>
        <input
          className={`lab-radio ${className || ""}`}
          type="radio"
          id={id}
          {...(disabled ? { disabled } : undefined)}
          checked={checked}
          name={name}
          value={value}
          onChange={this.handleOnChange}
        />
        <label className="lab-radio__label" htmlFor={id}>
          <span className="lab-radio__container" />
          {label}
        </label>
      </React.Fragment>
    );
  }
}
