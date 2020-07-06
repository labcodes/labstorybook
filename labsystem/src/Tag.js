import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

export default class Tag extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    type: PropTypes.string,
    icon: PropTypes.string,
    thumbSrc: PropTypes.string,
    thumbAlt: PropTypes.string,
    style: PropTypes.string,
    colorStyle: PropTypes.string,
    color: PropTypes.string,
    removable: PropTypes.string,
    dropdown: PropTypes.string,
    disabled: PropTypes.string,
  };

  static defaultProps = {
    children: undefined,
    icon: undefined,
    thumbSrc: undefined,
    thumbAlt: undefined,
    style: "fill",
    colorStyle: "",
    color: "teal",
  };

  icon = () => {
    const { icon } = this.props;
    if (icon) {
      return <span class="tag__left-icon"><Icon type={ icon } color="mineral70" /></span>
    }
  };

  thumb = () => {
    const { thumbSrc, thumbAlt } = this.props;
    if (thumbSrc && thumbAlt) {
      return <img className="tag__thumb" src={ thumbSrc } alt={ thumbAlt } />
    }
  };

  dropdownIcon = () => {
    const { dropdown } = this.props;
    if (dropdown) {
      return <span className="tag__right-icon"><Icon type="dropdown-closed" color="mineral70" /></span>
    }
  };

  removeIcon = () => {
    const { removable } = this.props;
    if (removable) {
      return <span className="tag__right-icon tag__right-icon--remove"><Icon type="remove" color="mineral70" /></span>
    }
  };
  
  render() {
    const { icon, children, thumbSrc, style, dropdown, removable, disabled, colorStyle, color } = this.props;
    return (
      <span 
        className={`
          tag tag--${style} tag--${color}-${colorStyle}
          ${icon ? "tag--has-left-icon" : ''}
          ${thumbSrc ? "tag--has-thumb" : ''}
          ${dropdown ? "tag--has-right-icon" : ''}
          ${removable ? "tag--has-right-icon" : ''}
          ${disabled ? "tag--disabled" : ''}
        `}
      >
          { this.thumb() }
          { this.icon() }
          { children }
          { this.dropdownIcon() }
          { this.removeIcon() }
      </span>
    );
  }
}
