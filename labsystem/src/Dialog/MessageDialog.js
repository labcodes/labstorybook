import React from "react";
import PropTypes from "prop-types";
import { Button } from "../Buttons";

export default class MessageDialog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  };

  render() {
    const {
      title,
      content,
    } = this.props;

    return (
      <div className="lab-dialog lab-dialog--message">
        <div className="lab-dialog--message__header-wrapper">
          <div className="lab-dialog__close-button--without-background">close button</div>
        </div>
        <div className="lab-dialog--message__icon">icon</div>
        <div className="lab-dialog--message__title">{title}</div>
        <div className="lab-dialog--message__content">{content}</div>
        <div className="lab-dialog--message__button">
          <Button
            size="normal"
            fullWidth={true}
            text={"click me!"}
            onClick={() => {}}
          />
        </div>
      </div>
    );
  }
}
