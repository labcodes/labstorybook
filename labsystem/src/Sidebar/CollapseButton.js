import React from "react";
import Icon from "../Icon";

export default class Collapse extends React.Component {
  render() {
    return (
      <button type="button" className="lab-narrow-sidebar__collapse">
        <Icon type="menu-collapse" className="sidebar-item" />
      </button>
    );
  }
}
