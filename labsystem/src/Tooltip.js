import React from "react";
import PropTypes from "prop-types";

export default class Tooltip extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    placement: PropTypes.oneOf([
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-start",
      "left-start",
      "left",
      "left-end",
      "bottom",
      "bottom-end",
    ]),
    useThemeColor: PropTypes.bool,
  };

  static defaultProps = {
    placement: "top",
    useThemeColor: false,
  };

  constructor(props) {
    super(props);
    if (props.text.length > 180) {
      console.warn(`Tooltip with id='${props.id}' has ${props.text.length} characters. It shouldn't be longer than 180 characters`);
    }
  }

  render() {
    const { id, text, useThemeColor, children, placement } = this.props;

    return (
      <span className="lab-tooltip">
        {children}
        <span
          className={`lab-tooltip__text lab-tooltip--${placement}${
            useThemeColor ? " lab-tooltip--theme-color" : ""
          }`}
          id={id}
        >
          {text}
        </span>
      </span>
    );
  }
}
