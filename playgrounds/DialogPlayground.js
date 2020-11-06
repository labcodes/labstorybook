import React from "react";
import { isEmpty } from "lodash";

import { StandardDialog } from "../labsystem/src/Dialog";

export default class DialogPlayground extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      selectedTitle: "edit me",
      selectedContent: "edit me",
      selectedButtonText: "edit me",
      selectedButtonResponseText: "edit me",
    };

    this.state = {
      selectedTitle: this.initialState.selectedTitle,
      selectedContent: this.initialState.selectedContent,
      selectedButtonText: this.initialState.selectedButtonText,
      selectedButtonResponseText: this.initialState.selectedButtonResponseText,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  renderCurrentComponent = () => {
    const {
      selectedTitle,
      selectedContent,
      selectedButtonText,
      selectedButtonResponseText,
    } = this.state;

    return (
      <>
        <h4><strong>Standard Dialog</strong></h4>
        <StandardDialog
          title={selectedTitle}
          content={selectedContent}
          buttonProps={{
            text: selectedButtonText,
            onClick: () => alert(selectedButtonResponseText),
          }}
        />
      </>
    );
  };

  render() {
    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <span className="lab-playground__item">
            <label htmlFor="selectedTitle">
              <strong>title:</strong>
              <br />
              <input
                id="selectedTitle"
                onChange={this.handleTextPropChange}
                placeholder="Insert title"
              />
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedContent">
              <strong>content:</strong><br />
              <textarea
                id="selectedContent"
                onChange={this.handleTextPropChange}
                placeholder="Insert content"
                style={{
                  width: "100%",
                  minHeight: "100px",
                  resize: "none",
                }}
              />
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedButtonText">
              <strong>buttonText:</strong>
              <br />
              <input
                id="selectedButtonText"
                onChange={this.handleTextPropChange}
                placeholder="Insert button text"
              />
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedButtonResponseText">
              <strong>buttonResponseText:</strong>
              <br />
              <input
                id="selectedButtonResponseText"
                onChange={this.handleTextPropChange}
                placeholder="Insert button response text"
              />
            </label>
          </span>

        </div>
      </div>
    );
  }
}
