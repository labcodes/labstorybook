/* eslint-disable react/jsx-fragments */
import React from "react";
import Radio from "../labsystem/src/Radio";

export default class RadioPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label1: "",
      label2: "",
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
            <h4>Radio</h4>
            <Radio
              id="radio-playground-item1"
              name="radio-playground-group"
              theme={theme}
              label={label1}
              disabled={disabled1}
              value={label1}
              className={className}
            />
            <br />
            <Radio
              id="radio-playground-item2"
              name="radio-playground-group"
              theme={theme}
              label={label2}
              disabled={disabled2}
              value={label2}
              className={className}
            />
          </div>

          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <label htmlFor="label1">
                Label 1
                <br />
                <input
                  id="label1"
                  type="text"
                  label="label1"
                  value={label1}
                  onChange={this.handleLabel1}
                />
              </label>
            </span>
            <span className="lab-playground__item">
              <label htmlFor="label2">
                Label 2
                <br />
                <input
                  id="label2"
                  type="text"
                  label="label2"
                  value={label2}
                  onChange={this.handleLabel2}
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
                  onChange={this.handleClassName}
                />
              </label>
            </span>
            <br />
            <span className="lab-playground__item">
              <label htmlFor="disabled">
                Disabled 1
                <br />
                <input
                  id="disabled1"
                  type="checkbox"
                  label="disabled1"
                  checked={disabled1}
                  onChange={this.handleDisabled1}
                />
              </label>
            </span>
            <span className="lab-playground__item">
              <label htmlFor="disabled">
                Disabled 2
                <br />
                <input
                  id="disabled2"
                  type="checkbox"
                  label="disabled2"
                  checked={disabled2}
                  onChange={this.handleDisabled2}
                />
              </label>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
