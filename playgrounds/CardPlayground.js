/* eslint-disable */
import React from "react";
import { Props } from "@storybook/addon-docs/blocks";

import {
  OutlineCard,
  FilledCard,
  OutlineFilledCard,
  CardImage,
} from "../labsystem/src/Card";
import Toggle from "../labsystem/src/Toggle";

export default class CardPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: { OutlineCard, FilledCard, OutlineFilledCard },
      selectedColor: "mineral",
      selectedSkin: "pale",
      currentComponent: "OutlineCard",
      cardImageIsOverflowed: false,
    };
  }

  renderCurrentComponent = () => {
    const {
      selectedColor,
      selectedSkin,
      availableComponents,
      currentComponent,
      cardImageIsOverflowed,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <Component color={selectedColor} skin={selectedSkin}>
        <h1>{currentComponent}</h1>
        <CardImage
          src="/docs/card/card-image.jpg"
          alt="Labcodes offices' view"
          isOverflowed={cardImageIsOverflowed}
        />
      </Component>
    );
  };

  render() {
    const {
      currentComponent,
      availableComponents,
      selectedColor,
      selectedSkin,
      cardImageIsOverflowed,
    } = this.state;
    const {
      props: {
        __docgenInfo: {
          props: { color, skin },
        },
      },
    } = Props(availableComponents[currentComponent]);

    return (
      <div className="columns lab-playground">
        <div className="column lab-playground__component">
          {this.renderCurrentComponent()}
        </div>
        <div className="column lab-playground__configs">
          <h4>Configurations</h4>

          <div>
            <span className="lab-playground__item">
              <label htmlFor="currentComponent">
                Component
                <br />
                <select
                  name="currentComponent"
                  value={currentComponent}
                  onChange={this.changeCardComponent}
                >
                  {Object.keys(availableComponents).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </span>
          </div>

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

          {skin ? (
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
          ) : null}

          <h6>CardImage</h6>
          <span className="lab-playground__item">
            CardImage - isOverflowed
            <br />
            <Toggle
              name="cardImageIsOverflowed"
              value={cardImageIsOverflowed}
              handleToggle={() => this.handleToggleFor("cardImageIsOverflowed")}
            />
          </span>
        </div>
      </div>
    );
  }

  formatPropString = (string) => eval(string).replace('"', "");

  changeCardComponent = (e) => {
    const { value } = e.target;
    this.setState({
      currentComponent: value,
      selectedColor: "mineral",
      selectedSkin: "pale",
    });
  };

  handleSelectChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleToggleFor = (stateKey) =>
    this.setState({ [stateKey]: !this.state[stateKey] });
}
