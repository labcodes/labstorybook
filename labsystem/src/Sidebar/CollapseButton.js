import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class Collapse extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    iconColor: PropTypes.string,
  };

  static defaultProps = {
    icon: "menu-collapse",
    iconColor: "teal-60",
  };

  CollapseIcon = () => {
    const { icon, iconColor } = this.props;
    return icon ? (
      <Icon type={icon} color={iconColor} className="sidebar-item" />
    ) : (
      ""
    );
  };

  render() {
    return (
      <React.Fragment>
        <button type="button" href="#" className="lab-narrow-sidebar__collapse">
          {this.CollapseIcon()}
        </button>
      </React.Fragment>
    );
  }
}
