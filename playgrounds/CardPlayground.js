/* eslint-disable no-eval */
import React from "react";
import { Props } from "@storybook/addon-docs/blocks";

import { OutlineCard } from "../labsystem/src/Card";

export default class CardPlayground extends React.Component {
  constructor(props) {
    super(props);

    const currentComponent = OutlineCard;
    this.state = {};
    this.setUpStateForComponent(currentComponent);
  }

  formatPropString = (string) => eval(string).replace('"', "");

  setUpStateForComponent = (component) => {
    const { currentComponent } = this.state;
    const {
      props: {
        __docgenInfo: {
          props: { color, skin },
        },
      },
    } = Props(component);

    if (!currentComponent) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state = {
        currentComponent: component,
        selectedColor: this.formatPropString(color.defaultValue.value),
        selectedSkin: this.formatPropString(skin.defaultValue.value),
      };
    } else {
      this.setState({
        currentComponent: component,
        selectedColor: this.formatPropString(color.defaultValue.value),
        selectedSkin: this.formatPropString(skin.defaultValue.value),
      });
    }
  };

  handleSelectChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { currentComponent, selectedColor, selectedSkin } = this.state;
    const {
      props: {
        __docgenInfo: {
          props: { color, skin },
        },
      },
    } = Props(currentComponent);

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          <OutlineCard skin={selectedSkin} color={selectedColor}>
            <h1>Test</h1>
          </OutlineCard>
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>
          <span className="lab-playground__item">
            <label htmlFor="selectedColor">
              Color
              <br />
              <select
                name="selectedColor"
                value={selectedColor}
                onChange={this.handleSelectChange}
              >
                {color.type.value.map((option) => (
                  <option
                    key={this.formatPropString(option.value)}
                    value={this.formatPropString(option.value)}
                  >
                    {this.formatPropString(option.value)}
                  </option>
                ))}
              </select>
            </label>
          </span>

          <span className="lab-playground__item">
            <label htmlFor="selectedSkin">
              Skin
              <br />
              <select
                name="selectedSkin"
                value={selectedSkin}
                onChange={this.handleSelectChange}
              >
                {skin.type.value.map((option) => (
                  <option
                    key={this.formatPropString(option.value)}
                    value={this.formatPropString(option.value)}
                  >
                    {this.formatPropString(option.value)}
                  </option>
                ))}
              </select>
            </label>
          </span>
        </div>
      </div>
    );
  }
}
