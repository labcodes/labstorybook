import React from "react";
import PropTypes from "prop-types";

//Radio//

export default class Radio extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.string,
      name: PropTypes.string.isRequired
    };
  
    static defaultProps = {
      theme: undefined,
      disabled: false,
      checked: undefined,
  
    };
  

  
  
    render() {
      const {
        className,
        id,
        label,
        disabled,
        checked,
        name,
      } = this.props;
  
  
    return (
      <div>
        <input
            className={`lab-radio ${className || ""}`}
            type="radio"
            id={id}
            disabled={disabled}
            checked={checked}
            name={name}
            onChange={this.handleOnChange}
        />
        <label
            className={`lab-radio__label`}
            htmlFor={id}>
            <span className='lab-radio__container'>
            </span>
            {label}
        </label>
      </div>
    );
  }
}

