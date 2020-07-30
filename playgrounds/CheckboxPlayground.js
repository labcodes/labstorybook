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

  handleLabel = (e) => {
    this.setState({ label: e.target.value });
  };

  handleClassName = (e) => {
    this.setState({ className: e.target.value });
  };

  handleDisabled = () => {
    const { disabled } = this.state;
    this.setState({ disabled });
  };

  handleChecked = () => {
    const { checked } = this.state;
    this.setState({ checked });
  };

  handleIndeterminate = () => {
    const { indeterminate } = this.state;
    this.setState({ indeterminate });
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
              disabled={disabled}
              checked={checked}
              indeterminate={indeterminate}
              className={className}
              onChange={this.handleChecked}
            />
          </div>

          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <label htmlFor="label">Label</label>
              <br />
              <input
                id="label"
                type="text"
                label="label"
                value={label}
                onChange={this.handleLabel}
              />{" "}
            </span>
            <span className="lab-playground__item">
              <label htmlFor="className">className</label>
              <br />
              <input
                id="className"
                type="text"
                label="className"
                value={className}
                onChange={this.handleClassName}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <label htmlFor="disabled">Disabled</label>
              <br />
              <input
                id="disabled"
                type="checkbox"
                label="disabled"
                checked={disabled}
                onChange={this.handleDisabled}
              />
            </span>
            <span className="lab-playground__item">
              <label htmlFor="checked">Checked</label>
              <br />
              <input
                id="defaultIndeterminate"
                type="checkbox"
                label="checked"
                checked={checked}
                onChange={this.handleChecked}
              />
            </span>
            <span className="lab-playground__item">
              <label htmlFor="indeterminate">Indeterminate</label>
              <br />
              <input
                id="indeterminate"
                type="checkbox"
                label="indeterminate"
                checked={indeterminate}
                onChange={this.handleIndeterminate}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
