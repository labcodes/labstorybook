import React from "react";
import PropTypes from "prop-types";
import { TextButton, OutlineButton } from "../Buttons";

export default class StandardDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    buttonProps: PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
    outlineButtonProps: PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  };

  render() {
    const {
      title,
      content,
      buttonProps, 
      outlineButtonProps,
    } = this.props;

    return (
      <div className="lab-dialog lab-dialog--standard">
        <div className="lab-dialog__header-wrapper">
          <div className="lab-dialog__title">{title}</div>
          <div className="lab-dialog__close-button">close button</div>
        </div>
        <p className="lab-dialog__content">{content}</p>
        <div className="lab-dialog__footer-wrapper">
          <div className="lab-dialog__optional-button">
            { outlineButtonProps ? 
              <OutlineButton
                size="normal"
                text={outlineButtonProps.text}
                onClick={outlineButtonProps.onClick}
              />
            : undefined }
          </div>
          <div className="lab-dialog__button">
            <TextButton
              size="normal"
              skin="dark"
              text={buttonProps.text}
              onClick={buttonProps.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
