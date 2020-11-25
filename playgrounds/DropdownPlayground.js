import React from "react";

import Dropdown from "../labsystem/src/Dropdown/Dropdown";
import Radio from "../labsystem/src/Radio";
import Checkbox from "../labsystem/src/Checkbox";
import TextInput from "../labsystem/src/Input/TextInput";
import Button from "../labsystem/src/Buttons/Button";
import OutlineButton from "../labsystem/src/Buttons/OutlineButton";
import { iconOptions, colorOptions } from "./assets";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "menu",
      direction: "down",
      isMultiSelect: false,
      itemIcon: "",
      itemFlagColor: "",
      itemLabel: "",
      itemIsConfirmation: false,
      itemIsDestructive: false,
      itemDisabled: false,
      dropdownItems: [
        {
          label: "item 1",
          key: "item1",
          flagColor: "teal",
          onClick: () => console.log("item 1"),
        },
      ],
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

  handleDirectionChange = (e) => {
    const { value } = e.target;
    this.setState({ direction: value });
  };

  addNewItem = () => {
    const {
      itemIcon,
      itemFlagColor,
      itemLabel,
      dropdownItems,
      itemDisabled,
      itemIsConfirmation,
      itemIsDestructive,
    } = this.state;

    const key = String(Math.random());

    dropdownItems.push({
      key,
      label: itemLabel,
      onClick: () => {
        alert(`Clicked ${itemLabel}`);
      },
      ...(itemIcon ? { icon: itemIcon } : undefined),
      ...(itemFlagColor ? { flagColor: itemFlagColor } : undefined),
      ...(itemIsConfirmation
        ? { isConfirmation: itemIsConfirmation }
        : undefined),
      ...(itemIsDestructive ? { isDestructive: itemIsDestructive } : undefined),
      ...(itemDisabled ? { disabled: itemDisabled } : undefined),
    });
    this.setState({
      itemIcon: "",
      itemFlagColor: "",
      itemLabel: "",
      itemIsConfirmation: false,
      itemIsDestructive: false,
      itemDisabled: false,
      dropdownItems,
    });
  };

  removeLastItem = () => {
    const { dropdownItems } = this.state;
    dropdownItems.pop();
    this.setState({ dropdownItems });
  };

  render() {
    const {
      label,
      direction,
      isMultiSelect,
      dropdownItems,
      itemIcon,
      itemFlagColor,
      itemIsConfirmation,
      itemIsDestructive,
      itemLabel,
      itemDisabled,
    } = this.state;

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <h4>Dropdown</h4>
          <br />
          <br />
          <Dropdown
            direction={direction}
            isMultiSelect={isMultiSelect}
            onOpen={() => console.log("clicked dropdown trigger")}
            renderTrigger={() => <Button text={label} />}
          >
            {dropdownItems.map((item) => (
              <Dropdown.Item {...item} key={item.key} />
            ))}
          </Dropdown>
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <span className="lab-playground__item">
            direction (default is "down")
            <br />
            <Radio
              id="direction-down"
              name="direction"
              label="down"
              value="down"
              onChange={this.handleDirectionChange}
            />
            <Radio
              id="direction-up"
              name="direction"
              label="up"
              value="up"
              onChange={this.handleDirectionChange}
            />
          </span>
          <br />
          <span className="lab-playground__item">
            <Checkbox
              id="isMultiSelect"
              name="isMultiSelect"
              label="isMultiSelect"
              checked={isMultiSelect}
              onChange={this.handlePropChangeBool}
            />
          </span>
          <p>
            <strong>New Item:</strong>
          </p>
          <span className="lab-playground__item">
            <TextInput
              id="itemLabel"
              label="item label"
              value={itemLabel}
              onChange={this.handlePropChangeText}
            />
          </span>
          <br />
          <span className="lab-playground__item">
            <label htmlFor="itemIcon">
              icon
              <br />
              <select
                name="icons"
                id="itemIcon"
                disabled={!!itemFlagColor}
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
            <label htmlFor="itemFlagColor">
              flagColor
              <br />
              <select
                name="colors"
                id="itemFlagColor"
                disabled={!!itemIcon}
                onChange={this.handlePropChangeText}
              >
                {["", ...colorOptions].map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </span>
          <br />
          <span className="lab-playground__item">
            <Checkbox
              id="itemDisabled"
              name="itemDisabled"
              label="Disabled"
              checked={itemDisabled}
              onChange={this.handlePropChangeBool}
            />
          </span>
          <span className="lab-playground__item">
            <Checkbox
              id="itemIsConfirmation"
              name="itemIsConfirmation"
              label="isConfirmation"
              checked={itemIsConfirmation}
              onChange={this.handlePropChangeBool}
            />
          </span>
          <span className="lab-playground__item">
            <Checkbox
              id="itemIsDestructive"
              name="itemIsDestructive"
              label="isDestructive"
              checked={itemIsDestructive}
              onChange={this.handlePropChangeBool}
            />
          </span>
          <br />
          <OutlineButton
            text="Add item"
            size="small"
            disabled={!itemLabel}
            onClick={this.addNewItem}
          />
          <OutlineButton
            text="Remove last item"
            size="small"
            onClick={this.removeLastItem}
          />
        </div>
      </div>
    );
  }
}
