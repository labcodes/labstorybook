import React from "react";
import PropTypes, { string, number, bool } from "prop-types";
import { isUndefined } from "lodash";

import Icon from "./Icon";

// Checkbox //

export default class Checkbox extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.oneOfType([string, number, bool]),
    indeterminate: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    checked: undefined,
    value: null,
    indeterminate: false,
    defaultChecked: undefined,
    className: undefined,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    const { defaultChecked, checked, id } = props;
    if (!isUndefined(defaultChecked) && !isUndefined(checked)) {
      // eslint-disable-next-line no-console
      console.warn(
        `You are setting both checked and defaultChecked for input ${id} at the same time. We always initialize the checkbox with defaultChecked. Make sure this is the behaviour you want.`
      );
    }

    let localChecked = false;
    if (defaultChecked) {
      localChecked = defaultChecked;
    } else if (!isUndefined(checked)) {
      localChecked = checked;
    }

    this.state = {
      localChecked,
    };

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.checkIndeterminate();
  }

  componentDidUpdate(prevProps) {
    const { checked } = this.props;

    if (checked !== prevProps.checked) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => ({ localChecked: checked }));
    }

    this.checkIndeterminate();
  }

  checkIndeterminate = () => {
    const { indeterminate } = this.props;
    this.inputRef.current.indeterminate = indeterminate;
  };

  handleOnChange = (event) => {
    const { onChange } = this.props;
    if (!isUndefined(onChange)) {
      onChange(event);
    }

    this.setState((state) => ({ localChecked: !state.localChecked }));
  };

  render() {
    const {
      id,
      name,
      className,
      label,
      disabled,
      indeterminate,
      value,
    } = this.props;

    const { localChecked } = this.state;

    return (
      <React.Fragment>
        <input
          className={`lab-checkbox ${className || ""}`}
          type="checkbox"
          ref={this.inputRef}
          id={id}
          name={name}
          checked={localChecked}
          onChange={this.handleOnChange}
          {...(value ? { value } : undefined)}
          {...(disabled ? { disabled } : undefined)}
        />
        <label className="lab-checkbox__label" htmlFor={id}>
          <span className="lab-checkbox__box">
            {localChecked || indeterminate ? (
              <Icon
                type={indeterminate ? "minus" : "check"}
                color={disabled ? "mineral-40" : "white"}
                size="small"
              />
            ) : null}
          </span>
          {label}
        </label>
      </React.Fragment>
    );
  }
}
