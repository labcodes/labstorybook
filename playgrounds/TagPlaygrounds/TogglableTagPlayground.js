import React from "react";
import { TogglableTag } from "../../labsystem/src/Tags";
import { colorOptions } from "../assets";

export default class TogglableTagPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      togglableTagText: "",
      togglableTagColor: "",
    };
  }

  handleTextPropChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { togglableTagText, togglableTagColor } = this.state;
    return (
      <React.Fragment>
        <div className="columns lab-playground">
          <div className="column lab-playground__component">
            <h4>
              <strong>TogglableTag</strong>
            </h4>
            <TogglableTag text={togglableTagText} color={togglableTagColor} />
          </div>
          <div className="column lab-playground__configs">
            <h4>Configurations</h4>
            <span className="lab-playground__item">
              <strong>Text: </strong>
              <input
                id="togglableTagText"
                onChange={this.handleTextPropChange}
              />
            </span>
            <br />
            <span className="lab-playground__item">
              <strong>Color: </strong>
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
