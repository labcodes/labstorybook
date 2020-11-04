import React from "react";
import PropTypes from "prop-types";

export default class OutlineFilledCard extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["mineral", "teal", "purple"]).isRequired,
    isHorizontal: PropTypes.bool,
    isCompact: PropTypes.bool,
  };

  static defaultProps = {
    isHorizontal: false,
    isCompact: false,
  };

  render() {
    const { children, color, isCompact, isHorizontal } = this.props;

    return (
      <article
        className={`lab-card lab-card--outline lab-card--filled lab-card--${color}
          ${isCompact ? " lab-card--compact" : ""}
          ${isHorizontal ? " lab-card--horizontal" : ""}
        `}
      >
        {children}
      </article>
    );
  }
}
