import React from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";

export default class NarrowSidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element,
    vivid: PropTypes.bool,
    color: PropTypes.string,
    withScroll: PropTypes.bool,
  };

  static defaultProps = {
    children: undefined,
    vivid: false,
    color: "",
    withScroll: false,
  };

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    const { children, vivid, color, withScroll } = this.props;
    return (
      <React.Fragment>
        <div className="lab-narrow-sidebar__trigger">
          <button type="button" className="lab-narrow-sidebar__trigger-button">
            <Icon type="menu-expand" color="white" />
          </button>
        </div>
        <div className={
            `lab-narrow__overlay ` +
            `${
              this.state.isToggleOn
                ? `lab-narrow__overlay--on`
                : `lab-narrow__overlay--off`
            }`
          }
        />

        <div
          className={
            `lab-narrow-sidebar`+
            `${vivid ? ` lab-narrow-sidebar--vivid lab-narrow-sidebar--vivid--${color}` : ` ""`}`+
            `${withScroll ? ` lab-narrow-sidebar--with-scroll` : `""`}`+
            `${this.state.isToggleOn ? ` lab-narrow-sidebar--on` : ` lab-narrow-sidebar--off`}`
          }
        >
          {children}
        </div>
      </React.Fragment>
    );
  }
}
