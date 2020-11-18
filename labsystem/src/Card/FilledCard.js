import React from "react";
import PropTypes from "prop-types";
import { CardContext } from "./contexts";

export default class FilledCard extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(["white", "mineral", "teal", "purple"]).isRequired,
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
      <CardContext.Provider value={{ color, skin, cardType: "filled" }}>
        <article
          className={`lab-card lab-card--filled lab-card--${color} lab-card--${skin}
          ${isCompact ? " lab-card--compact" : ""}
          ${isHorizontal ? " lab-card--horizontal" : ""}
        `}
        >
          {children}
        </article>
      </CardContext.Provider>
    );
  }
}
