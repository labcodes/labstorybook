import React from "react";
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
      removableTagText: "",
      removableTagIcon: "",
      removableTagThumbSrc: "",
      removableTagIsOutline: false,
      removableTagColor: "",
      removableTagSkin: "pale",
      removableTagIsDisabled: false,
      removableTagIsOn: true,
      isIconInputDisabled: false,
      isThumbInputDisabled: false,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });

    // Ensure either a `thumb` or an `icon` gets enabled at the same time
    if (id === "removableTagIcon") {
      if (value === "") {
        this.setState({ isThumbInputDisabled: false });
      } else {
        this.setState({ isThumbInputDisabled: true });
      }
    }
    if (id === "removableTagThumbSrc") {
      if (value === "") {
        this.setState({ isIconInputDisabled: false });
      } else {
        this.setState({ isIconInputDisabled: true });
      }
    }
  };

  handleBoolPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
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
      removableTagIsDisabled,
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
                isDisabled={removableTagIsDisabled}
                onClick={this.handleClick}
              />
            ) : (
              ""
            )}
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input
                id="removableTagText"
                onChange={this.handleTextPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Icon: </strong>
              <select
                id="removableTagIcon"
                onChange={this.handleTextPropChange}
                disabled={isIconInputDisabled}
              >
                {iconOptions.map((item) => (
                  <option value={item} key={`icon-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Thumb Source: </strong>
              <select
                id="removableTagThumbSrc"
                onChange={this.handleTextPropChange}
                disabled={isThumbInputDisabled}
              >
                {thumbSrcOptions.map((item, index) => (
                  <option value={item} key={`thumb-${item}`}>
                    {index}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Outline: </strong>
              <input
                id="removableTagIsOutline"
                type="checkbox"
                checked={removableTagIsOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Color: </strong>
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
              <strong>Skin: </strong>
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
              <strong>Disabled: </strong>
              <input
                id="removableTagIsDisabled"
                type="checkbox"
                checked={removableTagIsDisabled}
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
