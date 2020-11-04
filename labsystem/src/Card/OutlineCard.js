import React from "react";
import PropTypes from "prop-types";

export default class OutlineCard extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["mineral", "teal", "purple"]).isRequired,
    skin: PropTypes.oneOf(["pale", "vivid"]).isRequired,
    isHorizontal: PropTypes.bool,
    isCompact: PropTypes.bool,
  };

  static defaultProps = {
    isHorizontal: false,
    isCompact: false,
  };

  render() {
    const { children, color, skin, isCompact, isHorizontal } = this.props;

    return (
      <article
        className={`lab-card lab-card--outline lab-card--${color} lab-card--${skin}
          ${isCompact ? " lab-card--compact" : ""}
          ${isHorizontal ? " lab-card--horizontal" : ""}
        `}
      >
        {children}
      </article>
    );
  }
}
