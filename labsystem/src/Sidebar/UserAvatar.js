import React from "react";
import PropTypes from "prop-types";

export default class UserAvatar extends React.Component {
  static propTypes = {
    avatarSrc: PropTypes.string,
    altText: PropTypes.string,
    caption: PropTypes.string,
  };

  static defaultProps = {
    avatarSrc: undefined,
    altText: undefined,
    caption: undefined,
  };

  render() {
    const { avatarSrc, altText, caption, } = this.props;
    return (
      <div className="lab-narrow-sidebar__avatar">
        <span className="lab-narrow-sidebar__avatar-photo" />
        <div className="lab-narrow-sidebar__avatar-text">
          <span>{altText}</span>
          <span className="lab-narrow-sidebar__avatar-caption">{caption}</span>
        </div> 
      </div>
    );
  }
}