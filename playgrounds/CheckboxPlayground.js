/* eslint-disable react/jsx-fragments */
import React from "react";
import Checkbox from "../labsystem/src/Checkbox";

export default class CheckboxPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      disabled: false,
      checked: undefined,
      indeterminate: false,
      className: undefined,
    };
  }

  handlePropString = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handlePropBool = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  render() {
    const {
      theme,
      label,
      disabled,
      checked,
      indeterminate,
      className,
    } = this.state;

    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>Checkbox</h4>
            <Checkbox
              id="checkbox-playground-item"
              name="checkbox-playground-group"
              theme={theme}
              label={label}
              {...(disabled ? { disabled } : undefined)}
              checked={checked}
              indeterminate={indeterminate}
              className={className}
              onChange={this.handleChecked}
            />
          </div>

          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <label htmlFor="label">
                Label
                <br />
                <input
                  id="label"
                  type="text"
                  label="label"
                  value={label}
                  onChange={this.handlePropString}
                />
              </label>
            </span>
            <span className="lab-playground__item">
              <label htmlFor="className">
                className
                <br />
                <input
                  id="className"
                  type="text"
                  label="className"
                  value={className}
                  onChange={this.handlePropString}
                />
              </label>
            </span>
            <br />
            <span className="lab-playground__item">
              <label htmlFor="disabled">
                Disabled
                <br />
                <input
                  id="disabled"
                  type="checkbox"
                  label="disabled"
                  checked={disabled}
                  onChange={this.handlePropBool}
                />
              </label>
            </span>
            <span className="lab-playground__item">
              <label htmlFor="checked">
                Checked
                <br />
                <input
                  id="checked"
                  type="checkbox"
                  label="checked"
                  checked={checked}
                  onChange={this.handlePropBool}
                />
              </label>
            </span>
            <span className="lab-playground__item">
              <label htmlFor="indeterminate">
                Indeterminate
                <br />
                <input
                  id="indeterminate"
                  type="checkbox"
                  label="indeterminate"
                  checked={indeterminate}
                  onChange={this.handlePropBool}
                />
              </label>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
