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
                type="checkbox"
                id={id}
                disabled={disabled}
                name={name}
                checked={checked}
                onChange={this.handleOnChange}
                ref={el => el && (el.indeterminate = indeterminate)}
          />
          <label
                className={`checkbox-label`}
                htmlFor={id}>{label}
            </label>
        </div>
      );
    }
  }