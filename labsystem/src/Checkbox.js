import React from "react";
<<<<<<< HEAD
import Icon from "./Icon";
import PropTypes from "prop-types";

 //Checkbox//

  export default class Checkbox extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.string,
      indeterminate: PropTypes.bool,
      value: PropTypes.bool,
      name: PropTypes.string.isRequired
    };
  
    static defaultProps = {
      theme: undefined,
      disabled: false,
      checked: undefined,
      indeterminate: false,
      value: undefined,
    };
  
  
  
    render() {
      const {
        className,
        id,
        label,
        disabled,
        checked,
        indeterminate,
        name,
      } = this.props;
  
  
      return (
        <div className="lab-checkbox">
            <input
                type="checkbox"
                id={id}
                disabled={disabled}
                name={name}
                checked={checked}
                onChange={this.handleOnChange}
                ref={el => el && (el.indeterminate = indeterminate)}
          />
          <label
                className={`lab-checkbox__label`}
                htmlFor={id}>{label}
            </label>
        </div>
      );
    }
  }
=======
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";

// Checkbox //

export default class Checkbox extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.oneOfType([string, number, bool]),
    indeterminate: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
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
      color = "mineral40";
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
          disabled={disabled}
          name={name}
          checked={localChecked}
          onChange={this.handleOnChange}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(value ? { value } : undefined)}
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
>>>>>>> b2b0ca83048de0a6f045a14abe352dc247fa6ecd
