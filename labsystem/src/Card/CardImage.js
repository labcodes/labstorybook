import React from "react";
import PropTypes from "prop-types";

export default class CardImage extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    isOverflowed: PropTypes.bool,
  };

  static defaultProps = {
    isOverflowed: false,
  };

  render() {
    const { src, alt, isOverflowed } = this.props;

    return (
      <img
        className={`lab-card-image${
          isOverflowed ? " lab-card-image--overflowed" : ""
        }`}
        src={src}
        alt={alt}
      />
    );
  }
}
