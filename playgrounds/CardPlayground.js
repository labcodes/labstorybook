/* eslint-disable */
import React from "react";
import { Props } from "@storybook/addon-docs/blocks";

import {
  OutlineCard,
  FilledCard,
  OutlineFilledCard,
  CardImage,
  CardHeader,
} from "../labsystem/src/Card";
import Toggle from "../labsystem/src/Toggle";
import TextInput from "../labsystem/src/Input/TextInput";
import Icon from "../labsystem/src/Icon";

export default class CardPlayground extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      availableComponents: { OutlineCard, FilledCard, OutlineFilledCard },
      selectedColor: "mineral",
      selectedSkin: "pale",
      currentComponent: "OutlineCard",
      showHeaderConfigs: false,
      showCardBodyHTML: false,

      cardImageIsOverflowed: false,
      cardImageIsAboveHeader: false,

      cardHeaderTitle: "Title text",
      cardHeaderTitleClassName: "custom-class",
      cardHeaderSubtitle: "Subtitle text is a little longer than the title",
      cardHeaderSubtitleClassName: "custom-class",
      cardHeaderCategoryText: "Category",
      cardHeaderCategoryLabelText: "Label",
      cardHeaderCategoryIcon: "star",
      cardHeaderCategoryColor: "",
      cardHeaderIsOverlay: false,

      cardBodyHTML:
        "<p>This HTML is inside the card body, below the image and header.</p>",
    };
  }

  renderCurrentComponent = () => {
    const {
      selectedColor,
      selectedSkin,
      availableComponents,
      currentComponent,

      cardImageIsOverflowed,
      cardImageIsAboveHeader,

      cardHeaderTitle,
      cardHeaderTitleClassName,
      cardHeaderSubtitle,
      cardHeaderSubtitleClassName,
      cardHeaderCategoryText,
      cardHeaderCategoryLabelText,
      cardHeaderCategoryIcon,
      cardHeaderCategoryColor,
      cardHeaderIsOverlay,

      cardBodyHTML,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <Component color={selectedColor} skin={selectedSkin}>
        <h1>{currentComponent}</h1>
        {cardImageIsAboveHeader ? (
          <CardImage
            src="/docs/card/card-image.jpg"
            alt="Labcodes offices' view"
            isOverflowed={cardImageIsOverflowed}
          />
        ) : null}
        <CardHeader
          title={cardHeaderTitle}
          titleClassName={cardHeaderTitleClassName}
          subtitle={cardHeaderSubtitle}
          subtitleClassName={cardHeaderSubtitleClassName}
          categoryText={cardHeaderCategoryText}
          categoryLabelText={cardHeaderCategoryLabelText}
          categoryIcon={
            cardHeaderCategoryColor.length ? undefined : cardHeaderCategoryIcon
          }
          categoryColor={
            cardHeaderCategoryIcon.length ? undefined : cardHeaderCategoryColor
          }
          isOverlay={cardHeaderIsOverlay}
        />
        {!cardImageIsAboveHeader ? (
          <CardImage
            src="/docs/card/card-image.jpg"
            alt="Labcodes offices' view"
            isOverflowed={cardImageIsOverflowed}
          />
        ) : null}
        <span dangerouslySetInnerHTML={{ __html: cardBodyHTML }} />
      </Component>
    );
  };

  render() {
    const {
      currentComponent,
      availableComponents,
      selectedColor,
      selectedSkin,
      showHeaderConfigs,
      showCardBodyHTML,

      cardImageIsOverflowed,
      cardImageIsAboveHeader,

      cardHeaderTitle,
      cardHeaderSubtitle,
      cardHeaderCategoryText,
      cardHeaderCategoryLabelText,
      cardHeaderCategoryIcon,
      cardHeaderCategoryColor,
      cardHeaderIsOverlay,

      cardBodyHTML,
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
                onChange={this.handleInputChange}
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
                  onChange={this.handleInputChange}
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

          <div>
            <span className="lab-playground__item" style={{ width: "100%" }}>
              <label htmlFor="cardBodyHTML">
                <span
                  style={{ cursor: "pointer", display: "flex" }}
                  onClick={() => this.handleToggleFor("showCardBodyHTML")}
                >
                  <Icon
                    type={
                      showCardBodyHTML ? "collapse-open" : "collapse-closed"
                    }
                  />
                  Body HTML
                </span>
                {showCardBodyHTML ? (
                  <React.Fragment>
                    <textarea
                      style={{
                        width: "100%",
                        minHeight: "100px",
                        resize: "none",
                      }}
                      name="cardBodyHTML"
                      value={cardBodyHTML}
                      onChange={this.handleInputChange}
                    />
                  </React.Fragment>
                ) : null}
              </label>
            </span>
          </div>

          <h6>CardImage</h6>
          <span className="lab-playground__item">
            isOverflowed
            <br />
            <Toggle
              name="cardImageIsOverflowed"
              value={cardImageIsOverflowed}
              handleToggle={() => this.handleToggleFor("cardImageIsOverflowed")}
            />
          </span>

          <span className="lab-playground__item">
            Show it above the CardHeader
            <br />
            <Toggle
              name="cardImageIsAboveHeader"
              value={cardImageIsAboveHeader}
              handleToggle={() =>
                this.handleToggleFor("cardImageIsAboveHeader")
              }
            />
          </span>

          <h6
            onClick={() => this.handleToggleFor("showHeaderConfigs")}
            style={{ cursor: "pointer", display: "flex" }}
          >
            <Icon
              type={showHeaderConfigs ? "collapse-open" : "collapse-closed"}
            />
            CardHeader
          </h6>

          {showHeaderConfigs ? (
            <React.Fragment>
              <div className="lab-playground__item">
                <TextInput
                  label="Title"
                  id="cardHeaderTitle"
                  value={cardHeaderTitle}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <Toggle
                  name="cardHeaderIsOverlay"
                  value={cardHeaderIsOverlay}
                  handleToggle={() =>
                    this.handleToggleFor("cardHeaderIsOverlay")
                  }
                />
                isOverlay
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Subtitle"
                  id="cardHeaderSubtitle"
                  value={cardHeaderSubtitle}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Text"
                  id="cardHeaderCategoryText"
                  value={cardHeaderCategoryText}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Label Text"
                  id="cardHeaderCategoryLabelText"
                  value={cardHeaderCategoryLabelText}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Icon"
                  id="cardHeaderCategoryIcon"
                  helpMessage="Leave empty to use category color"
                  value={cardHeaderCategoryIcon}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="lab-playground__item">
                <TextInput
                  label="Category Color"
                  id="cardHeaderCategoryColor"
                  value={cardHeaderCategoryColor}
                  onChange={this.handleInputChange}
                />
              </div>
            </React.Fragment>
          ) : null}
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

  handleInputChange = (e) => {
    const { name, id, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    } else {
      this.setState({ [id]: value });
    }
  };

  handleToggleFor = (stateKey) =>
    this.setState({ [stateKey]: !this.state[stateKey] });
}
