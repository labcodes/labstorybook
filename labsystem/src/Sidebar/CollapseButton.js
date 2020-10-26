import React from "react";
import Icon from "../Icon";

export default class Collapse extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" href="#" className="lab-narrow-sidebar__collapse">
          <Icon type="menu-collapse" className="sidebar-item" />
        </button>
      </React.Fragment>
    );
  }
}
