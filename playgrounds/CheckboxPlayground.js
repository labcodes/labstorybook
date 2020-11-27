/* eslint-disable react/jsx-fragments */
import React from "react";
import Checkbox from "../labsystem/src/Checkbox";

import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";

export default class CheckboxPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "This is a checkbox",
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
            <h3>Prop Settings</h3>
            <span className="lab-playground__item">
              <TextInput
                label="Label"
                id="label"
                value={label}
                onChange={this.handlePropString}
              />
            </span>
            <span className="lab-playground__item">
              <TextInput
                label="className"
                id="className"
                value={className}
                onChange={this.handlePropString}
              />
            </span>
            <span className="lab-playground__item">
              <p>
                <strong>Disabled</strong>
              </p>
              <Toggle name="disabled" handleToggle={this.handlePropBool} />
            </span>
            <span className="lab-playground__item">
              <Checkbox
                id="checked"
                label="Checked"
                name="checked"
                onChange={this.handlePropBool}
              />
              <Checkbox
                id="indeterminate"
                label="Indeterminate"
                name="indeterminate"
                onChange={this.handlePropBool}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
