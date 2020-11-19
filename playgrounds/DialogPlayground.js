import React from "react";

import { StandardDialog, MessageDialog } from "../labsystem/src/Dialog";
import { iconOptions } from "./assets";

export default class DialogPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedTitle: "A generic Title",
      selectedContent: "Some relevant content",
      selectedButtonText: "Click me!",
      hasOutlineButton: false,
      selectedOutlineButtonText: "Click me too!",
      selectedIcon: "star",
    };

    this.state = {
      availableComponents: {
        StandardDialog,
        MessageDialog,
      },
      currentComponent: "StandardDialog",
      ...this.initialState,
      selectedButtonResponseText: "Button has been clicked!",
      selectedOutlineButtonResponseText: "OutlineButton has been clicked!",
      modalIsOpen: false,
    };
  }

  handleCurrentComponentChange = (e) => {
    const { value } = e.target;
    this.setState({
      currentComponent: value,
      ...this.initialState,
    });
  };

  handleHasOutlineButtonPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({
      [id]: checked,
      selectedOutlineButtonText: this.initialState.selectedOutlineButtonText,
    });
  };

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleIconPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalIsOpen: false });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedTitle,
      selectedContent,
      selectedButtonText,
      hasOutlineButton,
      selectedOutlineButtonText,
      selectedButtonResponseText,
      selectedOutlineButtonResponseText,
      selectedIcon,
      modalIsOpen,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <div
          className="container"
          ref={(node) => {
            this.node = node;
          }}
        >
          <button type="button" onClick={this.showModal}>
            show Modal
          </button>
          <Component
            icon={selectedIcon}
            title={selectedTitle}
            content={selectedContent}
            handleClose={this.handleModalClose}
            isOpen={modalIsOpen}
            buttonProps={{
              text: selectedButtonText,
              onClick: () => alert(selectedButtonResponseText),
            }}
            outlineButtonProps={
              hasOutlineButton
                ? {
                    text: selectedOutlineButtonText,
                    onClick: () => alert(selectedOutlineButtonResponseText),
                  }
                : undefined
            }
          />
        </div>
      </>
    );
  };

  render() {
    const {
      availableComponents,
      currentComponent,
      hasOutlineButton,
      selectedIcon,
      selectedTitle,
      selectedContent,
      selectedButtonText,
      selectedOutlineButtonText,
    } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <span className="lab-playground__item">
            <label htmlFor="currentComponent">
              <strong>variation: </strong>
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
            <label htmlFor="selectedTitle">
              <strong>title:</strong>
              <br />
              <input
                id="selectedTitle"
                onChange={this.handleTextPropChange}
                placeholder="Insert title"
                value={selectedTitle}
              />
            </label>
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedContent">
              <strong>content:</strong>
              <br />
              <textarea
                id="selectedContent"
                onChange={this.handleTextPropChange}
                placeholder="Insert content"
                value={selectedContent}
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
                value={selectedButtonText}
              />
            </label>
          </span>
          <br />

          {currentComponent !== "MessageDialog" ? (
            <div>
              <span className="lab-playground__item">
                <label htmlFor="hasOutlineButton">
                  <strong>hasOutlineButton: </strong>
                  <input
                    id="hasOutlineButton"
                    type="checkbox"
                    onChange={this.handleHasOutlineButtonPropChange}
                  />
                </label>
              </span>
              <br />

              {hasOutlineButton ? (
                <span className="lab-playground__item">
                  <label htmlFor="selectedOutlineButtonText">
                    <strong>outlineButtonText:</strong>
                    <br />
                    <input
                      id="selectedOutlineButtonText"
                      onChange={this.handleTextPropChange}
                      placeholder="Insert outline button text"
                      value={selectedOutlineButtonText}
                    />
                  </label>
                </span>
              ) : null}
            </div>
          ) : (
            <span className="lab-playground__item">
              <label htmlFor="selectedIcon">
                <strong>icon: </strong>
                <br />
                <select
                  id="selectedIcon"
                  value={selectedIcon}
                  onChange={this.handleIconPropChange}
                >
                  {iconOptions.slice(1).map((item) => (
                    <option value={item} key={`icon-${item}`}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </span>
          )}
        </div>
      </div>
    );
  }
}
