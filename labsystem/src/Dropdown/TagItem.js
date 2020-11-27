/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import PropTypes from "prop-types";

import SimpleTag from "../Tags/SimpleTag";

export default class TagItem extends React.Component {
  static propTypes = {
    tagProps: PropTypes.arrayOf(
      PropTypes.exact({
        text: PropTypes.string.isRequired,
        thumbSrc: PropTypes.string,
        icon: PropTypes.oneOf([
          "arrow-down",
          "arrow-left",
          "arrow-right",
          "arrow-top",
          "calendar",
          "coin",
          "collapse-closed",
          "collapse-open",
          "check",
          "dropdown-closed",
          "dropdown-open",
          "edit",
          "eye-closed",
          "eye-opened",
          "track",
          "key",
          "logout",
          "lupe",
          "minus",
          "plus",
          "reload",
          "remove",
          "sort",
          "star",
          "trash",
          "upload",
          "arrow-fill-right",
          "arrow-fill-left",
          "chevron-right",
          "chevron-left",
          "menu-expand",
          "menu-collapse",
          "menu-default",
          "external",
          "wallet",
          "workspace",
        ]),
        isOutline: PropTypes.bool,
        skin: PropTypes.string,
        color: PropTypes.string,
      })
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    isHighlighted: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    isHighlighted: false,
    disabled: false,
  };

  constructor(props) {
    super(props);
    this.checkThumbAndIcon();
  }

  componentDidUpdate() {
    this.checkThumbAndIcon();
  }

  checkThumbAndIcon() {
    const errorMessage =
      "Dropdown TagItem can't be initialized with both `thumb` and `icon` props.";
    const {
      tagProps: { thumbSrc, icon },
    } = this.props;
    if (thumbSrc && icon) {
      throw new Error(errorMessage);
    }
  }

  render() {
    const { tagProps, onClick, disabled, isHighlighted } = this.props;

    return (
      /* We disabled eslint rules for accessibility in this file
        because we didn't find a better solution for this use case.
        Please test this carefully and try to figure out
        a better solution if things are broken. */
      <div
        onClick={!disabled ? onClick : () => {}}
        className={`lab-dropdown__tag-item
          ${isHighlighted ? " lab-dropdown__tag-item--highlighted" : ""}
          ${disabled ? " lab-dropdown__tag-item--disabled" : ""}`}
      >
        <SimpleTag
          {...tagProps[0]}
          {...(disabled ? { disabled } : undefined)}
        />
      </div>
    );
  }
}
