import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import { SimpleTag } from "../Tags";

export default class CardHeader extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitle: PropTypes.string,
    subtitleClassName: PropTypes.string,
    categoryText: PropTypes.string,
    categoryLabelText: PropTypes.string,
    categoryIcon: PropTypes.string,
    categoryColor: PropTypes.oneOf(["mineral", "teal", "purple"]),
    isOverlay: PropTypes.bool,
  };

  static defaultProps = {
    title: undefined,
    titleClassName: undefined,
    subtitle: undefined,
    subtitleClassName: undefined,
    categoryText: undefined,
    categoryLabelText: undefined,
    categoryIcon: undefined,
    categoryColor: undefined,
    isOverlay: undefined,
  };

  constructor(props) {
    super(props);
    this.checkColorAndIcon(props);
  }

  componentDidUpdate() {
    this.checkColorAndIcon(this.props);
  }

  checkColorAndIcon = (props) => {
    const { categoryColor, categoryIcon } = props;
    if (categoryIcon && categoryColor) {
      throw Error(
        "A CardHeader can't have both `categoryColor` and `categoryIcon`. Please choose one of them."
      );
    }
  };

  render() {
    const {
      title,
      titleClassName,
      subtitle,
      subtitleClassName,
      categoryText,
      categoryLabelText,
      categoryIcon,
      categoryColor,
      isOverlay,
    } = this.props;

    return (
      <article
        className={`lab-card-header${
          isOverlay ? " lab-card-header--overlay" : ""
        }`}
      >
        {categoryIcon || categoryColor || categoryText || categoryLabelText ? (
          <p className="lab-card-header__category">
            {categoryIcon ? <Icon type={categoryIcon} size="petit" /> : null}
            {categoryColor ? (
              <span
                className={`lab-card-category-color lab-card-category-color--${categoryColor}`}
              />
            ) : null}
            {categoryText ? (
              <span className="lab-card-category-text">{categoryText}</span>
            ) : null}
            {categoryLabelText ? <SimpleTag text={categoryLabelText} /> : null}
          </p>
        ) : null}
        {title ? (
          <p
            className={`lab-card-header__title${
              titleClassName ? ` ${titleClassName}` : ""
            }`}
          >
            {title}
          </p>
        ) : null}
        {subtitle ? (
          <p
            className={`lab-card-header__subtitle${
              subtitleClassName ? ` ${subtitleClassName}` : ""
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </article>
    );
  }
}
