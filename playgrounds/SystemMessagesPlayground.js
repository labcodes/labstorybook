import React from "react";
import { isEmpty } from "lodash";

import Banner from "../labsystem/src/Banner";
import Alert from "../labsystem/src/Alert";

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
    };
  }

  renderCurrentComponent = () => {
    const { availableComponents, currentComponent, selectedText } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <Component text={selectedText} icon="lupe" />
      </>
    );
  };

  handleCurrentComponentChange = (e) => {
    const { value } = e.target;
    this.setState({
      currentComponent: value,
    });
  };

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  render() {
    const { availableComponents } = this.state;

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
        </div>
      </div>
    );
  }
}
