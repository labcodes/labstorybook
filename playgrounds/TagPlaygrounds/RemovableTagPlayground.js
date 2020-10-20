import React from "react";
import { isEmpty } from "lodash";
import { RemovableTag } from "../../labsystem/src/Tags";
import {
  iconOptions,
  thumbSrcOptions,
  skinOptions,
  colorOptions,
} from "../assets";

export default class RemovableTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removableTagText: "edit me",
      removableTagIcon: "",
      removableTagThumbSrc: "",
      removableTagIsOutline: false,
      removableTagColor: "",
      removableTagSkin: "pale",
      removableTagDisabled: false,
      removableTagIsOn: true,
      isIconInputDisabled: false,
      isThumbInputDisabled: false,
    };
  }

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
    this.setState({ isThumbInputDisabled: !isEmpty(value) });
  };

  handleThumbSrcPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    // Deactivate `icon` if has a `thumbSrc`
    this.setState({ isIconInputDisabled: !isEmpty(value) });
  };

  handleClick = () => {
    const { removableTagIsOn } = this.state;
    this.setState({ removableTagIsOn: !removableTagIsOn });
  };

  handleRestoreRemovableTag = () => {
    this.setState({ removableTagIsOn: true });
  };

  render() {
    const {
      removableTagText,
      removableTagIcon,
      removableTagThumbSrc,
      removableTagIsOutline,
      removableTagColor,
      removableTagSkin,
      removableTagDisabled,
      removableTagIsOn,
      isIconInputDisabled,
      isThumbInputDisabled,
    } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>RemovableTag</strong>
            </h4>
            {removableTagIsOn ? (
              <RemovableTag
                text={removableTagText}
                thumbSrc={removableTagThumbSrc}
                icon={removableTagIcon}
                isOutline={removableTagIsOutline}
                color={removableTagColor}
                skin={removableTagSkin}
                disabled={removableTagDisabled}
                onClick={this.handleClick}
              />
            ) : (
              ""
            )}
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>text: </strong>
              <input
                id="removableTagText"
                onChange={this.handleTextPropChange}
                placeholder="Insert text"
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>icon: </strong>
              <select
                id="removableTagIcon"
                onChange={this.handleIconPropChange}
                disabled={isIconInputDisabled}
              >
                {iconOptions.map((item) => (
                  <option value={item} key={`icon-${item}`}>
                    {!isEmpty(item) ? item : "none"}
                  </option>
                ))}
              </select>
            </span>
            <span className="lab-playground__item">
              <strong>thumbSrc: </strong>
              <select
                id="removableTagThumbSrc"
                onChange={this.handleThumbSrcPropChange}
                disabled={isThumbInputDisabled}
              >
                {thumbSrcOptions.map((item, index) => (
                  <option value={item} key={`thumb-${item}`}>
                    {!isEmpty(item) ? `Option ${index}` : "none"}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>isOutline: </strong>
              <input
                id="removableTagIsOutline"
                type="checkbox"
                checked={removableTagIsOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>color: </strong>
              <select
                id="removableTagColor"
                onChange={this.handleTextPropChange}
              >
                {colorOptions.map((item) => (
                  <option value={item} key={`color-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>skin: </strong>
              <select
                id="removableTagSkin"
                onChange={this.handleTextPropChange}
              >
                {skinOptions.map((item) => (
                  <option value={item} key={`skin-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>disabled: </strong>
              <input
                id="removableTagDisabled"
                type="checkbox"
                checked={removableTagDisabled}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <button type="button" onClick={this.handleRestoreRemovableTag}>
                <strong>Restore</strong>
              </button>
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
