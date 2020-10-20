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
            <br />
            <span className="lab-playground__item">
              <strong>thumbSrc: </strong>
              <select
                id="simpleTagThumbSrc"
                onChange={this.handleThumbSrcPropChange}
                disabled={isThumbInputDisabled}
              >
                {thumbSrcOptions.map((item, index) => (
                  <option value={item} key={`thumbSrc-${item}`}>
                    {!isEmpty(item) ? `Option ${index}` : "none"}
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
