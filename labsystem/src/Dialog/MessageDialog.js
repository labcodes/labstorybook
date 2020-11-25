import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";
import { Button } from "../Buttons";
import Icon from "../Icon";

export default class MessageDialog extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    buttonProps: PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }).isRequired,
    isLarge: PropTypes.bool,
    handleClose: PropTypes.func,
    isOpen: PropTypes.bool,
  };

  static defaultProps = {
    isLarge: false,
    handleClose: () => {},
    isOpen: false,
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentDidUpdate() {
    const { isOpen } = this.props;
    document.body.style.overflow = isOpen ? "hidden" : "unset";
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

  render() {
    const {
      icon,
      title,
      content,
      buttonProps,
      isLarge,
      isOpen,
      handleClose,
    } = this.props;

    if (!isOpen) return null;
    return (
      <>
        <div
          className="lab-dialog-overlay"
          onClick={handleClose}
          role="presentation"
        />
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
          <div
            className={
              `lab-dialog lab-dialog--message` +
              `${isLarge ? ` lab-dialog--large` : ""}`
            }
            role="dialog"
            aria-modal="true"
          >
            <div className="lab-dialog__header lab-dialog__header--message">
              <button type="button" onClick={handleClose}>
                x
              </button>
            </div>
            <div className="lab-dialog__icon">
              <Icon type={icon} color="black-75" />
            </div>
            <div className="lab-dialog__title--message">{title}</div>
            <div className="lab-dialog__content--message">{content}</div>
            <Button
              size="normal"
              fullWidth
              text={buttonProps.text}
              onClick={buttonProps.onClick}
            />
          </div>
        </FocusTrap>
      </>
    );
  }
}
