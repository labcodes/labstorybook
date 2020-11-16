import React from "react";
import PropTypes from "prop-types";

import { Button, OutlineButton, TextButton } from "../Buttons";

export default class DoubleAction extends React.Component {
  static propTypes = {
    actionsProps: PropTypes.arrayOf(
      PropTypes.exact({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
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

  render() {
    const { actionsProps, size, isText, isHorizontal } = this.props;

    return (
      <section
        className={`lab-card-double-action lab-card-double-action--${size}
          ${isText ? " lab-card-double-action--text" : ""}
          ${isHorizontal ? " lab-card-double-action--horizontal" : ""}
        `}
      >
        {actionsProps.map(({ text, onClick, icon }, index) => {
          if (isText) {
            return (
              <TextButton
                key={text}
                text={text}
                onClick={onClick}
                size={size}
                {...(icon ? { icon } : undefined)}
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
                {...(icon ? { icon } : undefined)}
              />
            );
          }
          return (
            <OutlineButton
              key={text}
              text={text}
              onClick={onClick}
              size={size}
              {...(icon ? { icon } : undefined)}
            />
          );
        })}
      </section>
    );
  }
}
