import React from "react";
import PropTypes from "prop-types";

export default class Tooltip extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: undefined,
  };

  render() {
    const { id, text, color } = this.props;

    return (
      <div className={`lab-tooltip lab-tooltip--${color}`} id={id}>
        {text}
      </div>
    );
  }
}
