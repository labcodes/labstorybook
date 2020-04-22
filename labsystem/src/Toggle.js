import React from "react";
import PropTypes from "prop-types";

export default class Icon extends React.Component {
  static propTypes = {
    color: PropTypes.oneOf(["teal", "purple", "coral"]),
    disabled: PropTypes.oneOf([true, false]),
    toggleId: PropTypes.string.isRequired
  };

  static defaultProps = {
    color: "teal",
    disabled: "false"
  };

  render() {
    const { color, toggleId, disabled } = this.props;
    return (
      <label className="toggle" htmlFor={toggleId}>
        <input type="checkbox" id={toggleId} />
        <span className={`slider ${color} ${disabled}`} />
      </label>
    );
  }
}
