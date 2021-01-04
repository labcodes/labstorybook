import React from "react";
import PropTypes from "prop-types";

export default class LinkAction extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["normal", "small", "large"]),
    href: PropTypes.string,
    onClick: PropTypes.func,
    openNewTab: PropTypes.bool,
  };

  static defaultProps = {
    href: "#",
    size: "normal",
    onClick: () => {},
    openNewTab: false,
  };

  render() {
    const { text, size, href, onClick, openNewTab } = this.props;

    return (
      <section className={`lab-card-link-action lab-card-link-action--${size}`}>
        <a
          href={href}
          onClick={onClick}
          {...(openNewTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : undefined)}
        >
          {text}
        </a>
      </section>
    );
  }
}
