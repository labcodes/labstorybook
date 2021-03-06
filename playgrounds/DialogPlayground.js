import React from "react";
import { isEmpty } from "lodash";

import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";
import { StandardDialog, MessageDialog } from "../labsystem/src/Dialog";
import { Button } from "../labsystem/src/Button";
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
      selectedIsLarge: false,
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
      windowIsSmall: undefined,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize, false);
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

  handleResize = () => {
    this.setState({ windowIsSmall: window.outerWidth <= 768 });
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
      selectedIsLarge,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <React.Fragment>
        <Button text="Open Dialog" onClick={this.showModal} />
        <Component
          icon={selectedIcon}
          title={selectedTitle}
          content={selectedContent}
          handleClose={this.handleModalClose}
          isOpen={modalIsOpen}
          isModal={selectedIsModal}
          isLarge={selectedIsLarge}
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
      selectedIsLarge,
      windowIsSmall,
    } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <span className="lab-playground__inline-item">
            <label htmlFor="currentComponent">
              Variation
              <select onChange={this.handleCurrentComponentChange}>
                {Object.keys(availableComponents).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </span>

          {currentComponent === "MessageDialog" ? (
            <span className="lab-playground__inline-item">
              <label htmlFor="selectedIcon">
                Icon
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

          <div>
            {!windowIsSmall ? (
              <React.Fragment>
                <span className="lab-playground__inline-item">
                  <fieldset>
                    <legend>isModal</legend>
                    <Toggle
                      id="selectedIsModal"
                      name="selectedIsModal"
                      label="selectedIsModal"
                      value={selectedIsModal}
                      handleToggle={this.handleBoolPropChange}
                    />
                  </fieldset>
                </span>
              </React.Fragment>
            ) : null}

            <span className="lab-playground__inline-item">
              <fieldset>
                <legend>isLarge</legend>
                <Toggle
                  id="selectedIsLarge"
                  name="selectedIsLarge"
                  label="selectedIsLarge"
                  value={selectedIsLarge}
                  handleToggle={this.handleBoolPropChange}
                />
              </fieldset>
            </span>
          </div>

          <span className="lab-playground__item">
            <TextInput
              id="selectedTitle"
              onChange={this.handleTextPropChange}
              value={selectedTitle}
              label="title"
            />
          </span>

          <span className="lab-playground__item">
            <label htmlFor="selectedContent">
              Content
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

          <span className="lab-playground__item">
            <TextInput
              id="selectedButtonText"
              onChange={this.handleTextPropChange}
              value={selectedButtonText}
              label="buttonProps.text"
            />
          </span>

          <span className="lab-playground__item">
            <TextInput
              id="selectedOutlineButtonText"
              onChange={this.handleTextPropChange}
              value={selectedOutlineButtonText}
              label="outlineButtonProps.text"
            />
          </span>
        </div>
      </div>
    );
  }
}
