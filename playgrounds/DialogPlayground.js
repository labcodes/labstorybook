import React from "react";
import { isEmpty } from "lodash";

import TextInput from "../labsystem/src/Input/TextInput";
import Checkbox from "../labsystem/src/Checkbox";
import { StandardDialog, MessageDialog } from "../labsystem/src/Dialog";
import { Button } from "../labsystem/src/Buttons";
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
      selectedIsModal: false,
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

  handleBoolPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({
      [id]: checked,
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
      selectedOutlineButtonText,
      selectedButtonResponseText,
      selectedOutlineButtonResponseText,
      selectedIcon,
      modalIsOpen,
      selectedIsModal,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        <Button text="Show Modal" onClick={this.showModal} />
        <Component
          icon={selectedIcon}
          title={selectedTitle}
          content={selectedContent}
          handleClose={this.handleModalClose}
          isOpen={modalIsOpen}
          isModal={selectedIsModal}
          buttonProps={{
            text: selectedButtonText,
            onClick: () => alert(selectedButtonResponseText),
          }}
          outlineButtonProps={
            !isEmpty(selectedOutlineButtonText)
              ? {
                  text: selectedOutlineButtonText,
                  onClick: () => alert(selectedOutlineButtonResponseText),
                }
              : undefined
          }
        />
      </React.Fragment>
    );
  };

  render() {
    const {
      availableComponents,
      currentComponent,
      selectedIcon,
      selectedTitle,
      selectedContent,
      selectedButtonText,
      selectedOutlineButtonText,
      selectedIsModal,
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
            <TextInput
              id="selectedTitle"
              onChange={this.handleTextPropChange}
              value={selectedTitle}
              label="title"
            />
          </span>
          <br />

          <span className="lab-playground__item">
            <label htmlFor="selectedContent">
              <strong>content:</strong>
              <br />
              <textarea
                id="selectedContent"
                onChange={this.handleTextPropChange}
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
            <TextInput
              id="selectedButtonText"
              onChange={this.handleTextPropChange}
              value={selectedButtonText}
              label="buttonProps.text"
            />
          </span>
          <br />

          <span className="lab-playground__item">
            <TextInput
              id="selectedOutlineButtonText"
              onChange={this.handleTextPropChange}
              value={selectedOutlineButtonText}
              label="outlineButtonProps.text"
            />
          </span>
          <br />

          <span className="lab-playground__item">
            <Checkbox
              id="selectedIsModal"
              onChange={this.handleBoolPropChange}
              checked={selectedIsModal}
              label="isModal"
            />
          </span>
          <br />

          {currentComponent === "MessageDialog" ? (
            <span className="lab-playground__item">
              <label htmlFor="selectedIcon">
                <strong>icon: </strong>
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
          ) : null}
        </div>
      </div>
    );
  }
}
