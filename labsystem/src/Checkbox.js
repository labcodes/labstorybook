import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";

// Checkbox //

export default class Checkbox extends React.Component {
  static propTypes = {
    /** Text that will serve as unique identifier. It's also an important accessibility tool. */
    id: PropTypes.string.isRequired,
    /** Text that will specify the HTML name attribute of an <input> element. */
    name: PropTypes.string.isRequired,
    /** Text that will be rendered as the Checkbox's label. */
    label: PropTypes.string.isRequired,
    /** Disables the Input component, including functionality and style. */
    disabled: PropTypes.bool,
    /** Defines if the Checkbox is currently checked. */
    checked: PropTypes.bool,
    /** Defines if the Checkbox is marked as "checked" or "partially checked". */
    indeterminate: PropTypes.bool,
    /** Defines if the Checkbox is initialized as "checked". */
    defaultChecked: PropTypes.bool,
    /** Callback to be executed when the Checkbox is clicked. */
    onChange: PropTypes.func,
    /** */
    value: PropTypes.oneOfType([string, number, bool]),
    /** */
    className: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    checked: undefined,
    value: null,
    indeterminate: false,
    defaultChecked: undefined,
    className: undefined,
    onChange: undefined,
  };

  constructor(props) {
    super(props);
    const { defaultChecked, checked, id } = props;
    if (!isUndefined(defaultChecked) && !isUndefined(checked)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both checked and defaultChecked for input ${id} at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.`
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

  checkIcon = () => {
    const { disabled, indeterminate } = this.props;
    let color = "white";
    let type = "check";

    if (indeterminate) {
      type = "minus";
    }
    if (disabled) {
      color = "mineral-40";
    }

    return <Icon type={type} color={color} size="small" />;
  };

  handleOnChange = (e) => {
    const { onChange } = this.props;
    if (!isUndefined(onChange)) {
      onChange(e);
    }

    this.setState((state) => ({ localChecked: !state.localChecked }));
  };

  render() {
    const {
      id,
      name,
      className,
      label,
      disabled,
      indeterminate,
      value,
    } = this.props;

    const { localChecked } = this.state;

    return (
      <React.Fragment>
        <input
          className={`lab-checkbox ${className || ""}`}
          type="checkbox"
          id={id}
          name={name}
          checked={localChecked}
          onChange={this.handleOnChange}
          {...(value ? { value } : undefined)}
          {...(disabled ? { disabled } : undefined)}
        />
        <label className="lab-checkbox__label" htmlFor={id}>
          <span className="lab-checkbox__box">
            {localChecked || indeterminate ? this.checkIcon() : ""}
          </span>
          {label}
        </label>
      </React.Fragment>
    );
  }
}
