import React from "react";
import PropTypes from "prop-types";

export default class Dropdown extends React.Component {
  static propTypes = {
    direction: PropTypes.oneOf(["down", "up"]),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    isMultiSelect: PropTypes.bool,
    children: PropTypes.node.isRequired,
    renderTrigger: PropTypes.func.isRequired,
  };

  static defaultProps = {
    direction: "down",
    onOpen: undefined,
    onClose: undefined,
    isMultiSelect: true,
  };

  constructor(props) {
    super(props);
    const { itemIndexes, itemsLength } = this.getItemIndexesAndLength();
    this.state = {
      isOpen: false,
      highlightedItem: 0,
      itemsLength,
      itemIndexes,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      const { itemIndexes, itemsLength } = this.getItemIndexesAndLength();

      this.setState({
        highlightedItem: 0,
        itemsLength,
        itemIndexes,
      });
    }
  }

  getItemIndexesAndLength = () => {
    const { children } = this.props;
    const itemIndexes = children
      .map((component, i) =>
        component &&
        ["Item", "TagItem", "Checkbox"].includes(component.type.name) &&
        !component.props.disabled
          ? i
          : undefined
      )
      .filter((i) => i != null);

    const itemsLength = itemIndexes.length;

    return { itemIndexes, itemsLength };
  };

  handleKeyUp = (e) => {
    const { highlightedItem, itemsLength } = this.state;

    if (e.keyCode === 40) {
      // down arrow
      this.setState({
        highlightedItem:
          highlightedItem + 1 === itemsLength
            ? highlightedItem
            : highlightedItem + 1,
      });
    } else if (e.keyCode === 38) {
      // up arrow
      this.setState({
        highlightedItem: highlightedItem ? highlightedItem - 1 : 0,
      });
    }

    if (e.keyCode === 27) {
      // esc key
      this.closeDropdown();
    }
    if (e.keyCode === 13) {
      // enter key
      this.openDropdown();
    }
  };

  openDropdown = () => {
    if (this.props.onOpen) {
      this.props.onOpen();
    }
    this.setState({ isOpen: true });
  };

  closeDropdown = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, highlightedItem, itemIndexes } = this.state;
    const { renderTrigger, children, direction } = this.props;
    const { openDropdown, closeDropdown, handleKeyUp } = this;

    return (
      <div className="lab-dropdown">
        {React.cloneElement(renderTrigger(), {
          onFocus: openDropdown,
          onBlur: closeDropdown,
          onKeyUp: handleKeyUp,
        })}
        {isOpen ? (
          <div
            className={`lab-dropdown__items-container lab-dropdown__items-container--${direction}`}
          >
            {children.map(
              (element, i) =>
                element &&
                React.cloneElement(element, {
                  isHighlighted: i === itemIndexes[highlightedItem],
                  key: i,
                })
            )}
          </div>
        ) : null}
      </div>
    );
  }
}
