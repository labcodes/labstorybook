import React from "react";
import { DropdownTag } from "../../labsystem/src/Tags";
import { iconOptions, skinOptions, colorOptions } from "../assets";

export default class DropdownTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownTagText: "",
      dropdownTagIsOutline: false,
      dropdownTagDisabled: false,
      dropdownTagColor: "",
      dropdownTagSkin: "pale",
      dropdownTagIcon: "",
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
      dropdownTagText,
      dropdownTagIsOutline,
      dropdownTagDisabled,
      dropdownTagColor,
      dropdownTagSkin,
      dropdownTagIcon,
    } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>DropdownTag</strong>
            </h4>
            <DropdownTag
              text={dropdownTagText}
              icon={dropdownTagIcon}
              isOutline={dropdownTagIsOutline}
              disabled={dropdownTagDisabled}
              color={dropdownTagColor}
              skin={dropdownTagSkin}
            />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input
                id="dropdownTagText"
                onChange={this.handleTextPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Icon: </strong>
              <select id="dropdownTagIcon" onChange={this.handleTextPropChange}>
                {iconOptions.map((item) => (
                  <option value={item} key={`icon-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Color: </strong>
              <select
                id="dropdownTagColor"
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
              <select id="dropdownTagSkin" onChange={this.handleTextPropChange}>
                {skinOptions.map((item) => (
                  <option value={item} key={`skin-${item}`}>
                    {item}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Outline: </strong>
              <input
                id="dropdownTagIsOutline"
                type="checkbox"
                checked={dropdownTagIsOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Disabled: </strong>
              <input
                id="dropdownTagDisabled"
                type="checkbox"
                checked={dropdownTagDisabled}
                onChange={this.handleBoolPropChange}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
