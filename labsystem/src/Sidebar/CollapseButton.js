import React from "react";
import Icon from "../Icon";

export default class Collapse extends React.Component {
  render() {
    return (
      <button type="button" href="#" className="lab-narrow-sidebar__collapse">
        <Icon
          type="menu-collapse"
          className="lab-narrow-sidebar__collapse-icon"
        />
      </button>
    );
  }
}
