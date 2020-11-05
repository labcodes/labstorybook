import React from "react";
import PropTypes from "prop-types";
import TextButton from "../Buttons/TextButton";

export default class StandardDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    buttonProps: PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
  }

  button = () => {
    const {
      buttonProps: { text },
    } = this.props;
    return <TextButton size="normal" skin="dark" text={text} />;
  };

  handleClick = (e) => {
    const {
      buttonProps: { onClick },
    } = this.props;
    onClick(e);
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className={`lab-dialog lab-dialog--standard`}>
        <span className="lab-dialog__title">{title}</span>
        <span className="lab-dialog__content">{content}</span>
        <span
          className="lab-dialog__button"
          onClick={this.handleClick}
        >
          {this.button()}
        </span>
      </div>
    );
  }
}
