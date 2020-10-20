import React from "react";
import { isEmpty } from "lodash";
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
      simpleTagText: "edit me",
      simpleTagIcon: "",
      simpleTagThumbSrc: "",
      simpleTagIsOutline: false,
      simpleTagColor: "",
      simpleTagSkin: "pale",
      simpleTagDisabled: false,
      isIconInputDisabled: false,
      isThumbInputDisabled: false,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: !isEmpty(value) ? value : "edit me" });

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
      simpleTagIsOutline,
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
              isOutline={simpleTagIsOutline}
              color={simpleTagColor}
              skin={simpleTagSkin}
              disabled={simpleTagDisabled}
            />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>text: </strong>
              <input
                id="simpleTagText"
                onChange={this.handleTextPropChange}
                placeholder="Insert text"
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>icon: </strong>
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
              <strong>thumbSrc: </strong>
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
              <strong>isOutline: </strong>
              <input
                id="simpleTagIsOutline"
                type="checkbox"
                checked={simpleTagIsOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>color: </strong>
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
              <strong>skin: </strong>
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
              <strong>disabled: </strong>
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
