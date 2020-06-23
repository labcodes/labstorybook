import React from "react";
import PropTypes from "prop-types";

//Radio//

export default class Radio extends React.Component {
    static propTypes = {
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
      icon: PropTypes.string,
      iconColor: PropTypes.string,
      name: PropTypes.string.isRequired
    };
  
    static defaultProps = {
      theme: undefined,
      type: "radio",
      disabled: false,
      icon: undefined,
      iconColor: "mineral-70",
    };
  

  
  
    render() {
      const {
        className,
        id,
        type,
        label,
        disabled,
        name,
      } = this.props;
  
  
    return (
        <div className="radio">
            <input
                type={type}
                id={id}
                disabled={disabled}
                name={name}
                onChange={this.handleOnChange}
            />
            <label
                className={`radio-label`}
                htmlFor={id}>{label}
            </label>
        </div>
      );
    }
  
  }

