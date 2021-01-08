import React from "react";
import { isEmpty } from "lodash";

import TextInput from "../labsystem/src/Input/TextInput";
import Checkbox from "../labsystem/src/Checkbox";

import {
  SimpleTag,
  TogglableTag,
  RemovableTag,
  DropdownTag,
} from "../labsystem/src/Tags";
import {
  colorOptions,
  skinOptions,
  iconOptions,
  thumbSrcOptions,
} from "./assets";

export default class TagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      selectedText: "edit me",
      selectedColor: "mineral",
      selectedSkin: "pale",
      selectedIsDisabled: false,
      selectedAriaDisabled: false,
      selectedIsOutline: false,
      selectedIcon: "",
      selectedThumbSrc: "",
      removableTagIsOn: true,
      togglableTagIsOn: false,
    };

    this.state = {
      availableComponents: {
        SimpleTag,
        TogglableTag,
        RemovableTag,
        DropdownTag,
      },
      currentComponent: "SimpleTag",
      ...this.initialState,
      isIconInputDisabled: false,
      isThumbSrcInputDisabled: false,
    };
  }

  handleCurrentComponentChange = (event) => {
    const { value } = event.target;
    this.setState({
      currentComponent: value,
      ...this.initialState,
    });
  };

  handleTextPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  handleBoolPropChange = (event) => {
    const { id, checked } = event.target;
    this.setState({ [id]: checked });
  };

  handleIconPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    // Deactivate `thumb` if has an `icon`
    this.setState({ isThumbSrcInputDisabled: !isEmpty(value) });
  };

  handleThumbSrcPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
    // Deactivate `icon` if has a `thumbSrc`
    this.setState({ isIconInputDisabled: !isEmpty(value) });
  };

  handleRemoveTag = () => {
    const { removableTagIsOn } = this.state;
    this.setState({ removableTagIsOn: !removableTagIsOn });
  };

  handleToggleTag = () => {
    const { togglableTagIsOn } = this.state;
    this.setState({ togglableTagIsOn: !togglableTagIsOn });
  };

  handleRestoreRemovableTag = () => {
    this.setState({ removableTagIsOn: true });
  };

  renderCurrentComponent = () => {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedColor,
      selectedSkin,
      selectedIsDisabled,
      selectedAriaDisabled,
      selectedIsOutline,
      selectedIcon,
      selectedThumbSrc,
      removableTagIsOn,
      togglableTagIsOn,
    } = this.state;
    const Component = availableComponents[currentComponent];

    const handleClick =
      currentComponent === "RemovableTag"
        ? this.handleRemoveTag
        : this.handleToggleTag;

    return (
      <React.Fragment>
        {removableTagIsOn ? (
          <Component
            text={selectedText}
            color={selectedColor}
            skin={selectedSkin}
            disabled={selectedIsDisabled}
            ariaDisabled={selectedAriaDisabled}
            isOutline={selectedIsOutline}
            icon={selectedIcon}
            thumbSrc={selectedThumbSrc}
            isOn={togglableTagIsOn}
            onClick={handleClick}
          />
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };

  render() {
    const {
      availableComponents,
      currentComponent,
      selectedText,
      selectedIcon,
      selectedThumbSrc,
      isIconInputDisabled,
      isThumbSrcInputDisabled,
      selectedIsDisabled,
      selectedAriaDisabled,
    } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>

        <div className="column lab-playground__configs">
          <h3>Prop Settings</h3>

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

          <span className="lab-playground__item">
            <TextInput
              label="Text"
              id="selectedText"
              value={selectedText}
              onChange={this.handleTextPropChange}
            />
          </span>

          <span className="lab-playground__item">
            <label htmlFor="selectedColor">
              <strong>color: </strong>
              <select id="selectedColor" onChange={this.handleTextPropChange}>
                {colorOptions.map((item) => (
                  <option value={item} key={`color-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>

          {currentComponent !== "TogglableTag" ? (
            <span className="lab-playground__item">
              <label htmlFor="selectedSkin">
                <strong>skin: </strong>
                <select id="selectedSkin" onChange={this.handleTextPropChange}>
                  {skinOptions.map((item) => (
                    <option value={item} key={`skin-${item}`}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </span>
          ) : null}
          <br />

          <span className="lab-playground__item">
            <fieldset>
              <Checkbox
                id="selectedAriaDisabled"
                label="AriaDisabled"
                name="selectedAriaDisabled"
                value={selectedAriaDisabled}
                onChange={this.handleBoolPropChange}
              />
              <Checkbox
                id="selectedIsDisabled"
                label="Disabled"
                name="disabled"
                value={selectedIsDisabled}
                onChange={this.handleBoolPropChange}
              />
              {currentComponent !== "TogglableTag" ? (
                <Checkbox
                  id="selectedIsOutline"
                  label="isOutline"
                  name="isOutline"
                  onChange={this.handleBoolPropChange}
                />
              ) : null}
            </fieldset>
          </span>

          {currentComponent !== "TogglableTag" ? (
            <span className="lab-playground__item">
              <label htmlFor="selectedIcon">
                <strong>icon: </strong>
                <select
                  id="selectedIcon"
                  value={selectedIcon}
                  onChange={this.handleIconPropChange}
                  disabled={isIconInputDisabled}
                >
                  {iconOptions.map((item) => (
                    <option value={item} key={`icon-${item}`}>
                      {!isEmpty(item) ? item : "none"}
                    </option>
                  ))}
                </select>
              </label>
            </span>
          ) : null}

          {currentComponent !== "TogglableTag" &&
          currentComponent !== "DropdownTag" ? (
            <span className="lab-playground__item">
              <label htmlFor="selectedThumbSrc">
                <strong>thumbSrc: </strong>
                <select
                  id="selectedThumbSrc"
                  value={selectedThumbSrc}
                  onChange={this.handleThumbSrcPropChange}
                  disabled={isThumbSrcInputDisabled}
                >
                  {thumbSrcOptions.map((item, index) => (
                    <option value={item} key={`thumbSrc-${item}`}>
                      {!isEmpty(item) ? `Option ${index}` : "none"}
                    </option>
                  ))}
                </select>
              </label>
            </span>
          ) : null}

          {currentComponent === "RemovableTag" ? (
            <span className="lab-playground__item">
              <button type="button" onClick={this.handleRestoreRemovableTag}>
                <strong>Restore</strong>
              </button>
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
