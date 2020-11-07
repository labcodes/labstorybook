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
      hasOutlineButton: false,
      selectedOutlineButtonText: "edit me",
      selectedOutlineButtonResponseText: "edit me",
    };

    this.state = {
      selectedTitle: this.initialState.selectedTitle,
      selectedContent: this.initialState.selectedContent,
      selectedButtonText: this.initialState.selectedButtonText,
      selectedButtonResponseText: this.initialState.selectedButtonResponseText,
      hasOutlineButton: this.initialState.hasOutlineButton,
      selectedOutlineButtonText: this.initialState.selectedOutlineButtonText,
      selectedOutlineButtonResponseText: this.initialState.selectedOutlineButtonResponseText,
    };
  }

  handleHasOutlineButtonPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({
      [id]: checked,
      selectedOutlineButtonText: this.initialState.selectedOutlineButtonText,
      selectedOutlineButtonResponseText: this.initialState.selectedOutlineButtonResponseText,
    });
  };

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
      hasOutlineButton,
      selectedOutlineButtonText,
      selectedOutlineButtonResponseText,
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
          outlineButtonProps={ hasOutlineButton ?
          {
            text: selectedOutlineButtonText,
            onClick: () => alert(selectedOutlineButtonResponseText),
          } : undefined }
        />
      </>
    );
  };

  render() {
    const { hasOutlineButton } = this.state;

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
          <br />

          <span className="lab-playground__item">
            <label htmlFor="">
              <strong>hasOutlineButton: </strong>
              <input
                id="hasOutlineButton"
                type="checkbox"
                onChange={this.handleHasOutlineButtonPropChange}
              />
            </label>
          </span>
          <br />

          { hasOutlineButton ?
            <>
            <span className="lab-playground__item">
              <label htmlFor="selectedOutlineButtonText">
                <strong>selectedOutlineButtonText:</strong>
                <br />
                <input
                  id="selectedOutlineButtonText"
                  onChange={this.handleTextPropChange}
                  placeholder="Insert outline button text"
                />
              </label>
            </span>
            <br />

            <span className="lab-playground__item">
              <label htmlFor="selectedOutlineButtonResponseText">
                <strong>selectedOutlineButtonResponseText:</strong>
                <br />
                <input
                  id="selectedOutlineButtonResponseText"
                  onChange={this.handleTextPropChange}
                  placeholder="Insert outline button response text"
                />
              </label>
            </span>
            <br />
            </>
          : undefined }

        </div>
      </div>
    );
  }
}
