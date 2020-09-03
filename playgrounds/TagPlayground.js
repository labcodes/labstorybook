import React from "react";
import { SimpleTag } from "../labsystem/src/Tags";
import { iconOptions, thumbSrcOptions } from "./assets";

export default class TagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagText: "",
      tagIcon: "",
      tagThumbSrc: "",
      isIconInputDisabled: false,
      isThumbInputDisabled: false,
      tagOutline: false,
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });

    // Ensure either a `tagIcon` or a `tagThumbSrc` gets enabled at the same time
    if (id === "tagIcon") {
      if (value === "") {
        this.setState({ isThumbInputDisabled: false });
      } else {
        this.setState({ isThumbInputDisabled: true });
      }
    }
    if (id === "tagThumbSrc") {
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
      tagText,
      tagIcon,
      tagThumbSrc,
      isIconInputDisabled,
      isThumbInputDisabled,
      tagOutline,
    } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>SimpleTag</strong>
            </h4>
            <SimpleTag
              text={tagText}
              icon={tagIcon}
              thumbSrc={tagThumbSrc}
              outline={tagOutline}
            />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input id="tagText" onChange={this.handleTextPropChange} />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Icon: </strong>
              <select
                id="tagIcon"
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
                id="tagThumbSrc"
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
                id="tagOutline"
                type="checkbox"
                checked={tagOutline}
                onChange={this.handleBoolPropChange}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
