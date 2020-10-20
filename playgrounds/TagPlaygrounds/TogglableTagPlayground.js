import React from "react";
import { isEmpty } from "lodash";
import { TogglableTag } from "../../labsystem/src/Tags";
import { colorOptions } from "../assets";

export default class TogglableTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglableTagText: "edit me",
      togglableTagColor: "",
      togglableTagDisabled: false,
      togglableTagIsOn: false,
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

  handleClick = () => {
    const { togglableTagIsOn } = this.state;
    this.setState({ togglableTagIsOn: !togglableTagIsOn });
  };

  render() {
    const {
      togglableTagText,
      togglableTagColor,
      togglableTagDisabled,
      togglableTagIsOn,
    } = this.state;

    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>TogglableTag</strong>
            </h4>
            <TogglableTag
              text={togglableTagText}
              color={togglableTagColor}
              disabled={togglableTagDisabled}
              isOn={togglableTagIsOn}
              onClick={this.handleClick}
            />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>text: </strong>
              <input
                id="togglableTagText"
                onChange={this.handleTextPropChange}
                placeholder="Insert text"
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>color: </strong>
              <select
                id="togglableTagColor"
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
              <strong>disabled: </strong>
              <input
                id="togglableTagDisabled"
                type="checkbox"
                checked={togglableTagDisabled}
                onChange={this.handleBoolPropChange}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
