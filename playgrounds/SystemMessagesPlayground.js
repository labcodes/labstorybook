import React from "react";
import { isEmpty, upperCase } from "lodash";

import Banner from "../labsystem/src/Banner";
import Alert from "../labsystem/src/Alert";
import { iconOptions } from "./assets";

import Radio from "../labsystem/src/Radio";
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
      selectedType: "info",
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

  handleType = (event) => {
    const { value } = event.target;
    this.setState({ selectedType: value });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedIcon,
      selectedButtonText,
      selectedType,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <Component
          text={selectedText}
          icon={selectedIcon}
          type={selectedType}
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
    const { currentComponent, selectedIcon, selectedType } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <span className="lab-playground__item">
            <fieldset>
              <legend>Variation</legend>
              <Radio
                id="Banner"
                name="variation"
                label="Banner"
                value="Banner"
                checked={currentComponent === "Banner"}
                onChange={this.handleCurrentComponentChange}
              />
              <Radio
                id="Alert"
                name="variation"
                label="Alert"
                value="Alert"
                checked={currentComponent === "Alert"}
                onChange={this.handleCurrentComponentChange}
              />
            </fieldset>
          </span>

          <span className="lab-playground__item">
            <fieldset>
              <legend>Type</legend>
              <Radio
                id="info"
                name="type"
                label="info"
                value="info"
                checked={selectedType === "info"}
                onChange={this.handleType}
              />
              <Radio
                id="warn"
                name="type"
                label="warn"
                value="warn"
                checked={selectedType === "warn"}
                onChange={this.handleType}
              />
              <Radio
                id="error"
                name="type"
                label="error"
                value="error"
                checked={selectedType === "error"}
                onChange={this.handleType}
              />
            </fieldset>
          </span>

          <span className="lab-playground__item">
            <label htmlFor="selectedIcon">
              Icon
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
