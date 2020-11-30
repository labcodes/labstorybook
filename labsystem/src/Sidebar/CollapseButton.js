import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";

export default class CollapseButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;

    return (
      <button
        type="button"
        onClick={onClick}
        className="lab-narrow-sidebar__collapse"
      >
        <Icon
          type="menu-collapse"
          className="lab-narrow-sidebar__collapse-icon"
        />
      </button>
    );
  }
}
