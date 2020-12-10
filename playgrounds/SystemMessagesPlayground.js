import React from "react";
import { isEmpty, upperCase } from "lodash";

import Banner from "../labsystem/src/Banner";
import Alert from "../labsystem/src/Alert";
import { iconOptions } from "./assets";

import TextInput from "../labsystem/src/Input/TextInput";

export default class SystemMessagesPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: {
        Banner,
        Alert,
      },
      currentComponent: "Banner",

      selectedText: "This is a system message",
      selectedIcon: "eye-opened",
      selectedButtonText: "",
    };
  }

  handleCurrentComponentChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
    });
  };

  handleTextPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  handleButtonTextPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: upperCase(value) });
  };

  handleIconPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  handleButtonTextPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: upperCase(value) });
  };

  handleIconPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedIcon,
      selectedButtonText,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <Component
          text={selectedText}
          icon={selectedIcon}
          buttonProps={{
            text: selectedButtonText,
            onClick: () => {
              alert(`Button to ${selectedButtonText} was clicked!`);
            },
          }}
        />
      </React.Fragment>
    );
  };

  render() {
    const { availableComponents, selectedIcon } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h3>Prop Settings</h3>

          <span className="lab-playground__item">
            <label htmlFor="currentComponent">
              <strong>type: </strong>
              <select onChange={this.handleCurrentComponentChange}>
                {Object.keys(availableComponents).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </span>

          <span className="lab-playground__item">
            <label htmlFor="selectedIcon">
              <strong>Icon: </strong>
              <select
                id="selectedIcon"
                value={selectedIcon}
                onChange={this.handleIconPropChange}
              >
                {iconOptions.slice(1, iconOptions.length).map((item) => (
                  <option value={item} key={`icon-${item}`}>
                    {!isEmpty(item) ? item : "none"}
                  </option>
                ))}
              </select>
            </label>
          </span>

          <span className="lab-playground__item">
            <TextInput
              label="Message"
              id="selectedText"
              defaultValue="This is a system message"
              onChange={this.handleTextPropChange}
            />
          </span>

          <span className="lab-playground__item">
            <TextInput
              label="Button text"
              id="selectedButtonText"
              onChange={this.handleButtonTextPropChange}
            />
          </span>
        </div>
      </div>
    );
  }
}
