/* eslint-disable react/jsx-fragments */
import React from "react";
import Radio from "../labsystem/src/Radio";

import TextInput from "../labsystem/src/Input/TextInput";
import Checkbox from "../labsystem/src/Checkbox";

export default class RadioPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label1: "Option 1",
      label2: "Option 2",
      disabled1: false,
      disabled2: false,
      className: undefined,
    };
  }

  handleLabel1 = (event) => {
    this.setState({ label1: event.target.value });
  };

  handleLabel2 = (event) => {
    this.setState({ label2: event.target.value });
  };

  handleClassName = (event) => {
    this.setState({ className: event.target.value });
  };

  handleDisabled1 = () => {
    const { disabled1 } = this.state;
    this.setState({ disabled1: !disabled1 });
  };

  handleDisabled2 = () => {
    const { disabled2 } = this.state;
    this.setState({ disabled2: !disabled2 });
  };

  render() {
    const {
      theme,
      label1,
      label2,
      disabled1,
      disabled2,
      className,
    } = this.state;

    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <fieldset>
              <Radio
                id="radio-playground-item1"
                name="radio-playground-group"
                theme={theme}
                label={label1}
                disabled={disabled1}
                value={label1}
                className={className}
              />
              <Radio
                id="radio-playground-item2"
                name="radio-playground-group"
                theme={theme}
                label={label2}
                disabled={disabled2}
                value={label2}
                className={className}
              />
            </fieldset>
          </div>

          <div className="column lab-playground__configs">
            <h3>Prop Settings</h3>
            <span className="lab-playground__item">
              <TextInput
                label="Option 1 Label"
                id="label1"
                value={label1}
                onChange={this.handleLabel1}
              />
            </span>
            <span className="lab-playground__item">
              <TextInput
                label="Option 2 Label"
                id="label2"
                value={label2}
                onChange={this.handleLabel2}
              />
            </span>
            <span className="lab-playground__item">
              <TextInput
                label="className"
                id="className"
                value={className}
                onChange={this.handleClassName}
              />
            </span>
            <span className="lab-playground__item">
              <fieldset>
                <Checkbox
                  id="disabled1"
                  label="Disable Option 1"
                  name="disabled"
                  onChange={this.handleDisabled1}
                />
                <Checkbox
                  id="disabled2"
                  label="Disable Option 2"
                  name="checked"
                  onChange={this.handleDisabled2}
                />
              </fieldset>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
