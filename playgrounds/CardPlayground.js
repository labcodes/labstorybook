/* eslint-disable */
import React from "react";
import { Props } from "@storybook/addon-docs/blocks";

import {
  OutlineCard,
  FilledCard,
  OutlineFilledCard,
  CardImage,
  CardHeader,
  CardDivider,
  LinkAction,
  DoubleAction,
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

      cardIsHorizontal: false,

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

      cardDividerIsOverflowed: false,

      availableCardActions: { LinkAction, DoubleAction },
      currentCardAction: "LinkAction",
      cardActionOpenNewTab: false,
      cardActionIsHorizontal: false,
      cardActionIsText: false,
    };
  }

  renderCurrentComponent = () => {
    const {
      selectedColor,
      selectedSkin,
      availableComponents,
      currentComponent,

      cardIsHorizontal,

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

      cardDividerIsOverflowed,

      currentCardAction,
      cardActionOpenNewTab,
      cardActionIsHorizontal,
      cardActionIsText,
    } = this.state;
    const Component = availableComponents[currentComponent];

    return (
      <Component color={selectedColor} skin={selectedSkin} isHorizontal={cardIsHorizontal}>
        {/* Remove this h1 when implementing the UI, since it's nor part of the card */}
        {/* <h1>{currentComponent}</h1> */}

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

        <CardDivider isOverflowed={cardDividerIsOverflowed} />

        {currentCardAction === "LinkAction" ? (
          <LinkAction
            href={`${window.location.href}&link-action=clicked`}
            onClick={(e) => {
              console.log("LinkAction clicked", e);
            }}
            text="Sample Link Action"
            openNewTab={cardActionOpenNewTab}
          />
        ) : null}

        {currentCardAction === "DoubleAction" ? (
          <DoubleAction
            actionsProps={[
              {
                text: "Action 1",
                onClick: (e) => console.log("Action 1 clicked", e),
                icon: "plus",
              },
              {
                text: "Action 2",
                onClick: (e) => console.log("Action 2 clicked", e),
                icon: "minus",
              },
            ]}
            isHorizontal={cardActionIsHorizontal}
            isText={cardActionIsText}
          />
        ) : null}
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

      cardIsHorizontal,

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

      cardDividerIsOverflowed,

      availableCardActions,
      currentCardAction,
      cardActionOpenNewTab,
      cardActionIsHorizontal,
      cardActionIsText,
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

          <span className="lab-playground__item">
            isHorizontal
            <br />
            <Toggle
              name="cardIsHorizontal"
              value={cardIsHorizontal}
              handleToggle={() => this.handleToggleFor("cardIsHorizontal")}
            />
          </span>

          <span className="lab-playground__item" style={{ width: "100%" }}>
            <label htmlFor="cardBodyHTML">
              <span
                style={{ cursor: "pointer", display: "flex" }}
                onClick={() => this.handleToggleFor("showCardBodyHTML")}
              >
                Body HTML
                <Icon
                  type={showCardBodyHTML ? "collapse-open" : "collapse-closed"}
                />
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
            CardHeader
            <Icon
              type={showHeaderConfigs ? "collapse-open" : "collapse-closed"}
            />
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

          <h6>CardDivider</h6>
          <span className="lab-playground__item">
            isOverflowed
            <br />
            <Toggle
              name="cardDividerIsOverflowed"
              value={cardDividerIsOverflowed}
              handleToggle={() =>
                this.handleToggleFor("cardDividerIsOverflowed")
              }
            />
          </span>

          <h6>CardAction</h6>
          <span className="lab-playground__item">
            <label htmlFor="currentCardAction">
              Component
              <br />
              <select
                name="currentCardAction"
                value={currentCardAction}
                onChange={this.handleInputChange}
              >
                {Object.keys(availableCardActions).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </span>

          {currentCardAction === "LinkAction" ? (
            <span className="lab-playground__item">
              openNewTab
              <br />
              <Toggle
                name="cardActionOpenNewTab"
                value={cardActionOpenNewTab}
                handleToggle={() =>
                  this.handleToggleFor("cardActionOpenNewTab")
                }
              />
            </span>
          ) : null}

          {currentCardAction === "DoubleAction" ? (
            <React.Fragment>
              <span
                className="lab-playground__item"
              >
                isHorizontal
                <br />
                <Toggle
                  name="cardActionIsHorizontal"
                  value={cardActionIsHorizontal}
                  handleToggle={() =>
                    this.handleToggleFor("cardActionIsHorizontal")
                  }
                />
              </span>
              <span
                className="lab-playground__item"
              >
                isText
                <br />
                <Toggle
                  name="cardActionIsText"
                  value={cardActionIsText}
                  handleToggle={() =>
                    this.handleToggleFor("cardActionIsText")
                  }
                />
              </span>

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
