import React from "react";
import PropTypes from "prop-types";
import { Button, OutlineButton } from "../Buttons";

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
    isLarge: PropTypes.bool,
  };

  static defaultProps = {
    outlineButtonProps: undefined,
    isLarge: false,
  };

  render() {
    const {
      title,
      content,
      buttonProps,
      outlineButtonProps,
      isLarge,
    } = this.props;

    return (
      <div
        className={
          `lab-dialog lab-dialog--standard` +
          `${isLarge ? ` lab-dialog--large` : ""}`
        }
      >
        <div className="lab-dialog__standard-header">
          <div className="lab-dialog__standard-title">{title}</div>
          <div className="lab-dialog-close-button--with-background">
            close button
          </div>
        </div>
        <p className="lab-dialog__standard-content">{content}</p>
        <div className="lab-dialog__standard-footer">
          {outlineButtonProps ? (
            <div className="lab-dialog__optional-button">
              <OutlineButton
                size="normal"
                text={outlineButtonProps.text}
                onClick={outlineButtonProps.onClick}
              />
            </div>
          ) : undefined}
          <div className="lab-dialog__button">
            <Button
              size="normal"
              text={buttonProps.text}
              onClick={buttonProps.onClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
