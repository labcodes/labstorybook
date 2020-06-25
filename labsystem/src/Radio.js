import React from "react";
import PropTypes from "prop-types";

//Radio//

export default class Radio extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      checked: PropTypes.string,
      name: PropTypes.string.isRequired
    };
  
    static defaultProps = {
      theme: undefined,
      type: "radio",
      disabled: false,
      checked: undefined,
  
    };
  

  
  
    render() {
      const {
        className,
        id,
        type,
        label,
        disabled,
        checked,
        name,
      } = this.props;
  
  
    return (
        <div className="lab-radio">
            <input
                type={type}
                id={id}
                disabled={disabled}
                checked={checked}
                name={name}
                onChange={this.handleOnChange}
            />
            <label
                className={`lab-radio__label`}
                htmlFor={id}>{label}
            </label>
        </div>
      );
    }
  
  }

