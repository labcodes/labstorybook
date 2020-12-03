import React from "react";
import PropTypes from "prop-types";
import FocusTrap from "focus-trap-react";

export default class DialogWrapper extends React.Component {
  static propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isModal: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    const { isOpen, isModal } = props;
    const deviceIsMobile = window.outerWidth <= 768;
    this.state = {
      shouldToggleOverflow: isOpen && (isModal || deviceIsMobile),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    this.handleOverflow();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
    document.body.style.overflow = "unset";
  }

  handleOverflow = () => {
    const { shouldToggleOverflow } = this.state;
    document.body.style.overflow = shouldToggleOverflow ? "hidden" : "unset";
  };

  handleResize = () => {
    const { isOpen, isModal } = this.props;
    const deviceIsMobile = window.outerWidth <= 768;
    this.setState({
      shouldToggleOverflow: isOpen && (isModal || deviceIsMobile),
    });
  };

  render() {
    const { handleClose, children } = this.props;
    const { shouldToggleOverflow } = this.state;
    return (
      <React.Fragment>
        {shouldToggleOverflow ? (
          <React.Fragment>
            <div
              className="lab-dialog-overlay"
              onClick={handleClose}
              role="presentation"
            />
            <FocusTrap focusTrapOptions={{ allowOutsideClick: true }}>
              {children}
            </FocusTrap>
          </React.Fragment>
        ) : (
          <React.Fragment>{children}</React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
