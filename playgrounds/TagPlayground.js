import React from "react";
import { isEmpty } from "lodash";

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
      selectedText: this.initialState.selectedText,
      selectedColor: this.initialState.selectedColor,
      selectedIsDisabled: this.initialState.selectedIsDisabled,
      selectedIsOutline: this.initialState.selectedIsOutline,
      selectedIcon: this.initialState.selectedIcon,
      selectedThumbSrc: this.initialState.selectedThumbSrc,
      removableTagIsOn: this.initialState.removableTagIsOn,
      togglableTagIsOn: this.initialState.togglableTagIsOn,
      isIconInputDisabled: false,
      isThumbSrcInputDisabled: false,
    };
  }

  handleCurrentComponentChange = (e) => {
    const { value } = e.target;
    this.setState({
      currentComponent: value,
      selectedColor: this.initialState.selectedColor,
      selectedIsDisabled: this.initialState.selectedIsDisabled,
      selectedIsOutline: this.initialState.selectedIsOutline,
      selectedIcon: this.initialState.selectedIcon,
      selectedThumbSrc: this.initialState.selectedThumbSrc,
      removableTagIsOn: this.initialState.removableTagIsOn,
      togglableTagIsOn: this.initialState.togglableTagIsOn,
    });
  };

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });
  };

  handleBoolPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  handleIconPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    // Deactivate `thumb` if has an `icon`
    this.setState({ isThumbSrcInputDisabled: !isEmpty(value) });
  };

  handleThumbSrcPropChange = (e) => {
    const { id, value } = e.target;
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
      <>
        <h4>
          <strong>{currentComponent}</strong>
        </h4>
        {removableTagIsOn ? (
          <Component
            text={selectedText}
            color={selectedColor}
            skin={selectedSkin}
            disabled={selectedIsDisabled}
            isOutline={selectedIsOutline}
            icon={selectedIcon}
            thumbSrc={selectedThumbSrc}
            isOn={togglableTagIsOn}
            onClick={handleClick}
          />
        ) : (
          ""
        )}
      </>
    );
  };

  render() {
    const {
      availableComponents,
      currentComponent,
      selectedIcon,
      selectedThumbSrc,
      isIconInputDisabled,
      isThumbSrcInputDisabled,
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
            <label htmlFor="selectedIsDisabled">
              <strong>disabled: </strong>
              <input
                id="selectedIsDisabled"
                type="checkbox"
                onChange={this.handleBoolPropChange}
              />
            </label>
          </span>

          {currentComponent !== "TogglableTag" ? (
            <span className="lab-playground__item">
              <label htmlFor="selectedIsOutline">
                <strong>isOutline: </strong>
                <input
                  id="selectedIsOutline"
                  type="checkbox"
                  onChange={this.handleBoolPropChange}
                />
              </label>
            </span>
          ) : null}
          <br />

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
