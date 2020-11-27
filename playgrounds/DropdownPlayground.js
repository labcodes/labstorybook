import React from "react";

import Dropdown from "../labsystem/src/Dropdown/Dropdown";
import Radio from "../labsystem/src/Radio";
import Checkbox from "../labsystem/src/Checkbox";
import TextInput from "../labsystem/src/Input/TextInput";
import Button from "../labsystem/src/Buttons/Button";
import OutlineButton from "../labsystem/src/Buttons/OutlineButton";
import {
  colorOptions,
  skinOptions,
  iconOptions,
  thumbSrcOptions,
} from "./assets";
import { DropdownTag } from "../labsystem/src/Tags";

export default class InputPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useTagItemsAndTrigger: false,
      label: "menu",
      direction: "down",
      isMultiSelect: false,
      itemIcon: "",
      itemFlagColor: "",
      itemLabel: "",
      itemIsConfirmation: false,
      itemIsDestructive: false,
      itemDisabled: false,
      tagItemText: "",
      tagItemColor: "mineral",
      tagItemSkin: "pale",
      tagItemDisabled: false,
      tagItemIsOutline: false,
      tagItemIcon: "",
      tagItemThumbSrc: "",
      isIconInputDisabled: false,
      isThumbSrcInputDisabled: false,
      dropdownItems: [
        {
          label: "item 1",
          key: "item1",
          flagColor: "teal",
          onClick: () => console.log("item 1"),
        },
      ],
      dropdownTagItems: [
        {
          tagProps: [
            {
              text: "tag item 1",
              color: "mineral",
              skin: "pale",
              isOutline: false,
              thumbSrc: "",
            },
          ],
          key: "tagItem1",
          disabled: false,
          onClick: () => console.log("tag item 1"),
        },
      ],
    };

    this.initialState = {
      tagItemText: "",
      tagItemColor: "",
      tagItemSkin: "",
      tagItemIsOutline: false,
      tagItemThumbSrc: false,
      tagItemDisabled: false,
      itemIcon: "",
      itemFlagColor: "",
      itemLabel: "",
      itemIsConfirmation: false,
      itemIsDestructive: false,
      itemDisabled: false,
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
      useTagItemsAndTrigger,
      tagItemText,
      tagItemColor,
      tagItemSkin,
      tagItemIsOutline,
      tagItemThumbSrc,
      tagItemIcon,
      tagItemDisabled,
      dropdownTagItems,
    } = this.state;

    const key = String(Math.random());

    console.log(tagItemText);
    if (useTagItemsAndTrigger && tagItemText) {
      dropdownTagItems.push({
        key,
        tagProps: [
          {
            text: tagItemText,
            color: tagItemColor,
            skin: tagItemSkin,
            isOutline: tagItemIsOutline,
            thumbSrc: tagItemThumbSrc,
            ...(tagItemIcon ? { icon: tagItemIcon } : undefined),
          },
        ],
        onClick: () => {
          alert(`Clicked ${tagItemText}`);
        },
        ...(tagItemDisabled ? { disabled: tagItemDisabled } : undefined),
      });

      this.setState({
        ...this.initialState,
        dropdownTagItems,
      });
    } else if (!useTagItemsAndTrigger && itemLabel) {
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
        ...(itemIsDestructive
          ? { isDestructive: itemIsDestructive }
          : undefined),
        ...(itemDisabled ? { disabled: itemDisabled } : undefined),
      });

      this.setState({
        ...this.initialState,
        dropdownItems,
      });
    }
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
      dropdownTagItems,
      itemIcon,
      itemFlagColor,
      itemIsConfirmation,
      itemIsDestructive,
      itemLabel,
      itemDisabled,
      useTagItemsAndTrigger,
      tagItemText,
      tagItemIcon,
      tagItemSkin,
      tagItemColor,
      tagItemThumbSrc,
      tagItemDisabled,
      isIconInputDisabled,
      isThumbSrcInputDisabled,
    } = this.state;

    console.log(dropdownTagItems);
    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <h4>Dropdown</h4>
          <br />
          <br />
          {useTagItemsAndTrigger ? (
            <Dropdown
              direction={direction}
              isMultiSelect={isMultiSelect}
              onOpen={() => console.log("clicked dropdown tag trigger")}
              renderTrigger={() => <DropdownTag text={label} />}
            >
              {dropdownTagItems.map((tagItem) => (
                <Dropdown.TagItem
                  tagProps={tagItem.tagProps}
                  onClick={tagItem.onClick}
                  key={tagItem.key}
                />
              ))}
            </Dropdown>
          ) : (
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
          )}
        </div>

        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <span className="lab-playground__item">
            <Checkbox
              id="useTagItemsAndTrigger"
              name="useTagItemsAndTrigger"
              label="Use tags for items and trigger"
              checked={useTagItemsAndTrigger}
              onChange={this.handlePropChangeBool}
            />
          </span>

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

          {!useTagItemsAndTrigger ? (
            <>
              {/* New Item */}
              <p>
                <strong>New Item:</strong>
              </p>

              <span className="lab-playground__item">
                <TextInput
                  id="itemLabel"
                  label="item label"
                  value={itemLabel}
                  onChange={this.handlePropChangeText}
                  required
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
                    value={itemIcon}
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
                    value={itemFlagColor}
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
            </>
          ) : (
            <>
              {/* New TagItem */}
              <p>
                <strong>New TagItem:</strong>
              </p>

              <span className="lab-playground__item">
                <TextInput
                  id="tagItemText"
                  label="tag item text"
                  value={tagItemText}
                  onChange={this.handlePropChangeText}
                  required
                />
              </span>
              <br />

              <span className="lab-playground__item">
                <label htmlFor="tagItemColor">
                  color
                  <select
                    id="tagItemColor"
                    value={tagItemColor}
                    onChange={this.handleTextPropChange}
                  >
                    {colorOptions.map((item) => (
                      <option value={item} key={`color-${item}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </span>

              <span className="lab-playground__item">
                <label htmlFor="tagItemSkin">
                  skin
                  <select
                    id="tagItemSkin"
                    value={tagItemSkin}
                    onChange={this.handleTextPropChange}
                  >
                    {skinOptions.map((item) => (
                      <option value={item} key={`skin-${item}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
              </span>
              <br />

              <span className="lab-playground__item">
                <Checkbox
                  id="tagItemDisabled"
                  name="tagItemDisabled"
                  label="disabled"
                  checked={tagItemDisabled}
                  onChange={this.handleBoolPropChange}
                />
              </span>

              <span className="lab-playground__item">
                <Checkbox
                  id="tagItemIsOutline"
                  name="tagItemIsOutline"
                  label="isOutline"
                  onChange={this.handleBoolPropChange}
                />
              </span>
              <br />

              <span className="lab-playground__item">
                <label htmlFor="tagItemIcon">
                  icon
                  <br />
                  <select
                    name="icons"
                    id="tagItemIcon"
                    value={tagItemIcon}
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

              <span className="lab-playground__item">
                <label htmlFor="tagItemThumbSrc">
                  <strong>thumbSrc: </strong>
                  <select
                    id="tagItemThumbSrc"
                    value={tagItemThumbSrc}
                    onChange={this.handleThumbSrcPropChange}
                    disabled={isThumbSrcInputDisabled}
                  >
                    {thumbSrcOptions.map((item, index) => (
                      <option value={item} key={`thumbSrc-${item}`}>
                        {item ? `Option ${index}` : ""}
                      </option>
                    ))}
                  </select>
                </label>
              </span>
            </>
          )}
          <OutlineButton
            text="Add item"
            size="small"
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
