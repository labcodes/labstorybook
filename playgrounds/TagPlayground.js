import React from "react";
import { isEmpty } from "lodash";

import TextInput from "../labsystem/src/Input/TextInput";
import Toggle from "../labsystem/src/Toggle";
import Radio from "../labsystem/src/Radio";

import { Button } from "../labsystem/src/Button";
import {
  SimpleTag,
  TogglableTag,
  RemovableTag,
  DropdownTag,
} from "../labsystem/src/Tags";
import { colorOptions, iconOptions } from "./assets";

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
      selectedThumbSrc: "none",
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

  handleRadioPropChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleIconPropChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
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
            icon={
              selectedThumbSrc === "icon" &&
              currentComponent !== "TogglableTag" &&
              selectedIcon
                ? selectedIcon
                : undefined
            }
            thumbSrc={
              selectedThumbSrc === "thumbnail"
                ? "https://avatars3.githubusercontent.com/u/1887591?s=400&u=ba45b6433752099210bf180b4448fb82e015c3a8&v=4"
                : undefined
            }
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
      selectedColor,
      selectedIcon,
      selectedSkin,
      selectedThumbSrc,
      isIconInputDisabled,
      selectedIsDisabled,
      selectedAriaDisabled,
      selectedIsOutline,
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
              <select
                id="selectedColor"
                value={selectedColor}
                onChange={this.handleTextPropChange}
              >
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
              <fieldset>
                <legend>Skin</legend>
                <Radio
                  id="pale"
                  name="selectedSkin"
                  label="Pale"
                  value="pale"
                  checked={selectedSkin === "pale"}
                  onChange={this.handleRadioPropChange}
                />
                <Radio
                  id="vivid"
                  name="selectedSkin"
                  label="Vivid"
                  value="vivid"
                  checked={selectedSkin === "vivid"}
                  onChange={this.handleRadioPropChange}
                />
              </fieldset>
            </span>
          ) : null}

          <span className="lab-playground__item">
            <span className="lab-playground__item">
              {currentComponent !== "SimpleTag" ? (
                <React.Fragment>
                  <p>
                    <strong>Disabled</strong>
                  </p>
                  <Toggle
                    name="selectedIsDisabled"
                    handleToggle={this.handleBoolPropChange}
                    value={selectedIsDisabled}
                  />
                  <p>
                    <strong>AriaDisabled</strong>
                  </p>
                  <Toggle
                    name="selectedAriaDisabled"
                    handleToggle={this.handleBoolPropChange}
                    value={selectedAriaDisabled}
                  />
                </React.Fragment>
              ) : null}
              <p>
                <strong>isOutline</strong>
              </p>
              <Toggle
                name="selectedIsOutline"
                handleToggle={this.handleBoolPropChange}
                value={selectedIsOutline}
              />
            </span>
          </span>

          {currentComponent !== "TogglableTag" &&
          currentComponent !== "DropdownTag" ? (
            <>
              <span className="lab-playground__item">
                <fieldset>
                  <legend>Left element</legend>
                  <Radio
                    id="none"
                    name="selectedThumbSrc"
                    label="None"
                    value="none"
                    checked={selectedThumbSrc === "none"}
                    onChange={this.handleRadioPropChange}
                  />
                  <Radio
                    id="thumbnail"
                    name="selectedThumbSrc"
                    label="Thumbnail"
                    value="thumbnail"
                    checked={selectedThumbSrc === "thumbnail"}
                    onChange={this.handleRadioPropChange}
                  />
                  {currentComponent !== "TogglableTag" ? (
                    <Radio
                      id="icon"
                      name="selectedThumbSrc"
                      label="Icon"
                      value="icon"
                      checked={selectedThumbSrc === "icon"}
                      onChange={this.handleRadioPropChange}
                    />
                  ) : null}
                </fieldset>
              </span>
              {currentComponent !== "TogglableTag" &&
              selectedThumbSrc === "icon" ? (
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
            </>
          ) : null}

          {currentComponent === "RemovableTag" ? (
            <span className="lab-playground__item">
              <Button
                text="Restore"
                fullWidth
                onClick={this.handleRestoreRemovableTag}
              />
            </span>
          ) : null}
        </div>
      </div>
    );
  }
}
