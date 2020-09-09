import React from "react";
import { SimpleTag } from "../../labsystem/src/Tags";
import {
  iconOptions,
  thumbSrcOptions,
  skinOptions,
  colorOptions,
} from "../assets";

export default class SimpleTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleTagText: "",
      simpleTagIcon: "",
      simpleTagThumbSrc: "",
      simpleTagOutline: false,
      simpleTagColor: "",
      simpleTagSkin: "pale",
      simpleTagDisabled: false,
      isIconInputDisabled: false,
      isThumbInputDisabled: false,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });

    // Ensure either a `thumb` or an `icon` gets enabled at the same time
    if (id === "simpleTagIcon") {
      if (value === "") {
        this.setState({ isThumbInputDisabled: false });
      } else {
        this.setState({ isThumbInputDisabled: true });
      }
    }
    if (id === "simpleTagThumbSrc") {
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

  render() {
    const {
      simpleTagText,
      simpleTagIcon,
      simpleTagThumbSrc,
      isIconInputDisabled,
      isThumbInputDisabled,
      simpleTagOutline,
      simpleTagColor,
      simpleTagSkin,
      simpleTagDisabled,
    } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>SimpleTag</strong>
            </h4>
            <SimpleTag
              text={simpleTagText}
              icon={simpleTagIcon}
              thumbSrc={simpleTagThumbSrc}
              outline={simpleTagOutline}
              color={simpleTagColor}
              skin={simpleTagSkin}
              disabled={simpleTagDisabled}
            />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input id="simpleTagText" onChange={this.handleTextPropChange} />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Icon: </strong>
              <select
                id="simpleTagIcon"
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
                id="simpleTagThumbSrc"
                onChange={this.handleTextPropChange}
                disabled={isThumbInputDisabled}
              >
                {thumbSrcOptions.map((item, index) => (
                  <option value={item} key={`thumbSrc-${item}`}>
                    {index}
                  </option>
                ))}
              </select>
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Outline: </strong>
              <input
                id="simpleTagOutline"
                type="checkbox"
                checked={simpleTagOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Color: </strong>
              <select id="simpleTagColor" onChange={this.handleTextPropChange}>
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
              <select id="simpleTagSkin" onChange={this.handleTextPropChange}>
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
                id="simpleTagDisabled"
                type="checkbox"
                checked={simpleTagDisabled}
                onChange={this.handleBoolPropChange}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
