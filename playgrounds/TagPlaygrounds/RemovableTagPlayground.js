import React from "react";
import { RemovableTag } from "../../labsystem/src/Tags";
import { colorOptions, skinOptions } from "../assets";

export default class RemovableTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removableTagText: "",
      removableTagOutline: false,
      removableTagColor: "",
      removableTagSkin: "pale",
      removableTagDisabled: false,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleBoolPropChange = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  render() {
    const {
      removableTagText,
      removableTagOutline,
      removableTagColor,
      removableTagSkin,
      removableTagDisabled,
    } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>RemovableTag</strong>
            </h4>
            <RemovableTag
              text={removableTagText}
              outline={removableTagOutline}
              color={removableTagColor}
              skin={removableTagSkin}
              disabled={removableTagDisabled}
            />
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
              <strong>Outline: </strong>
              <input
                id="removableTagOutline"
                type="checkbox"
                checked={removableTagOutline}
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
                id="removableTagDisabled"
                type="checkbox"
                checked={removableTagDisabled}
                onChange={this.handleBoolPropChange}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
