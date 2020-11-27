import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";

import Icon from "../Icon";
import { Button, OutlineButton } from "../Buttons";

export default class StandardDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    buttonProps: PropTypes.exact({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
    outlineButtonProps: PropTypes.exact({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
    isLarge: PropTypes.bool,
    handleClose: PropTypes.func,
    isOpen: PropTypes.bool,
    isModal: PropTypes.bool,
  };

  static defaultProps = {
    outlineButtonProps: undefined,
    isLarge: false,
    handleClose: () => {},
    isOpen: false,
    isModal: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      swipeStartYCoordinate: undefined,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentDidUpdate() {
    const { isOpen, isModal } = this.props;
    document.body.style.overflow = isOpen && isModal ? "hidden" : "unset";
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
    document.body.style.overflow = "unset";
  }

  handleKeyDown = (event) => {
    const { handleClose } = this.props;
    if (event.keyCode === 27) {
      handleClose();
    }
  };

  handleTouchStart = (event) => {
    this.setState({ swipeStartYCoordinate: event.changedTouches[0].screenY });
  };

  handleTouchEnd = (event) => {
    const { handleClose } = this.props;
    const { swipeStartYCoordinate } = this.state;

    if (event.changedTouches[0].screenY - swipeStartYCoordinate >= 75) {
      this.setState({ swipeStartYCoordinate: undefined }, () => handleClose());
    } else {
      this.setState({ swipeStartYCoordinate: undefined });
    }
  };

  render() {
    const {
      title,
      content,
      buttonProps,
      outlineButtonProps,
      isLarge,
      isOpen,
      handleClose,
      isModal,
    } = this.props;

    if (!isOpen) return null;
    return (
      <React.Fragment>
        {isModal ? (
          <div
            className="lab-dialog-overlay"
            onClick={handleClose}
            role="presentation"
          />
        ) : null}
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <div
            className={
              `lab-dialog lab-dialog--standard` +
              `${isLarge ? ` lab-dialog--large` : ""}`
            }
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="lab-dialog__mobile-close-button"
              onClick={handleClose}
              onTouchStart={this.handleTouchStart}
              onTouchEnd={this.handleTouchEnd}
            >
              <Icon type="collapse-open" size="petit" />
            </button>

            <div className="lab-dialog__header">
              <div className="lab-dialog__title">{title}</div>
              <button
                className="lab-dialog__close-button"
                type="button"
                onClick={handleClose}
              >
                <Icon type="remove" />
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
        </FocusTrap>
      </React.Fragment>
    );
  }
}
