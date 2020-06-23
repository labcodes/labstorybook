import React from "react";
import Icon from "./Icon";
import PropTypes from "prop-types";

 //Checkbox//

  export default class Checkbox extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.string,
      icon: PropTypes.string,
      value: PropTypes.bool,
      iconColor: PropTypes.string,
      name: PropTypes.string.isRequired
    };
  
    static defaultProps = {
      theme: undefined,
      type: "checkbox",
      disabled: false,
      checked: undefined,
      icon: undefined,
      value: undefined,
      iconColor: "mineral-70",
    };
  
  
  
    render() {
      const {
        className,
        id,
        type,
        label,
        disabled,
        checked,
        icon,
        iconColor,
        name,
      } = this.props;
  
  
      return (
        <div>
            <input
                type={type}
                id={id}
                disabled={disabled}
                name={name}
                checked={checked}
                onChange={this.handleOnChange}
            />
            <label
                className={`checkbox-label`}
                htmlFor={id}>{label}
            </label>
        </div>
      );
    }
  }