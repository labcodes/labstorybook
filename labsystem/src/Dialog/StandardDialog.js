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
    handleClose: PropTypes.func,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    outlineButtonProps: undefined,
    isLarge: false,
    handleClose: () => {},
    isOpen: false,
  };

  componentDidUpdate() {
    const { isOpen } = this.props;
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }

  render() {
    const {
      title,
      content,
      buttonProps,
      outlineButtonProps,
      isLarge,
      isOpen,
      handleClose,
    } = this.props;

    if (!isOpen) return null;
    return (
      <div
        className={
          `lab-dialog lab-dialog--standard` +
          `${isLarge ? ` lab-dialog--large` : ""}`
        }
      >
        <div className="lab-dialog lab-dialog__container">
          <div className="lab-dialog__header">
            <div className="lab-dialog__title">{title}</div>
            <button type="button" onClick={handleClose}>
              x
            </button>
          </div>
          <p className="lab-dialog__content">{content}</p>
          <div className="lab-dialog__footer">
            {outlineButtonProps ? (
              <OutlineButton
                size="normal"
                text={outlineButtonProps.text}
                onClick={outlineButtonProps.onClick}
              />
            ) : undefined}
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
