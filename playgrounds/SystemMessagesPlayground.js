import React from "react";
import { isEmpty, upperCase } from "lodash";

import Banner from "../labsystem/src/Banner";
import Alert from "../labsystem/src/Alert";
import { iconOptions } from "./assets";

export default class SystemMessagesPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: {
        Banner,
        Alert,
      },
      currentComponent: "Banner",

      selectedText: "edit me",
      selectedIcon: "arrow-down",
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
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
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
        <div className="column lab-plyground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

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
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedText">
              <strong>text: </strong>
              <input
                id="selectedText"
                onChange={this.handleTextPropChange}
                placeholder="Insert text"
              />
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedIcon">
              <strong>icon: </strong>
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
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedButtonText">
              <strong>buttonText: </strong>
              <input
                id="selectedButtonText"
                onChange={this.handleButtonTextPropChange}
                placeholder="Inser text"
              />
            </label>
          </span>
        </div>
      </div>
    );
  }
}
