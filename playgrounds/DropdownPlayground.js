import React from "react";

import Dropdown from "../labsystem/src/Dropdown/Dropdown";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
      direction: "down",
      isMultiSelect: false,
    };
  }

  handlePropChangeText = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handlePropChangeBool = (e) => {
    const { id, checked } = e.target;
    this.setState({ [id]: checked });
  };

  render() {
    const { label, direction, isMultiSelect } = this.state;

    const iconOptions = [
      "",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-top",
      "calendar",
      "coin",
      "collapse-closed",
      "collapse-open",
      "check",
      "dropdown-closed",
      "dropdown-open",
      "edit",
      "eye-closed",
      "eye-opened",
      "track",
      "key",
      "logout",
      "lupe",
      "minus",
      "plus",
      "reload",
      "remove",
      "sort",
      "star",
      "trash",
      "upload",
      "arrow-fill-right",
      "arrow-fill-left",
      "chevron-right",
      "chevron-left",
      "menu-expand",
      "menu-collapse",
      "menu-default",
      "external",
      "wallet",
      "workspace",
    ];

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <h4>TextInput</h4>
          <Dropdown
            direction={direction}
            isMultiSelect={isMultiSelect}
            onOpen={() => console.log("lala")}
            renderTrigger={() => <button>hi</button>}
          >
            <Dropdown.Item
              label="item 1"
              onClick={() => console.log("item 1")}
            />
            <Dropdown.Item
              label="item 2"
              onClick={() => console.log("item 2")}
            />
            <Dropdown.Item
              label="item 3"
              onClick={() => console.log("item 3")}
            />
          </Dropdown>
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <span className="lab-playground__item">
            <label htmlFor="label">
              Label
              <br />
              <input
                id="label"
                type="text"
                label="Label"
                value={label}
                onChange={this.handlePropChangeText}
              />
            </label>
          </span>
          <br />
          <span className="lab-playground__item">
            <label htmlFor="icon">
              icon
              <br />
              <select
                name="icons"
                id="icon"
                onChange={this.handlePropChangeText}
              >
                {iconOptions.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <br />
          <span className="lab-playground__item">
            <label htmlFor="disabled">
              Disabled
              <br />
              <input
                id="isMultiSelect"
                type="checkbox"
                label="isMultiSelect"
                checked={isMultiSelect}
                onChange={this.handlePropChangeBool}
              />
            </label>
          </span>
        </div>
      </div>
    );
  }
}
