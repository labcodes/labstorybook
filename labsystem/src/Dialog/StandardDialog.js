import React from "react";
import PropTypes from "prop-types";
import { TextButton } from "../Buttons";

export default class StandardDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    buttonProps: PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const {
      title,
      content,
      buttonProps: { text, onClick },
    } = this.props;

    return (
      <div className="lab-dialog lab-dialog--standard">
        <div className="lab-dialog__header-wrapper">
          <div className="lab-dialog__title">{title}</div>
          <div className="lab-dialog__close-button">close button</div>
        </div>
        <p className="lab-dialog__content">{content}</p>
        <div className="lab-dialog__footer-wrapper">
          <div className="lab-dialog__optional-button">optional button</div>
          <div className="lab-dialog__button">
            <TextButton
              size="normal"
              skin="dark"
              text={text}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
