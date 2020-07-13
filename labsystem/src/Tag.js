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
    colorStyle: "soft",
    color: "teal",
  };

  icon = () => {
    const { icon } = this.props;
    if (icon) {
      return (
        <span class="lab-tag__left-icon">
          <Icon type={ icon } color="teal70" size="petit" />
        </span>
      );
    }
  };

  thumb = () => {
    const { thumbSrc, thumbAlt } = this.props;
    if (thumbSrc && thumbAlt) {
      return <img className="lab-tag__thumb" src={ thumbSrc } alt={ thumbAlt } />
    }
  };

  dropdownIcon = () => {
    const { dropdown } = this.props;
    if (dropdown) {
      return (
        <span className="lab-tag__right-icon lab-tag__right-icon--dropdown">
          <Icon type="dropdown-closed" color="teal70" size="petit"/>
        </span>
      );
    }
  };

  removeIcon = () => {
    const { removable } = this.props;
    if (removable) {
      return (
        <span className="lab-tag__right-icon lab-tag__right-icon--remove">
          <Icon type="remove" color="teal70" size="petit"/>
        </span>
      );
    }
  };
  
  render() {
    const { icon, children, thumbSrc, style, dropdown, removable, disabled, colorStyle, color } = this.props;
    return (
      <span 
        className={`
          lab-tag lab-tag--${style} lab-tag--${color}-${colorStyle}
          ${icon ? "lab-tag--has-left-icon" : ''}
          ${thumbSrc ? "lab-tag--has-thumb" : ''}
          ${dropdown ? "lab-tag--has-right-icon" : ''}
          ${removable ? "lab-tag--has-right-icon" : ''}
          ${disabled ? "lab-tag--disabled" : ''}
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
