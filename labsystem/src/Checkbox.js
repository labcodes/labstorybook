import React from "react";
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

  checkIcon = () => {
    const { disabled, indeterminate } = this.props;
    let color = "white";
    let type = "check";

    if (indeterminate) {
      type = "minus";
    }
    if (disabled) {
      color = "mineral40"
    }

    return <Icon type={type} color={color} size="small" />
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
      <div>
        <input
          className="lab-checkbox"
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
          htmlFor={id}>
          <span className="lab-checkbox__box">
            {this.checkIcon()}
          </span>
          {label}
        </label>
      </div>
    );
  }
}