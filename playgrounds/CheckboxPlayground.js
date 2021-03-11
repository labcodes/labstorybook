/* eslint-disable react/jsx-fragments */
import React from "react";

import Radio from "../labsystem/src/Radio";
import Checkbox from "../labsystem/src/Checkbox";
import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";

export default class CheckboxPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "This is a checkbox",
      disabled: false,
      appearance: "unchecked",
      className: undefined,
    };
  }

  handlePropString = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handlePropBool = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  };

  handleAppearance = (event) => {
    const { value } = event.target;
    this.setState({ appearance: value });
  };

  render() {
    const { theme, label, disabled, appearance, className } = this.state;

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
              checked={appearance !== "unchecked"}
              indeterminate={appearance === "indeterminate"}
              className={className}
              onChange={this.handleChecked}
            />
          </div>

          <div className="column lab-playground__configs">
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
              <fieldset>
                <legend>Disabled</legend>
                <Toggle
                  id="disabled"
                  name="disabled"
                  value={disabled}
                  handleToggle={this.handlePropBool}
                />
              </fieldset>
            </span>
            <span className="lab-playground__item">
              <fieldset>
                <legend>Appearance</legend>
                <Radio
                  id="unchecked"
                  name="appearance"
                  label="Unchecked"
                  value="unchecked"
                  checked={appearance === "unchecked"}
                  onChange={this.handleAppearance}
                />
                <Radio
                  id="checked"
                  name="appearance"
                  label="Checked"
                  value="checked"
                  checked={appearance === "checked"}
                  onChange={this.handleAppearance}
                />
                <Radio
                  id="indeterminate"
                  name="appearance"
                  label="Indeterminate"
                  value="indeterminate"
                  checked={appearance === "indeterminate"}
                  onChange={this.handleAppearance}
                />
              </fieldset>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
