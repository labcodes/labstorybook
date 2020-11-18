import React from "react";
import PropTypes from "prop-types";

import { Button, OutlineButton, TextButton } from "../Buttons";
import { CardContext } from "./contexts";

export default class DoubleAction extends React.Component {
  static propTypes = {
    actionsProps: PropTypes.arrayOf(
      PropTypes.exact({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        icon: PropTypes.string,
      })
    ).isRequired,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    isHorizontal: PropTypes.bool,
    isText: PropTypes.bool,
  };

  static defaultProps = {
    size: "normal",
    isHorizontal: false,
    isText: false,
  };

  constructor(props) {
    super(props);
    this.checkActionsPropsLength(props);
  }

  componentDidUpdate() {
    this.checkActionsPropsLength(this.props);
  }

  checkActionsPropsLength = ({ actionsProps }) => {
    if (actionsProps.length !== 2) {
      throw Error(
        "DoubleAction: You need to pass exactly two objects inside the `actionsProps` prop."
      );
    }
  };

  getButtonSkinFromCardContext = (context) => {
    const { color, skin, cardType } = context;

    if (cardType === "filled" && skin === "vivid" && color !== "white") {
      return "light";
    }

    if (
      cardType !== "outline" &&
      skin === "pale" &&
      (color === "purple" || color === "mineral")
    ) {
      return "dark";
    }

    return null;
  };

  render() {
    const { actionsProps, size, isText, isHorizontal } = this.props;

    return (
      <CardContext.Consumer>
        {(context) => (
          <section
            className={`lab-card-double-action lab-card-double-action--${size}
              ${isText ? " lab-card-double-action--text" : ""}
              ${isHorizontal ? " lab-card-double-action--horizontal" : ""}
            `}
          >
            {actionsProps.map(({ text, onClick, icon, disabled }, index) => {
              if (isText) {
                return (
                  <TextButton
                    key={text}
                    text={text}
                    onClick={onClick}
                    size={size}
                    skin={this.getButtonSkinFromCardContext(context)}
                    {...(icon ? { icon } : undefined)}
                    {...(disabled ? { disabled } : undefined)}
                  />
                );
              }
              if (index === 0) {
                return (
                  <Button
                    key={text}
                    text={text}
                    onClick={onClick}
                    size={size}
                    skin={this.getButtonSkinFromCardContext(context)}
                    {...(icon ? { icon } : undefined)}
                    {...(disabled ? { disabled } : undefined)}
                  />
                );
              }
              return (
                <OutlineButton
                  key={text}
                  text={text}
                  onClick={onClick}
                  size={size}
                  skin={this.getButtonSkinFromCardContext(context)}
                  {...(icon ? { icon } : undefined)}
                  {...(disabled ? { disabled } : undefined)}
                />
              );
            })}
          </section>
        )}
      </CardContext.Consumer>
    );
  }
}
