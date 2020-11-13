import React from "react";
import PropTypes from "prop-types";
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
  };

  render() {
    const { icon, title, content, buttonProps } = this.props;

    return (
      <div className="lab-dialog lab-dialog--message">
        <div className="lab-dialog--message__header-wrapper">
          <div className="lab-dialog__close-button--without-background">
            close button
          </div>
        </div>
        <div className="lab-dialog--message__icon">
          <Icon type={icon} color="black-75" />
        </div>
        <div className="lab-dialog--message__title">{title}</div>
        <div className="lab-dialog--message__content">{content}</div>
        <div className="lab-dialog--message__button">
          <Button
            size="normal"
            fullWidth
            text={buttonProps.text}
            onClick={buttonProps.onClick}
          />
        </div>
      </div>
    );
  }
}
